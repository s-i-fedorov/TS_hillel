"use strict";
let arrExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, a, 11, 12, 13, 14, 15, 16];
function avrCalc(arr) {
    const arrSum = arr.reduce((acc, el) => acc + el, 0);
    const result = arrSum / arr.length;
    console.log(result);
}
avrCalc(arrExample);
