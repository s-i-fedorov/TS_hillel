function deepClone(obj:Example): {}|[]{
    if(typeof(obj) !== 'object' || obj===null){
        return obj
    }
    if (Array.isArray(obj)){
        if(obj.length===0) return []
        return obj.map(item=>deepClone(item))
    }
    const objCopy:{[key:string]:string|number|{}|[]} = {}
    for (const key in obj) {

            objCopy[key] = deepClone(obj[key]);

    }
    return objCopy
}

interface Example {
    [key:string]:string|number|number[]|string[]|{}
    // a: number,
    // b: {c:number},
    // d: number[]
}

const original:Example = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);
console.log( original !== copy)
console.log( original.b !== copy.b)
console.log( original.d !== copy.d)
