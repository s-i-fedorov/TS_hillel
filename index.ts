function deepClone(obj:{}|[]):{}{
    if(typeof(obj) !== 'object'){
        return obj
    }
    if (Array.isArray(obj)){
        let arrCopy:[] = []
        obj.forEach(item=>arrCopy.push(item))
        return arrCopy
    }
    const objCopy = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }
    return objCopy
}