let number; //declaration
number = 5; //initialization
console.log(number); //print in console

let firstName = "Tom";  //declaration and initialization
console.log(firstName); //print

console.log("====Number====")
//Numbers
let age = 25;
console.log("The value of the variable age is:");
console.log(age);
console.log("Type of age:");
console.log(typeof(age));
// console.log(typeof age);
console.log("Age: " + age);
console.log("Age:", age);

console.log("====String====");
//Strings
let lastName = "Smith";
console.log("The value of the variable lastName is:");
console.log(lastName);
console.log("Type of lastName:");
console.log(typeof(lastName));

let numericString = "25";
console.log("The value of the variable numericString is:");
console.log(numericString);
console.log("Type of numericString:");
console.log(typeof(numericString));

let message = "Hello from SEDC!";
console.log("The value of the variable message is:");
console.log(message);
console.log("Type of message:");
console.log(typeof(message));

console.log("====Booleans====");
//Booleans
let bool = false;
console.log("The value of the variable bool is:");
console.log(bool);
console.log("Type of bool:");
console.log(typeof(bool));



message = "Hello from Danilo!"
console.log(message);
//if a variable changes value, it could change the variable's type
message = 8;
console.log(typeof(message));

//parseInt
//extract the number from the string
let parsedNumber = parseInt(numericString);
console.log("The value of the variable parsedNumber is:");
console.log(parsedNumber);
console.log("Type of parsedNumber:");
console.log(typeof(parsedNumber));


console.log("====Undefined====");
//Undefined
let num; //declaration
console.log(num);
console.log("Type of num:");
console.log(typeof(num));

console.log("====NULL====");
//Null
let nullableLet = null;
console.log(nullableLet);
console.log("Type of nullableLet:");
console.log(typeof(nullableLet));

console.log("====New Line====");
//New Line
let newLine = "Hello from G5.\nThis goes is a new line.";
console.log(newLine);

// One line comment

/* This is a comment
in multiple lines */