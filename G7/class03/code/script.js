console.log("Hello");

// ----- SWITCH STATEMENT ----------  

//if/else

// let userInput = parseInt(prompt("Enter a number from 1-7"));

// if(userInput === 1) {
//     console.log("You are free on Monday");
// } 
// else if(userInput === 2) {
//     console.log("You have class on Tuesday");
// } 
// else if(userInput === 3) {
//     console.log("You are free on Wednesday");
// } 
// else if(userInput === 4) {
//     console.log("You have class on Thursday");
// } 
// else if(userInput === 5) {
//     console.log("You are free on Friday");
// } 
// else if(userInput === 6) {
//     console.log("You have class every other Saturday");
// } 
// else if(userInput === 7) {
//     console.log("You are free on Sunday");
// } 
// else {
//     console.log("There is no such day");
// }

// switch
// switch(userInput) {
//     case 1:
//         console.log("You are free on Monday");
//         break;
//     case 2:
//         console.log("You have class on Tuesday");
//         break;
//     case 3:
//         console.log("You have class on Wednesday");
//         break;
//     case 4:
//         console.log("You have class on Thursday");
//         break;
//     case 5:
//         console.log("You are free on Friday");
//         break;
//     case 6:
//         console.log("You have class every other Saturday");
//         break;
//     case 7:
//         console.log("You are free on Sunday");
//         break;
//     default: 
//         console.log("There is no such day");
//         break;
// }

// Fall trough scenario (if we omit some break;)
// switch(userInput) {
//     case 1:
//         console.log("You are free on Monday");
//         break;
//     case 2:
//         console.log("You have class on Tuesday");
//     case 3:
//         console.log("You have class on Wednesday");
//     case 4:
//         console.log("You have class on Thursday");
//         break;
//     case 5:
//         console.log("You are free on Friday");
//         break;
//     case 6:
//         console.log("You have class every other Saturday");
//         break;
//     case 7:
//         console.log("You are free on Sunday");
//         break;
//     default: 
//         console.log("There is no such day");
//         break;
// }

// you can call the function before the declaration, but try to avoid it
sayHello();

// Functions
console.log("--------- Functions ---------");

// Good practice: first declare the function, then call it (uste it)
function sayHello() {
    console.log("Hello g7");
}



sayHello();
sayHello();
sayHello();


// functions with parametars
// scope

let globalScope = 222; // global scope;
let num1 = 10;
let num2 = 35;

let someOtherNumber = 99;

function sumOfNumbers(number1, number2) {
    let result = number1 + number2; // functional scope
    console.log("The result is: ", result);
    globalScope = 300;
}

sumOfNumbers(4, 5);
console.log(globalScope);

let result = 20; // global scope

console.log("Outside result:", result);

sumOfNumbers(num1, 5);
sumOfNumbers(num1, num2);

sumOfNumbers(someOtherNumber, 88);

// functions with return values

function sumOfNumbersReturn(num1, num2) {
    let result = num1 + num2;
    return result;
}

let resultSum1 = sumOfNumbersReturn(10, 40);
let resultSum2 = sumOfNumbersReturn(100, 50);
let totalResult = resultSum1 + resultSum2;

console.log(resultSum1);
console.log(resultSum2);
console.log("Total Result: ", totalResult);

let testSum1 = sumOfNumbers(10, 40);
let testSum2 = sumOfNumbers(100, 50);
let testTotalResult = testSum1 + testSum2;

console.log(testSum1)
console.log(testSum2)
console.log(testTotalResult);

function changeGlobalValue(newValue) {
    globalScope = newValue;
}

changeGlobalValue(700);

console.log(globalScope);

// default parametars
function sumOfThreeNumbers(num1, num2, num3 = 150) {
    let resultOfNumbers = num1 + num2 + num3;
    return resultOfNumbers;
}

let functionResult1 = sumOfThreeNumbers(30, 40);
let functionResult2 = sumOfThreeNumbers(50, 150, 100);
let newTotalResult = functionResult1 + functionResult2;

console.log(functionResult1);
console.log(functionResult2);
console.log(newTotalResult);

console.log("--------- SCOPE ------------");

let input = 5; // this lives in the global scope and we can use it in our function.

function scopeTestFunction(num1, num2) { // This is the functional scope. Everything that's inside of {} is in the functional scope.
    let result = num1 + num2 + input;
    console.log("Result is: ", result);

    if(input === 5) {
        let result2 = num1 + num2 - input; // let is defined in the block scope
        var someNumber = 5555;
        const someConst = 111;

        console.log("Result 2: ", result2);
        console.log("Some Const: ", someConst);
    }

    // console.log("Result 2: ", result2);
    console.log("Some number:", someNumber);
    // console.log("Some Const: ", someConst);
}

// console.log("Some number:", someNumber);


scopeTestFunction(1, 10);

// Exercise 3

function calculateAge(birthYear) {
    let age = new Date().getFullYear() - birthYear;
    console.log(`You are ${age} years old`);
}

calculateAge(1992);
calculateAge(2000);