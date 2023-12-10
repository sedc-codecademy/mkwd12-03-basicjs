console.log("======================= EXERCISE 1 =======================");
/*
    Write 4 functions
    All functions take 2 parameters and output a result
    Function that sums 2 numbers
    Function that subtracts 2 numbers
    Function that multiplies 2 numbers
    Function that divides 2 numbers
*/

// Functions Declaration
function sum(number1, number2) {
    let result = number1 + number2;
    return result;
}

function subtract(number1, number2) {
    let result = number1 - number2;
    return result;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    let result = number1 / number2;
    return result;
}

let sumResult = sum(10, 10);
console.log(sumResult);

let subtractResult = subtract(100, -200);
console.log(subtractResult);

let multiplyResult = multiply(5, 5);
console.log(multiplyResult);

// let divideResult = divide(100, 0);
// console.log(divideResult);  // Infinity => don't divide by zero






