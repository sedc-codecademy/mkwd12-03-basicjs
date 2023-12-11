console.log("=================== SCOPES ===================");

// GLOBAL SCOPE
// => variables and functions declared outside of any function or block have global scope
// => they can be accessed from anywhere within the script

let globalNumber = 2000;

function printGlobalNumber() {
    globalNumber = 1000;
    console.log(globalNumber);
}

console.log(globalNumber);
printGlobalNumber();


// LOCAL SCOPE  (Function Scope)
// => variables/functions declared within a function have local scope, meaning they can only be accessed within that function

// Example 1
function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log(result);
}
// console.log(localNumber); // ERROR
localScope(50); // 150

// let test = 123;
// // let test = 2342;
// function localScope2(number) {
//     // do something
// }

// Example 2
let greeting = "Hello from Qinshift Academy";
function printGreeting() {
    let greeting = "Happy holidays!";
    console.log(greeting);
}
console.log(greeting); // "Hello from Qinshift Academy"
printGreeting(); // "Happy holidays!"

// Example 3
function outerFunction() {
    let outerVariable = "I'm from the outer function";

    // NEVER DO THIS => for demonstration only*
    function innerFunction() {
        let innerVariable = "I'm from the inner function"
        console.log(outerVariable);
        console.log(innerVariable);
    }
    // console.log(innerVariable); // ERROR

    innerFunction();
}

outerFunction();
// innerFunction(); // ERROR

// BLOCK SCOPE
// => variables declared with let or const within a block (inside {}) are only accessible within that block

if (50 < 100) {
    let blockNumber = 50 + 100;
    // var blockNumber = 50 + 100;  // var behaves differently => DON'T USE var
    console.log(blockNumber); // 150
}

// console.log(blockNumber); // ERROR