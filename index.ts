type SimpleArray = (string|number)[]
const array:SimpleArray = [1,2,3,4,5,6,7,8,9,10]
function reverseArr(arr:SimpleArray): SimpleArray{
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