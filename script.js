'use strict'
const array = [1,2,3,4,5,6,7,8,9,10]
function reverseArr(arr){
    if (arr.length === 0) return 'error'
    let s = 0
    let e = arr.length-1
    while (s<e){
        [arr[s],arr[e]] = [arr[e],arr[s]]
        s++
        e--
    }
    return arr
}

console.log(reverseArr(array))

console.log(reverseArr(array)===array)