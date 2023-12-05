console.log("JS BASICS");

// --------- Ways of declaring variables ----------
// VAR, LET, CONST

console.log("-------- Ways of declaring variables ----------");

// Var 

var myVar = 2;
// 100 lines later
myVar = 5;
// 300 lines later

var myVar = 20;

console.log("myVar: ", myVar);
// var lets you redeclare variables and give new values

// Let

let myLet = 12;
// 100 lines later
myLet = 15;
// 300 line later

// let myLet = 20;
// let does't alolow us to redeclare variables but we can give a new value;

// Const

const myConst = 25;
// 100 lines later
// myConst = 30;
// const myConst = 30;

console.log("myConst: ", myConst);

// ---------- Strings -----------
console.log("---------- Strings -----------");

// Concatination of strings

let myFirstString = "Hello";
let concatinatedString = myFirstString + " Aleksandar";

console.log(concatinatedString);

let weirdOperation = '2' + 4;
let weirdOperation2 = '2' + (4 + 5);
let weirdOperation3 = '2' + (4 + '5');

console.log(weirdOperation);
console.log(weirdOperation2);
console.log(weirdOperation3);

// types of concatinating strings

let string01 = myFirstString + " Pane";
let string02 = `!! ${myFirstString} Mike`;
let string03 = `${myFirstString}
from
multiple
lines`;
let string04 = `The sum of the number ${5} and the number ${10} is ${5 + 10}`;
let string05 = 'Please don\'t cross a red light';


console.log(string01);
console.log(string02);
console.log(string03);
console.log(string04);
console.log(string05);

// ------Number---------
console.log("------Numbers---------");

let operationWithString = 10 - 'bob';
console.log("Weird operation: ", operationWithString);

console.log(typeof(operationWithString));
console.log(operationWithString === NaN);
console.log(operationWithString == NaN);
console.log(isNaN(operationWithString));

let name1 = 'bob';
console.log(typeof(name1));
console.log(name1 === NaN);
console.log(name1 == NaN);
console.log(isNaN(name1));

// ES6 to the rescue

let isThisNaN = Number.isNaN(name1);
let isThisNaN2 = Number.isNaN(operationWithString);

console.log(isThisNaN);
console.log(isThisNaN2);

// ------ Logical Operators -------
console.log("------ Logical Operators -------");

let operation01 = 2 > 1;
let operation02 = (4 + 5) === (2 + 7);
let operation03 = ("2" + "3") == (20 + 3);

console.log(operation01);
console.log(operation02);
console.log(operation03);

let operation04 = (2 > 3) && (5 == "5");
let operation05 = (2 > 3) || (5 == "5");
let operation06 = 'bob' && 12345;
let operation07 = 12345 || 'bob';
let operation08 = null && 'bob';
let operation09 = 12345 && 'bob' || null;
let operation10 = null || 12345 && 'bob';
let operation11 = (null || 12345) && 'bob';
let operation12 = true && !(3 === "3");

console.log(operation04);
console.log(operation05);
console.log(operation06);
console.log(operation07);
console.log(operation08);
console.log(operation09);
console.log(operation10);
console.log(operation11);
console.log(operation12);


console.log("--------Control Structures---------");
console.log("--------IF / ELSE IF / ELSE ---------");


let score = 170;

if(score > 100) {
    console.log("WOW! You won the prize!!");

    if(score >= 150) {
        console.log("WOW, you won the bonus also!!!")
    } 
    else {
        console.log("YOU WON, but not enough points for the bonus");
    }
} 
else if(score === 100) {
    console.log("YOU WON, but just barelly!!")
}
else {
    console.log("YOU LOST!!")
}

// the rest of the code continues
console.log("bla bla");


let trainer = "Pane";

if(trainer) {
    console.log(`Your trainer name is ${trainer}`);
}
else {
    console.log("You group currently doesn't have a trainer");
}

let input = prompt("Enter a number");
let fridayCash = parseFloat(input);
// let fridayCash = parseInt(input); // if there are decimal number present, the decimals will be ignored.

console.log(fridayCash);

if(fridayCash >= 50) {
    console.log("You can go out to a dinner and a movie");
}
else if(fridayCash >= 35) {
    console.log("You can go out to a nice dinner");
}
else if(fridayCash >= 12) {
    console.log("You have enough money just for a movie");
}
else {
    console.log("You can stay at home and watch TV :(");
}






