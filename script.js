"use strict";

// 1
function sumTwoSmallestNumbers(array, ...arg) {
    if (array.length < 2) {
        console.error("Not enough arguments")
        return;
    };
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[0] + sortedArray[1];
};

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77, 676, 888, 7, 8])); // 7
console.log(sumTwoSmallestNumbers([1, 3, 2])); // 3
console.log(sumTwoSmallestNumbers([1])); // undefined и отдельный console.error("...")