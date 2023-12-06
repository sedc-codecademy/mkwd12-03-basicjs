console.log("================ CONTROL STRUCTURES ================");
// 1) Conditional Statements
// 2) Switch Statement
// 3) Looping Structures

// Purpose: Control the flow of the program ***

console.log("");
console.log("================ CONDITIONAL STATEMENTS ================");

let number = 10;
// Program to check wether a givven number is positive, negative, zero ....
console.log("========= IF statement =========");
// Base syntax
// if (boolean statment) {
// code...
// will be executed only if the boolean statement is true
// }
// number = 0;
if (number > 0) {
    console.log(`The number ${number} is positive.`);
}

console.log("========= ELSE statement =========");
// must come after 'if' or 'else if' statement
// else {
// }
number = -5;
if (number > 0) {
    console.log(`The number ${number} is positive.`);
} else {
    console.log(`The number ${number} isn't positive.`);
}


console.log("========= ELSE IF statement =========");
// must come after 'if' statement
// else if (boolean statement) {
// }

if (number > 0) {
    console.log(`The number ${number} is positive.`);
} else if (number < 0) {
    console.log(`The number ${number} is negative.`);
} else {
    console.log(`The number ${number} is zero.`);
}


number = 101;
// the order of the statements is important!
if (number >= 100) {
    console.log(`The number ${number} is larger then 100.`);
} else if (number > 0) {
    console.log(`The number ${number} is positive.`);
} else if (number < 0) {
    console.log(`The number ${number} is negative.`);
} else {
    console.log(`The number ${number} is zero.`);
}


console.log("");
console.log("================ GETTING AN INPUT ================");
// Everything you get from the screen is of type STRING !!!
// The prompt() function can be used to ask the user for input

let input = prompt("Enter a number:");
// if we click Cancel the value of the input is null
console.log("The type of the input is " + typeof input);
console.log(`Input value is: ${input}`);
// console.log(input + 22);

// we use parseInt() function to convert something into a number
let parsedNumber = parseInt(input);

if (Number.isNaN(parsedNumber)) {
    console.log("You've entered invalid number!");
} else {
    console.log("The parsed value is " + parsedNumber);
}

