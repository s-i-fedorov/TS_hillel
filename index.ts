type SimpleArray = (string|number)[]
const array:SimpleArray = []
function reverseArr(arr:SimpleArray): SimpleArray{
    if (arr.length === 0) throw new Error('Array is empty')
    let temp:number|string = 0
    let start:number = 0
    let end:number = arr.length-1
    while (start<end){
        temp = arr[start];
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
    return arr
}
console.log(reverseArr(array))

console.log(reverseArr(array)===array)