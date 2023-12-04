// alert('it works')

// Naming variables

// Variables can contain letters
var name = 'SEDC';

// Variables can container numbers
var student1 = 'Pero Perov';

// ...but can't start with a number
// var 1student = 'Kliment Stojanovski';

// Variables can contain special characters
var first_name = 'Todor';
var $test = null;
// var last-name = 'Todorovski'

// Variables in JS are written with camelCase

var firstName = 'Toshe';
var lastName = 'Toshev';
var dateOfBirth = '01.01.2000';

// Do NOT use var => Use let and const!
var oldVariable = 'Old';

let newVariable = 'New';
const anotherNewVariable = 'Constant';

// Types in JS
let age = 20; // type of age is a number
age = 'sho sakam'; // type of age is a string
age = false; // type of age is a boolean
age = null; // type of age is a null

// String (text)
let nameOfAcademy = 'Qinshift Academy';
let firstName2 = "Goran";
let lastName2 = `Third type of string`;

// Numbers
let number1 = 12;

// Booleans
let isMarried = true;
let isMature = false;

// Null
let middleName = null;

// Undefined
let car;
// let car = undefined;
console.log(car);

// Multi line commenting
/*
    Now we can
    comment in
    multiple lines
*/

// Can't use reserved keywords for variable names
// let switch
// let function;

// ARITHMETIC OPERATORS

// + (Plus)
let num1 = 1;
let num2 = 2;
            // 1   +  2
let result1 = num1 + num2;
let result2 = 3 + 4;

console.log('Result 1:')
console.log(result1)

console.log('Result 2:')
console.log(result2)

// - (Minus)
let result3 = 10 - 5;

console.log('Result 3:')
console.log(result3)

// * (Multiply)
let result4 = 3 * 2;

console.log('Result 4:')
console.log(result4)

// / (Divide)
let result5 = 9 / 3;

console.log('Result 5:')
console.log(result5)

// % (Modulus)
let result6 = 10 % 3;

console.log('Result 6:')
console.log(result6)

// ++ increment
let count = 1;
console.log('Count before', count)
count++
// count = count + 1;
console.log('Count after increment', count)

// -- decrement
let count2 = 3;
console.log('Count2 before decrement', count2)
count2--;
// count = count - 1;
console.log('Count2 after decrement', count2)

// COMPARISON OPERATORS
let numberA = 2;
let numberB = 3;

console.log('A is less than B:', numberA < numberB)
console.log('A is less than or equal to B', numberA <= numberB)
console.log('A is more than B', numberA > numberB)
console.log('A is more than or equal to B', numberA >= numberB)

// Equal comparison
console.log('A is equal to B', numberA == numberB)
console.log('A is not equal to B', numberA != numberB)

// Issues with == and !=
let numberAsString = '2';
let numberAsNumber = 2;

console.log('Numbers are equal:', numberAsString == numberAsNumber)
console.log('Are numbers REALLY equal:', numberAsString === numberAsNumber)

console.log('Numbers are NOT equal:', numberAsString != numberAsNumber)
console.log('Are numbers REALLY NOT equal:', numberAsString !== numberAsNumber)

let nullValue = null;
let undefinedValue = undefined;

console.log('nullValue', nullValue)
console.log('undefinedValue', undefinedValue)
console.log("Are Null and Undefined the same?", nullValue == undefinedValue)
console.log("Are Null and Undefined the REALLY same?", nullValue === undefinedValue)

// ASSIGNMENT OPERATORS

let number10 = 10;
// let number10 = number10 + 3;
number10 += 3;
console.log('Should be 13:', number10)


// Exercise 1:
let feet = 100;
let conversionRate = 0.3048;
let resultMeters = feet * conversionRate;

console.log("The result is: ", resultMeters)

// Exercise 2:
let a = 3;
let b = 5;
let area = a * b;

console.log("The area size is: ", area)

// Exercise 3:
let p = 3.14;
let r = 9;
let r2 = r * r;
let circleArea = p * r2;

console.log('Circle area is: ', circleArea)

