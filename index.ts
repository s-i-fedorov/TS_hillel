function deepClone(obj:{}|[]):{}{
    if(typeof(obj) !== 'object'){
        return obj
    }
    if (Array.isArray(obj)){
        if(obj.length===0) return []
        let arrCopy:[] = []
        obj.forEach(item=>arrCopy.push(item))
        return arrCopy
    }
    const objCopy = {}
    for (const key in obj) {

            objCopy[key] = deepClone(obj[key]);

    }
    return objCopy
}

const original = { a: 1, b: { c: 2 }, d: [3, 4] };
// const copy = deepClone(original);
// original !== copy
// original.b !== copy.b
// original.d !== copy.d