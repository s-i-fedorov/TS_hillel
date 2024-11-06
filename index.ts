type SimpleArray = (string|number)[]
const array:SimpleArray = [1,2,3,4,5,6,7,8,9]
function reverseArr(arr:SimpleArray): SimpleArray{
    let startIndex:number = 0
    let endIndex:number = arr.length-1
    for (;startIndex<endIndex;){
        [arr[startIndex],arr[endIndex]] = [arr[endIndex],arr[startIndex]]
        startIndex++
        endIndex--
    }
    return arr
}
console.log(reverseArr(array))

console.log(reverseArr(array)===array)