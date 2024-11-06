"use strict";
const array = [];
function reverseArr(arr) {
    if (arr.length === 0)
        throw new Error('Array is empty');
    let temp = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArr(array));
console.log(reverseArr(array) === array);
