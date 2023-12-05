console.log("Hello from Javascript!");

//Variables

//declaration;
var trainer;
console.log(trainer);

// initialisation
trainer = "Pane";
console.log(trainer);

// declaration & initialisation
var assistant = "Aleksandar";
console.log(assistant);

trainer = "John";
console.log(trainer);

// in js is possible to reasign a value to a variable from a diffrent data type
// trainer = 56;
// console.log(trainer);


// Undefined vs Null 
console.log("---------Undefined vs null----------");

var testVar;
console.log(testVar);
console.log(typeof testVar);


var testVar02 = null;
console.log(testVar02);
console.log(typeof testVar02);

// naming convention types

// camelCase: userInputNumber - we usually use this convention for naming variables in JS.
// pascalCase: UserInputNumber
// kebab-case" user-input-number

// Data types

// string
var name1 = "John Dow";
console.log(typeof name1);

// number
var num1 = 5.22;
console.log(typeof num1);

//boolean
var booleanType = true;
console.log(typeof booleanType);

// equality in js
console.log("--------- Equality in JS -----------");

// checks if the two sides are equal both by value and type
console.log(5 === "5");

// checks if the two sides are equal onnly by value
console.log(5 == "5");

console.log(4 !== "4");

console.log(4 != "4");

console.log(4 > 2);
console.log(2 > 4);

console.log(7 * 12);

// asignment operators

var a = 5;
console.log("original value of a: ", a);

var b = 1;
console.log("original value of b: ", b);

// a = a + b
a += b
console.log("new value of a: ", a);

// a = a - b
a -= b
console.log("the new new value of a: ", a);

// exercise 3 - 1

var feet = 90;
var ponder = 0.3048
var feetToMeters = feet * ponder;

console.log(feet + " feet are equal to " + feetToMeters);

// newer fancy way
console.log(`${feet} feet are equal to ${feetToMeters}`);


// exercise 3 - 2

var sideA = 14;
var sideB = 8;
var result = sideA * sideB;

console.log(`Rectangle area is ${result}m2`);

// exercise 3 - 3
var radius = 10;
var pi = Math.PI
// console.log(pi);

var areaCircle = (radius * radius) * pi;

console.log(`Circle area is ${areaCircle}m2`);





