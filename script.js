"use strict";

// 1
function sumTwoSmallestNumbers(...array) {
    if (array.length < 2) {
        console.error("Not enough arguments")
        return;
    };
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[0] + sortedArray[1];
};

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

// 2
const createCalculator = (initialValue) => {
    let value = 0;
    return {
        sum: (value) => (initialValue += value),
        mult: (value) => (initialValue *= value),
        sub: (value) => (initialValue -= value),
        div: (value) => (initialValue /= value),
    };
};
const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
