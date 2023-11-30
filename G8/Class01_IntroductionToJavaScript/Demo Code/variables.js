//Numbers
var num = 7;
console.log("The value of the variable num is: ");
console.log(num);
console.log("Type of num: ")
console.log(typeof(num));

//Strings
var firstName = "Ana";
console.log("firstName: ");
console.log(firstName);
console.log(typeof(firstName));

var numericString = "25";
console.log("The value of the variable numericString is: ");
console.log(numericString);
console.log(typeof(numericString));

var message = 'Hello from SEDC!';
console.log("The value of the variable message is: ");
console.log(message);
console.log(typeof(message));

//Booleans
var bool = true;
console.log("The value of the variable bool is: ");
console.log(bool);
console.log(typeof(bool));

//if a variable changes value, it could change the variable's type
message = 8;
console.log("The value of the variable message is: ");
console.log(message);
console.log(typeof(message));


// One line comment

/* This is a comment
in multiple lines */

//undefined
var n; //declaration
console.log(n);
console.log(typeof(n));

//null
var nullableVar = null;
console.log(nullableVar);
console.log(typeof(nullableVar));

console.log("n after initialization");
n=10;
console.log(n);
console.log(typeof(n));

console.log("nullableVar after initialization");
nullableVar = "Hi";
console.log(nullableVar);
console.log(typeof(nullableVar));

nullableVar = n;
console.log("nullableVar after initialization with n:");
console.log(nullableVar);
console.log(typeof(nullableVar));

