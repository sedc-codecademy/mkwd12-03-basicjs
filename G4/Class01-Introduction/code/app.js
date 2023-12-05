// Logs values to the console
console.log("script is working");

// Shows the user an alert popop in the browser window
// alert("hello from G4");

// Basic variables examples

// Declaration
let studentName;

console.log(studentName);

// Initialization
studentName = "Konstantin";

console.log(studentName);

studentName = "Biljana";

console.log(studentName);

// Declaration and Initialization

let studentLastName = "Anastasijevikj";

console.log(studentLastName);

console.log(studentName, studentLastName);

// Primitive data types

//Strings
let fruit = "Apple";

let fruits = "Apples\nOranges\nPears";

console.log(fruit);
console.log(fruits);

console.log(typeof fruit);

// Numbers

let numberOne = 300; // Never define numbers with quotes ex: "300"
let numberTwo = 600;

console.log(numberOne, numberTwo);

// Booleans

let isAvailable = true;
let isFuritAvailable = false;

console.log(isAvailable, isFuritAvailable);

// Unedefined

let className;

console.log(className);

// NULL

let academyName = "SEDC GEN12"; //This is an inline comment

academyName = null;

console.log(academyName);

console.log(typeof null);

/* 
This is a multi
line
comment
over 
here
*/

// Arithmetic Operators

let numOne = 300;
let numTwo = 230;

// Only create variables like this if you intend to use the value in the app
let addResult = numOne + numTwo;

console.log(addResult);

// You don't always need to create a result variable to log it in the console, just adding the expression is enough
console.log(numOne - numTwo);

console.log(numOne * numTwo);

console.log(numOne / numTwo);

console.log(20 % 3);

// Increment and decrement

let counter = 0;

counter++;
counter++;
counter++;
counter++;

console.log("counter after increment", counter);

counter--;
counter--;
counter--;
counter--;

console.log("counter after decrement", counter);

// Comparison

console.log(numOne < numTwo);

console.log(numOne === numTwo);

console.log("Borche" === "Borche");

console.log("Borche" !== "Borche");

console.log(numOne !== numTwo);

// Assignment oprators

let addNumOne = 10;
let addNumTwo = 20;

addNumOne *= addNumTwo;

addNumOne += 10;

console.log(addNumOne);

// Exercise One Solution

let oneFootInMeter = 0.3048;

let lengthInMeters = 1200;

let lengthInFeet = 20000;

let resultInFeet = lengthInMeters / oneFootInMeter;

let resultInMeters = lengthInFeet * oneFootInMeter;

console.log("Result in feet", resultInFeet);
console.log("Result in meters", resultInMeters);

// Exercise two solution

let rectanlgeLength = 32;

let rectanleHeight = 20;

let rectangleArea = rectanlgeLength * rectanleHeight;

console.log("Rectangle Area", rectangleArea);

// Exercise three solution

let pi = Math.PI;

let circleRadius = 25;

let circleArea = pi * circleRadius * circleRadius;

console.log("Circle Area", circleArea);
