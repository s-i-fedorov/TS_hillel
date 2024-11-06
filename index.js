"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function reverseArr(arr) {
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
