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

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77, 676, 888, 7, 8]));
console.log(sumTwoSmallestNumbers([1, 3, 2]));
console.log(sumTwoSmallestNumbers([1]));

// 2
const createCalculator = (firstVariable) => {
    let value = 0;
    return {
        sum: (value) => (firstVariable += value),
        mult: (value) => (firstVariable *= value),
        sub: (value) => (firstVariable -= value),
        div: (value) => (firstVariable /= value),
    };
};
const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
