"use strict";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArr(arr) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    for (; startIndex < endIndex;) {
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
        startIndex++;
        endIndex--;
    }
    return arr;
}
console.log(reverseArr(array));
console.log(reverseArr(array) === array);
