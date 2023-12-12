// console.log("This is working fine");

// Creating an array
let fruits = ["apples", "oranges", "pears", "lemons", "mangoes"];

let students = [];

// console.log(fruits);

// Accessing elements in array
let lemonsIndex = 3;

// console.log(fruits[lemonsIndex]);
// console.log(fruits[0 + 2]);
// console.log(fruits[6]);

// Changing values of array elements
fruits[1] = "cherries";

students[0] = "John Doe";
students[1] = "Jane Doe";

// console.log(fruits[1]);

// console.log(fruits);

// console.log(students);

// Reading an array's length

// console.log(fruits.length);
// console.log(students.length);

// To access last element
// console.log(fruits[fruits.length - 1]);

// Adding elements to end of an array

fruits[fruits.length] = "bananas";

fruits.push("peaches", "watermelons");

students.push("Petar Petrevski");

// console.log(fruits);
// console.log(students);

// Adding elements to the start of an array

fruits.unshift("grapes", "strawberries");

// console.log(fruits);

// Removing elements from the end of an array

let lastFruit = fruits.pop();

// console.log(lastFruit);

fruits.pop();

// console.log(fruits);

// Removing elements from the start of an array

let firstFruit = fruits.shift();

// console.log(firstFruit);

// console.log(fruits);

// Looping structures

// While loop

let counter = 0;

while (counter < 21) {
  console.log(counter);
  counter++;
}

let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
let daysCounter = 0;
while (daysCounter < days.length) {
  console.log(days[daysCounter]);
  daysCounter++;
}

// Exercise
/*
Action: Write a JavaScript program to read ten array values, determine the largest value, and print it
*/

let randomNumbers = [1, 23, 544, 243, 43, 190, 78, 2000, 5555, 15];

function calculateMax(numArray) {
  console.log("max func called", numArray);

  let counter = 0;
  let max = numArray[0];

  while (counter < numArray.length) {
    let currentNumber = numArray[counter];
    if (currentNumber > max) max = currentNumber;

    counter++;
  }

  console.log(max);
}

calculateMax(randomNumbers);

calculateMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Exercise with Math.pow() Solution

function sumSquares(start, end) {
  let counter = start;

  let sum = 0;

  while (counter <= end) {
    console.log(counter);
    console.log(Math.pow(counter, 2));

    sum += Math.pow(counter, 2);

    counter++;
  }

  return sum;
}

// let sumResult = sumSquares(101, 150);

// console.log("The sum is", sumResult);

function countToTwenty() {
  // While loop
  //   let counter = 0;

  //   while (counter < 21) {
  //     console.log(counter);
  //     counter++;
  //   }

  //   For loop
  for (let i = 0; i < 21; i++) {
    console.log(i);
  }

  for (let i = 20; i >= 0; i--) {
    console.log(i);
  }
}

// countToTwenty();

// generate an array of numbers

function generateNumArray(num) {
  let resultArr = [];

  for (let i = 1; i <= num; i++) {
    resultArr.push(i);
  }
  return resultArr;
}

let twentyArr = generateNumArray(20);

function multiplyNumberArray(numArray, number) {
  let resultArr = [];

  for (let i = 0; i < numArray.length; i++) {
    resultArr.push(numArray[i] * number);
  }
  return resultArr;
}

console.log(twentyArr);

let multipledArr = multiplyNumberArray(twentyArr, 4);

console.log(multipledArr);

// For of loop example

for (let fruit of fruits) {
  console.log(fruit);
}

for (let student of students) {
  console.log(student);
}
