// alert("Hello!");
// console.log("Hello from Javascript");

// Working with Variables
// var number; // Declaration - this will be undefined in console.log(number);
// var number = 5; // Declaration and initialization
// console.log(number + 5);


//Local Scope
// Variable firstName is not accessible out of the {} 
// {} are curly brackets and represent a scope in a function
// 
// function LocalScope() {
    // var firstName = "Marko"; // this will return undefined because it cannot find this variable
// }
// var firstName = "Marko";

// console.log(firstName);

// Undefined VS NULL
var testvar;
var number = 1;
var string = 'Marko';
var bool = true;
var empty = null;
console.log(testvar); // we will use console.log to display variable values and other stuff
// alert(testvar); // avoid using alert Marko doesn't like it
console.log(typeof testvar); // this will give us undefined because type of a variable with no value is undefined
console.log(typeof number); // number
console.log(typeof string); // string or text
console.log(typeof bool); // boolean which is true or false
console.log(typeof empty); // this has no value(null) but typeof null is an object

var textNumber = '123';
var exampleNumber = 123;
console.log(textNumber == exampleNumber); // This will return true because == only checks if the values are equivalent
console.log(textNumber === exampleNumber);// This will return false because it checks whether the types and the value is equivalent
console.log(textNumber - exampleNumber); // This will return 0
console.log(exampleNumber + textNumber); // This will return 123123 no matter which variable is first it will join the two strings together

var firstText = 'Marko';
var secondText = 'Djamtoski';
console.log(firstText + secondText); // This will give us MarkoDjamtoski

// var break;  not allowed because break is a keyword


// Exercise
// var feet = prompt();
// console.log(feet * 0.3048);
// 1 line solution
// console.log(prompt() * 0.3048);

// Exercise 2
// var area;
// var a = prompt("Enter a number for a:");
// var b = prompt("Enter a number for a:");
// area = a * b;
// console.log(area);

// 1 line solution
// console.log(prompt() * prompt());
// var pi = Math.PI;
// var r = prompt();
// var area = pi * (r*r);
// console.log(area);

// 1 line solution
console.log(Math.PI*Math.pow(prompt(),2));