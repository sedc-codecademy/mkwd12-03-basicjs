console.log("Script is online");

let grade = 10;

switch (grade) {
  case 1:
    console.log("Both parents need to see principal and police");
    break;
  case 2:
    console.log("Only the mother needs to see the princial");
    break;
  case 3:
    console.log("Well done, could be better");
    break;
  case 4:
    console.log("Keep going it is going to work out in college, or not");
    break;
  case 5:
    console.log("You are well connected, good luck being a mobster");
  default:
    console.log("Stop cheating your grades");
}

// To practice do the chinese zodiac homework with a switch statement

// Functions

// Function declaration

function sayHello() {
  console.log("Hello from G4");
  console.log("I hope you learn functions easy");
}

// Function execution or calling a function

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

function addTwoNumbers(numOne, numTwo) {
  console.log(`This is num one ${numOne}`);
  console.log(`This is num two ${numTwo}`);
  let result = numOne + numTwo;

  //   Functions without return will return undefined
  // All lines of code below a function return statement will not be executed
  return result;
}

let numberOne = 130;
let numberTwo = 520;

addTwoNumbers(numberOne, numberTwo);

let resultOne = addTwoNumbers(10, 15);

let resultTwo = addTwoNumbers(30, 10);

console.log(resultOne, resultTwo);

// Exercise one solution

function subtractTwoNumbers(numOne, numTwo) {
  let result = numOne - numTwo;
  return result;
}

function multiplyTwoNumbers(numOne, numTwo) {
  let result = numOne * numTwo;
  return result;
}

function divideTwoNumbers(numOne, numTwo) {
  let result = numOne / numTwo;
  return result;
}

divideTwoNumbers(30, 20);

let divideResult = divideTwoNumbers(10, 30);

console.log(divideTwoNumbers(30, 20));

// Default parameters

function printPersonInfo(firstName, lastName, country = "Macedonia") {
  console.log(`Hello to ${firstName} ${lastName} from ${country}`);
}

printPersonInfo("Borche", "Borisovski");
printPersonInfo("John", "Doe", "USA");

// console.log(result);

// Scope

function sayMyName() {
  let firstName = "Jane";
  console.log(firstName);
}

let firstName = "John";

sayMyName();
console.log(firstName);

// let wage = 500;

function calculateWageBonus() {
  wage = 500 + 100;
  console.log(wage);
}

// calculateWageBonus();
// console.log(wage);

function wageCalc() {
  wage = 1000; // `a` not formally declared
}

wageCalc(); // This will automatically create a global variable.
console.log(wage); // AVOID doing this

let message = "Outside the function";
function warning(message) {
  console.log(message);
}

warning("Inside the function");
console.log(message);
