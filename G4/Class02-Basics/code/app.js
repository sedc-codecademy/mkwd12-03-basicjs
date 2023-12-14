console.log("It is alive");

let groupNumber = "G4";

let year = 2023;

let groupName = "SEDC" + "-" + groupNumber;

console.log(groupName);

let groupYear = groupName + "-" + year;

console.log(groupYear);

let updatedYear = `SEDC-${groupNumber}-${year}`;

console.log("this is the update", updatedYear);

let brokenString = `"It's nice to be a programmer: 'I Agree'"`;

let whatAmIDoing = "Borche" * 120;

console.log(whatAmIDoing);

console.log(isNaN("Borche"));
// Always use Number.isNaN for checking if a value is not a number
console.log(Number.isNaN("Borche"));

// Operators

let numOne = 20;
let numTwo = 50;
let numThree = 100;
let numFour = 120;

let resultOne = numOne + numTwo < numThree + numFour;

let resultTwo = numOne > 10 && numTwo > 40;

let resultThree = numOne + numTwo < 100 && numThree + numFour < 300;

console.log(resultOne);
console.log(resultTwo);
console.log("Result 3", resultThree);

// When logical operators return values instead of booleans

// If all values on the left side are true returns the right side or returns the first falsey value
let andExampleOne = true && "Borche";

// If left side is falsey, return the left side
let andExampleTwo = false && "Borche";

console.log("AND Example one", andExampleOne);

let orExampleOne = "Hristina" || false || null || "Borche";

console.log(orExampleOne);

let orExampleTwo = false || "Hristina";

console.log(orExampleTwo);

// Control structures

let score = 80;

if (score > 100) {
  console.log("You won, congratatulations!!!");
} else {
  console.log("Go to probishtip on vecation!!!");
}

// Friday cash program

let fridayCash = 14;
let studentIsReady = true;

if (fridayCash >= 50 && studentIsReady) {
  console.log("Go to cineplexx");
} else if (fridayCash >= 35 && studentIsReady) {
  console.log("Have a nice dinner");
} else if (fridayCash >= 12 && !studentIsReady) {
  console.log("Learn programming in coffee shop");
} else {
  console.log("Learn programming at home");
}

let userInput = prompt("Please enter your age");

let parseIntResult = parseInt(userInput);

// Use Number() for parsing string into number because it's more accurate and it is more consistent
let numberResult = Number(userInput);

// Number.isNaN(value  )

console.log(userInput, parseIntResult, numberResult);
