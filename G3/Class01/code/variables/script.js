let myName; 
myName = 'Aneta';
// console.log(myName);

let name = 'John';
console.log(name);

name = 'Bob'; // change the value of the name
console.log(name);

name = 73;
console.log(name); // Will log 73 in the console

let Name; 

let firstName = 'Jill';

const conversionRate = 62;
console.log('Conversion rate:', conversionRate);

// conversionRate = 70; // Will throw an error because const cannot be redeclared or reassigned

let lastName = 'Wayne'; // GLOBAL - accessible from everywhere
for (let i = 0; i < 10; i++) {
    let lastName = 'Wayne'; // LOCAL - not accessable outside of the block ({})
    // console.log(lastName); // can be logged only inside the block 
}

console.log(lastName);

console.log('---------------------------------');

// Type undefined
let myNumber;
console.log(myNumber);
console.log(typeof myNumber);

myNumber = 10;
console.log(myNumber);

// Type null (object)
let numberWithNullValue = null;
console.log(numberWithNullValue);
console.log(typeof numberWithNullValue);

// This is a comment in one line
/* This is
multiline
comment
*/


/* Difference between "==" and "==="
double equals check only the value 
triple equals checks the value and the type */
console.log(5 == "5");
console.log(5 === "5");

let textWithNewLine = 'This is the first line of the text. \nThis text goes in the new line.'; 
console.log(textWithNewLine);


// Write a JavaScript program to convert a length given in feet to meters.
// TIP: 1 feet = 0.3048 meters
// Solution 
const conversionValue = 0.3048;
let feet = 15;
let meters = feet * conversionValue;
console.log('The result is: ');
console.log(meters);


