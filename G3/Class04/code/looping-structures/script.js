console.log("========================== LOOPING STRUCTURES ==========================");
// => repetitive execution of code
// => iterate over collections of data (arrays)


console.log("");
console.log("=============== WHILE LOOP ===============");
// executes a block of code as long as a specified condition is true
// syntax
// while (condtion) {
//     code to be executed
// }

// often a counter is needed for how many iterations the loop should perform
let counter = 1;
while (counter < 5) {
    console.log(counter);
    counter++;
    // counter = counter + 1
    // counter += 1
}

// If we don't use loop
// console.log(count);
// count++;
// console.log(count);
// count++;
// console.log(count);
// count++;
// console.log(count);
// count++;
// console.log(count);

// Example of while with arrays
let students = ["Bob Bobsky", "John Johnsky", "Petko Petkovski"];
// console.log(`Student #1: Bob Bobsky`);
// console.log(`Student #2: John Johnsky`);
// console.log(`Student #3: Petko Petkovski`);

let studentCounter = 0;
while (studentCounter < students.length) {
    console.log(`Student #${studentCounter + 1}: ${students[studentCounter]}`);
    studentCounter++;
}



console.log("");
console.log("=============== DO-WHILE LOOP ===============");
// executes a block of code at least once before checking the condition
// less common type of loop
// syntax
// do {
//     // code to be executed
// } while (condition);
let doWhileCounter = 10;
do {
    // will execute this code once eventhough the condition is not true
    console.log(students[doWhileCounter]);
    doWhileCounter++;
} while (doWhileCounter < students.length);



console.log("");
console.log("=============== FOR LOOP ===============");
// good for working with pre-defined arrays
// better index handling
// syntax
// for (counter initialization; condition; counter increment/decrement) {
//    code to be executed
// }

// Example with increment
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Example with decrement
for (let i = 5; i > 0; i--) {
    console.log(i);
}

let cities = ["Skopje", "Miami", "Tokyo", "Prilep"];

for (let i = 0; i < cities.length; i++) {
    let cityInfo = `City #${i + 1}: ${cities[i]}`
    if (cities[i] === "Miami") {
        cityInfo += " => I would like to go there :)"
    }
    console.log(cityInfo);
}

// Looping through string
let oneCity = "Skopje";
for (let i = 0; i < oneCity.length; i++) {
    console.log(oneCity[i]);
}



console.log("");
console.log("=============== FOR-OF LOOP ===============");
// iterating through arrays and accessing elements directly
// doesn't use indexing
// syntax
// for (let item of array) {
//     code to be executed
// }
for (let city of cities) {
    console.log(city);
}



console.log("");
console.log("=============== BREAK & CONTINUE ===============");

let numbers = [1, 23, 43, 40, 50, 30, 44, 23]
console.log(numbers);

// BREAK
// => used to terminate the loop immediately when a certain condition is met, regardless of whether the loop condition remains true or not
// Example => find the number 40 
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] === 40) {
        console.log(`Found 40 at index ${j}! Existing the loop!`);
        break;
    }
    console.log(`The number ${numbers[j]} is not 40`);
}

// CONTINUE
// => skips the current iteration of the loop and proceeds to the next iteration
// => the code after the continue keyword won't be executed during that iteration

// Example => log if a number is divisible by 4 or not
for (let number of numbers) {
    if (number % 4 === 0) {
        console.log(`The number ${number} is divisible by 4`);
        continue;
        // continue; => skip the rest of the code from the current iteration, continue with the next one
    }
    console.log(`The number ${number} is NOT divisible by 4`);
}

