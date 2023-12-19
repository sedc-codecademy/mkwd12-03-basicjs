console.log("======================= CONTROL STRUCTURES =======================");
// 1) Conditional Statements (if, else if, else)
// 2) Switch Statement
// 3) Looping Structures
// Purpose: Control the flow of the program ***


console.log("");
console.log("======================= SWITCH STATEMENT =======================");
// useful when you have multiple conditions to check against SINGLE variable

// base syntax
let swtichValue = "value1";
// if (swtichValue === "value1") {
//     // code ...
// }
switch (swtichValue) {
    case "value1":
        // Code to be executed if swtichValue === "value1"
        break;
    case "value2":
        // Code to be executed if swtichValue === "value2"
        break;
    case "value3":
        // Code to be executed if swtichValue === "value3"
        break;
    // ...as many cases as we need...
    default:
        // Code to be executed if the swtichValue doesn't match any case
        break;
}

// Program to get day of week
let inputDay = prompt("Enter day of week (1-7):");
let parsedInputDay = parseInt(inputDay);

switch (parsedInputDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input value");
        break;
}

// check if it is a work day or weekend
// "fall through" scenario => rarely used
switch (parsedInputDay) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Work day");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid input value");
        break;
}

// Switch vs Ifs ?
// can achive the same thing with both types of control structures
// switch provides better code-structure and readability when dealing with multiple conditions for single variable ***
