console.log("Hello from javascript!");
console.log("We connected the external javascript file");







console.log("Hello world");

console.log("**** VARIABLES ****");
// **** DECLARATION OF VARIABLE ****
// var is keyword for declaring variables
// camelCase
var firstName;
var lastName;
// snake_case
var birth_info;

// dont do this =)
// var имеИПрезиме
// var person info

// **** INICIALIZATION OF VARIABLE ****
firstName = "John";
lastName = "Doe";
birth_info = "9.02.1995";

// Printing the variables that we declared and initicialized;

console.log(firstName);
console.log(lastName);
console.log(birth_info);

// **** DECLARATION AND INICIALIZATION OF VARIABLES ****
// let is same as var but better (we declare variables) =)
let personTwoName = "Bob";
let personTwoLastName = "Bobski";

console.log(personTwoName);
console.log(personTwoLastName);

// **** DECLARING OF MULTIPLE VARIABLES ****

// let subjectOne;
// let subjectTwo;
// let subjectThree;

// IMPORTANT: We cannot declare variables with same name!!!
// same as above, but shorter
let subjectOne, subjectTwo, subjectThree;

// **** INITIALIZING VARIABLES ****
subjectOne = "HTML";
subjectTwo = "CSS";
subjectThree = "Javascript"

console.log(subjectOne);
console.log(subjectOne);
console.log(subjectOne);

console.log(subjectThree);
console.log(subjectThree);
console.log("Javascript");

console.log("**** OVERWRITING VARIABLE ****")
let movieName = "John Wick";
// Before overwriting
console.log(movieName);
// After overwriting
movieName = "Lord of the rings";
console.log(movieName);
console.log(movieName);
console.log(movieName);

// **** PRIMITIVE DATA TYPES ****
console.log("**** PRIMITIVE DATA TYPES ****");

let favouriteFruit = "Banana"; // String
let favouriteDrink = 'Black Coffee' // String
let myDogName = `Bubi` // String

let priceOfGamingLaptop = 500; // Number
let myAge = 28; // Number

let isPersonAdult = true; // Boolean
let isItSnowing = false; // Boolean

let projectName = undefined; // Undefined
let projectTwoName; // Undefined

// Nishto ama neshto
let nullValue = null; // Null

// typeof is inner built js function, that checks the type of the variable or the value =)
console.log(typeof favouriteFruit) // string
console.log(typeof favouriteDrink) // string

console.log(typeof priceOfGamingLaptop) // number
console.log(typeof 2009) // number

console.log(typeof isPersonAdult) // boolean

console.log(typeof projectName) // undefined
console.log(typeof projectTwoName) // undefined

console.log(typeof nullValue); // null (prints object)

console.log(typeof '25') // string =)

let welcomingMessage = "Hello \nworld";
console.log(welcomingMessage)

// single line comment

/* Multi 
line comment,
explaining my code so far =) */

// THIS IS UN ACCEPTABLE
let a = 1
let zzzz = 44
let bbb = 2

// **** ARITHMETIC OPERATORS ****
console.log("**** ARITHMETIC OPERATORS ****");

let numberOne = 10;
let numberTwo = 2;


console.log(numberOne + numberTwo);

let additionResult = numberOne + numberTwo;
console.log(additionResult);

let subtractionResult = numberOne - numberTwo - 5;
console.log(subtractionResult);

let multiplicationResult = 3 * numberOne;
console.log(multiplicationResult);

let divisionResult = 100 / numberOne;
console.log(divisionResult);

let modolusResult = 10 % 2;
console.log(modolusResult);
console.log(10 % 3);

let expoResult = 2 ** 3;
console.log(expoResult);

let complexCalculation = (30 - 20) * 2;
console.log(complexCalculation);

let numberThree = 30;
numberThree++
console.log(numberThree)

let numberFour = 43;
numberFour--;
numberFour--;
console.log(numberFour);

// **** COMPARISON ****
console.log('**** COMPARISON ****')
let personAge = 17;
let requiredAge = 18;

console.log(100 < 200); // true
console.log(22 > 21); // true

console.log(22 >= 22) // true

let isEntrenceAllowed = personAge >= requiredAge;
console.log(isEntrenceAllowed); // false

/**
 * checking equality with == (two equals) or 
 * === (three equals)
 * 
 * = one equal means that we ASSIGN VALUE TO A VARAIBLE
 */
let isEqual = 30 == 30;
console.log(isEqual) // true;

// != means NOT EQUAL
let isNotEqual = personAge != requiredAge;
console.log(isNotEqual) // true

// *** USING THREE EQUALS *** ===
console.log("*** USING THREE EQUALS *** ===");

let areNumbersTheSame = 50 === 50;
console.log(areNumbersTheSame) // true

let areSameNumbers = 50 === 150;
console.log(areSameNumbers) // false


// THE PROBLEM !!!!
let numberThirty = 30; // number
let numberThirtySecond = "30"; // string
// using == checks just the values
console.log(numberThirty == numberThirtySecond) // true

// THE SOLUTION ! =) 
// using === checks the value and the data type of the variable / values
console.log('** using ===')
console.log(numberThirty === numberThirtySecond)

// THE PROBLEM !!!
console.log('not equal !=')
console.log("30" != 30)

// THE SOLUTION  !== MEANS NOT EQUAL, BUT CHECKS THE PRIMITIVE DATA-TYPE AS WELL!!!
console.log("not equal !==")
console.log("30" !== 30)

// using === and !== for comparison is BETTER and more SAFE

/**
 * Exercise: Feet to meters convertor
 * BREAK DOWN THE PROBLEM!
 * one (1) feet = 0.3048 meters
 * 1. I should have the value of 1 feet to meters ratio - DONE
 * 2. I should have the feet value that I want to convert
 - DONE
 * 3. To get the result I should multiply feet value with meters ratio value.
 - DONE
 */

let feetToMetersRatio = 0.3048;
let feetToConvert = 50;

let result = feetToConvert * feetToMetersRatio;
console.log(result)