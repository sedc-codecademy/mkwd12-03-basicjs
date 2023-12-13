console.log("======================== FUNCTIONS ========================");

console.log("");
console.log("=========== Function Declaration ===========");
// function DECLARATION base syntax
function functionName(parameter1, parameter2) {
    // FUNCTION BODY => the code that will be executed when the function name is called
    // code goes here ...
}
// function => keyword for decalaring function
// functionName => the name of the function (what the function does)
// parameters => values that are used within the function (in the function body)

// function without parameters
function greet() {
    console.log("Hello from Qinshift Academy :)");
}

// console.log("Hello Todor, Qinshift Academy wishes you happy holidays!");
// console.log("Hello Sirma, Qinshift Academy wishes you happy holidays!");
// console.log("Hello Slavko, Qinshift Academy wishes you happy holidays!");
// console.log("Hello Boris, Qinshifst Academy wishe you happy holidays!");
// console.log("Hello Sasho, Qinshift Academy wishes you happy holidays!");
// console.log("Hello Vladimir, Quinshift Academys wishes yrou happy holidays!");
// console.log("Hello Nadica, Qinshift Academy wishes you happy holidays!");
// console.log("Hello Kiro, Quinshift Academys wishes yrou happy holidays!");
// HOW TO SOLVE THIS PROBLEM ?
// You guessed it => FUNCTION

// function with one parameter
// studentName is a placeholder for a value that will be passed when the function greetStudent is called
let student1 = "Vlatko";
let student2 = "Mirko";
let student3 = "Kiro";
let studentFromHome = ["Kiro", "Mirko", "Vlatko"];
let studentFromFaculty7 = ["Kiro", "Mirko", "Vlatko"];
let studentFromFaculty6 = ["Kiro", "Mirko", "Vlatko"];
let studentFromFaculty5 = ["Kiro", "Mirko", "Vlatko"];
let studentFromFaculty4 = ["Kiro", "Mirko", "Vlatko"];
let studentFromFaculty3 = ["Kiro", "Mirko", "Vlatko"];
let studentFromFaculty2 = ["Kiro", "Mirko", "Vlatko"];

function greetStudnts(inputArray) {
    for(let i = 0; i < inputArray.length; i++) {
        console.log("Hello", inputArray[i]);
    }
}

console.log(`Hello ${student1}, Qinshift Academy wishes you happy holidays!`);
console.log(`Hello ${student2}, Qinshift Academy wishes you happy holidays!`);
console.log(`Hello ${student3}, Qinshift Academy wishes you happy holidays!`);

function greetStudent(studentName) {
    console.log(`Hello ${studentName}, Qinshift Academy wishes you happy holidays!`);
}

greetStudent(student1);
greetStudent(student2);
greetStudent(student3);





console.log("");
console.log("=========== Function Execution ===========");
// calling (executing) previously declared function
// syntax for execution:
// functionName() or if it has parameters functionName(parameter1, parameter2)

// calling the greet function (function without parameter)
// let test = greet();
// console.log(test);
greet();
greet();
// can be called as many times as you need

// calling the greetStudent function (function with one parameter)
greetStudent(); // will get undefined for the studentName variable if we don't send name as an argument(parameter)
let studentName = "Stefan";
greetStudent("Bob Bobsky");
greetStudent("Sirma");
greetStudent("Slavko");
greetStudent(studentName);
// greetStudent(234234); // why do this ?



console.log("");
console.log("=========== Function that returns a value ===========");
// using the keyword 'return'
// NOTE: the execution of the code ENDS with the RETURN (the code after that doesn't execute)

function sum(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log(`Result is ${result}`);  // UNREACHABLE CODE !!!
}

let result = sum(5, 10);
console.log(`Result is ${result}`);


// Function for getting number statistics
function getNumberStats(number) {
    // logic for getting the number stats
    // NOTE: SWITCH statement evalutes ONLY the VALUE of the passed variable
    // switch (number) {
    //     case number > 0:  // THIS WON'T WORK ...
    //         return "Positive";
    //     // break; when we have return statement we don't need break
    //     case number < 0:
    //         return "Negative";
    //     case number === 0:
    //         return "Zero";
    //     default:
    //         return "Invalid number!";W
    // }
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else if (number === 0) {
        return "Zero";
    } else {
        return "Invalid number!";
    }
}

// 1) Get input
// let inputNumber = prompt("Enter a number:");
let inputNumber = 23423;
// 2) Prase the input as number
let parsedNumber = parseInt(inputNumber);
// 3) Check if the parsed value is a valid number !!!! (optional step for now...)
// 4) If the number is valid => Get numbers stats

// console.log(getNumberStats(parsedNumber));
// // code ...
// console.log(getNumberStats(parsedNumber));
// // code ...
// console.log(getNumberStats(parsedNumber));

let numberStats = getNumberStats(parsedNumber); // returns value, that value can be assigned to a variable
console.log(numberStats);
console.log(`The number ${parsedNumber} is ${numberStats}`);


function testReturn() {
    return 100;
}
// THE RETURN VALUE MUST BE USED IN SOME WAY, IT'S NOT ENOUGH TO JUST CALL THE FUNCTION
testReturn(); // the function is called, the code executed, returns value, BUT that value isn't stored or used in any way
let testReturnValue = testReturn();
console.log(testReturnValue); // 100



console.log("");
console.log("=========== Function Parameters ===========");
// *Parameters* => the variables (placeholders) used in the function declaration (num1, num2, num3)
function logNumbers(num1, num2, num3) {
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);
    console.log(`Number 3: ${num3}`);
    console.log("");
}
// *Arguments* => the variables (values) used when the function is executed (10, 20, 30)
logNumbers(10, 20, 30);
logNumbers();
logNumbers(10, 20);
// logNumbers(10,, 30); // ERROR
// logNumbers(10, "test", 30);
logNumbers(10, 20, 30, 40, "extra text"); // EXTRAS ARE IGNORED

// Default (Optional) Parameters
function logData(data1, data2 = 1000, data3 = "some random default value") {
    console.log(`Data 1: ${data1}`);
    console.log(`Data 2: ${data2}`);
    console.log(`Data 3: ${data3}`);
    console.log("");
}
logData(23, 50, 100);
logData(23, 50)
logData(4);



console.log("");
console.log("=========== JavaScript Built-in Functions ===========");

// # alert
// # prompt
// # console.log()
// # parseInt(value) => parses value into integer
// # parseFloat(value)
console.log(parseInt(2.252)); // 2
console.log(parseFloat(2.252)); // 2.252
// # Number(value)
let parsedNumberValue = Number("234.4343")
console.log(parsedNumberValue);
// # Boolean(value)
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
// newer syntax => instead of 'Boolean' we use '!!'
// console.log(!!"");
// console.log(!!"test");
// # ... many more ...



console.log("");
console.log("=========== Ways of parsing strings into numbers ===========");
// 1) parseInt(value)
// 2) parseFloat(value)
// 3) Number(value)
// 4) Using the '+' operator
console.log(Number("23432.3434")); //23432.3434
console.log(+"23432.3434"); //23432.3434