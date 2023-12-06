console.log("===================== Logical Operators =====================");

// Used with Boolean values or expressions ***

// OPERAND(30) OPERATOR(>) OPERAND(50)
console.log(30 > 50); // false
console.log(30 < 50); // true

console.log("========= Logical 'AND' && =========");
// && returns true if both operands are true, otherwise false

let num1 = 50;
let num2 = 100;
console.log(num1 < num2 && num2 === 150); // false
// breakdown:
// 1) num1 < num2 => true
// 2) num2 === 150 => false
// 3) true && false => false

// true && true => true
console.log(num1 < num2 && num2 <= 100); // true
// true && true && false => false
console.log(num1 < num2 && num2 <= 100 && (num1 + 10) !== 60); // false
console.log(true && true && true && true && false); // false


console.log("");
console.log("========= Logical 'OR' ||  =========");
// || returns true if at least one of the operands is true, otherwise false
console.log(false || false || true || false || false); // true
let number1 = 3;
let number2 = 13;
// false || true => true
console.log(number1 > number2 || number2 >= 10); // true

// Combination of && and ||
console.log(5 > 0 && (5 + 6 < 10) || 10 > 5); // true
// true && false || true => true


console.log("========= Logical 'NOT' ! =========");
// ! is an operator that negates the value of its operand
// !true => false ***
// !false => true ***

let isValid = false;
console.log(isValid); // false
console.log(!isValid); // true

let numOne = 200;
let numTwo = 300;
let expression = !(numOne > numTwo) && "Bob" == 'Bob';
console.log(expression);
// breakdown:
// 1) 200 > 300 => false 
// 2) !(200 > 300) => !false => true
// 3) "Bob" == "Bob" => true
// 4) !(200 > 300)/TRUE && "Bob" == "Bob"/TRUE => TRUE

console.log("");
console.log("===================== EQUALITIES =====================");

// let a = 5;
// = assignment operator
// == equality => evalutes only value*
// === strict equality => evalutes value* and type* => USED IN MOST CASES

// console.log(3 = 3); // ERROR
console.log(3 == "3"); // true
console.log(3 === "3"); // false  => even though the values are same, the type of 3 (number) is not the same as the type of "3" (string)
console.log(3 === 3); // true




console.log("");
console.log("=================== TRUTHY/FALSY VALUES ===================");
// => how JavaScript interprets single values in a boolean context
/* 
    ***** FALSY VALUES *****
    - false
    - 0, -0
    - "" (empty string)
    - null
    - undefined
    - NaN (invalid number)

    ***** TRUTHY VALUES *****
    - true
    - "hello", "0", " "
    - 25
    - [ ], [ 1, "2", 3 ] (arrays)
    - { }, { a: 42 } (objects)
    - ...
*/

// ways to check if a single value is truthy or falsy
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true
console.log(Boolean(123)); // true
console.log(Boolean("test123")); // true

// or the newer fancies way
console.log(!!0); // false
console.log(!!"0"); // true
console.log(!!null); // false
console.log(!!"some text");
