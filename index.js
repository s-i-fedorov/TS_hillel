"use strict";
function deepClone(obj) {
    if (typeof (obj) !== 'object' || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        if (obj.length === 0)
            return [];
        return obj.map(item => deepClone(item));
    }
    const objCopy = {};
    for (const key in obj) {
        objCopy[key] = deepClone(obj[key]);
    }
    return objCopy;
}
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
