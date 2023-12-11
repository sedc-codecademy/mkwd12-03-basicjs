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



console.log("==================== EXERCISE 2 ====================");

function celsiusToFarenheit(celsius) {
    let result = celsius * 1.8 + 32;
    return result;
}

function farenheitToCelsius(farenheits) {
    let result = (5 / 9) * (farenheits - 32);
    return result;
}

let personChoice = prompt("Enter F to convert to Farenheit and C to convert to Celsius")
let personInput = Number(prompt("Please enter value:"));
if (personChoice.toUpperCase() === "F") {
    console.log(`${celsiusToFarenheit(personInput)}F`);
} else if (personChoice.toUpperCase() === "C") {
    console.log(`${farenheitToCelsius(personInput)}C`);
} else {
    console.log("Invalid choice!");
}



console.log("======================= EXERCISE 3 =======================");
/*
    THE AGE CALCULATOR
    Forgot how old you are? Calculate it!

    Write a function named calculateAge that:
    takes 2 arguments: birth year, current year.
    calculates the age based on those years.
    outputs the result to the screen like so: "You are NN years old"
    Call the function three times with different sets of values.
    Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// function that returns a value (can be assigned to a variable)
function calculateAge(birthYear) {
    const date = new Date(); // gets the current date
    let currentYear = date.getFullYear();
    let result = currentYear - birthYear;
    return result;
}

// function that doesn't return a value (can't be assigned to a variable)
function printAge(age) {
    console.log(`You are ${age} years old.`);
}

let userInput = prompt("Enter birth year:");
let parsedInput = Number(userInput);

// one scenario handled... 
if (!Number.isNaN(parsedInput)) {
    let age = calculateAge(parsedInput);
    printAge(age);
}