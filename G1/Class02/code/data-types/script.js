console.log("================ STRINGS ================");
// string = text

let firstName; // declaration
firstName = "Bob"; // initialization
let lastName = "Bobsky";

// ways to create string
// using single quotes
let singleQuotes = 'This is a string with single quotes';
// using double quotes
let doubleQuotes = "This is a string with double quotes";
// using backticks (template literals)

console.log("======= Combining strings =======");
// using the '+' operator (Concatenation)
console.log("First name:" + " " + firstName + " Hello !");
console.log(firstName + " " + lastName);
let age = 30;
console.log(firstName + " is " + age + " years old.");
console.log(2 + 2); // 4
console.log(2 + "2"); // when we concatenate number and string the number is automatically converted to string

// using String Interpolation *
let fullName = `Full name: ${firstName} ${lastName}`;
// used when combining variables and strings
console.log(fullName);
let fullName2 = "Full name: ${firstName} ${lastName}";
console.log(fullName2);

console.log("======= Quotes within strings =======");
// let sentence = 'This isn't possible'; // doesn't work
let sentence1 = "This isn't hard";
console.log(sentence1);
let sentence2 = 'He replied: "Hey there"';
console.log(sentence2);
let sentence3 = '\'TO BE\' or \'NOT TO BE\''; // we can escape character using backslash '\'
console.log(sentence3);
let sentence4 = `'"${sentence3}", the question is now'`;
console.log(sentence4);


console.log("");
console.log("================ NON-VALUE VALUES ================");

// undefined
// Typically occures unintentionally *
// It's the default value of uninitialized variables in JavaScript.
// let undefinedVariable = undefined;  NEVER DO THIS!
let undefinedVariable;
console.log(undefinedVariable); // undefined

// null
// We intentionally assign it to a variable *
// It is explicitly assigned to a variable to indicate that the variable intentionally holds no value or an empty value
let emptyVariable = null;
console.log(emptyVariable); // null



console.log("");
console.log("================ SPECIAL NUMBERS ================");

console.log("======= NaN ======="); // Not a Number
// It is result of an operation that cannot produce a valid numerical result
let result = 100 / "deset";
console.log(result);
console.log(typeof result);  // typeof => used to determine of which type is a certain variable

// Ways to check wether a value is NaN
console.log(isNaN(result)); // true
// console.log(Number("tekst")); // NaN => converting tekst to number
console.log(isNaN("tekst")); // true
console.log(Number.isNaN("tekst")); // false
// unlike Number.isNaN(), isNaN() forcefully converts the parameter to a number
// in most cases Number.isNaN() is the way to go 

console.log("======= Inifinities =======");
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);

console.log(1 / 0);  // Infinity
console.log(-1 / 0);  // -Infinity
// Don't divide by zero!
