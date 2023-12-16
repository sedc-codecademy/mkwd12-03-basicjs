console.log("This is working fine");

// // Creating an array
let fruits = ["apples", "oranges", "pears", "lemons", "mangoes"];

// let students = [];

// // console.log(fruits);

// // Accessing elements in array
// let lemonsIndex = 3;

// // console.log(fruits[lemonsIndex]);
// // console.log(fruits[0 + 2]);
// // console.log(fruits[6]);

// // Changing values of array elements
// fruits[1] = "cherries";

// students[0] = "John Doe";
// students[1] = "Jane Doe";

// // console.log(fruits[1]);

// // console.log(fruits);

// // console.log(students);

// // Reading an array's length

// // console.log(fruits.length);
// // console.log(students.length);

// // To access last element
// // console.log(fruits[fruits.length - 1]);

// // Adding elements to end of an array

// fruits[fruits.length] = "bananas";

// fruits.push("peaches", "watermelons");

// students.push("Petar Petrevski");

// // console.log(fruits);
// // console.log(students);

// // Adding elements to the start of an array

// fruits.unshift("grapes", "strawberries");

// // console.log(fruits);

// // Removing elements from the end of an array

// let lastFruit = fruits.pop();

// // console.log(lastFruit);

// fruits.pop();

// // console.log(fruits);

// // Removing elements from the start of an array

// let firstFruit = fruits.shift();

// // console.log(firstFruit);

// // console.log(fruits);

// // Looping structures

// // While loop

// let counter = 0;

// while (counter < 21) {
//   console.log(counter);
//   counter++;
// }

// let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// let daysCounter = 0;
// while (daysCounter < days.length) {
//   console.log(days[daysCounter]);
//   daysCounter++;
// }

// // Exercise
// /*
// Action: Write a JavaScript program to read ten array values, determine the largest value, and print it
// */

// let randomNumbers = [1, 23, 544, 243, 43, 190, 78, 2000, 5555, 15];

// function calculateMax(numArray) {
//   console.log("max func called", numArray);

//   let counter = 0;
//   let max = numArray[0];

//   while (counter < numArray.length) {
//     let currentNumber = numArray[counter];
//     if (currentNumber > max) max = currentNumber;

//     counter++;
//   }

//   console.log(max);
// }

// calculateMax(randomNumbers);

// calculateMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // Exercise with Math.pow() Solution

// function sumSquares(start, end) {
//   let counter = start;

//   let sum = 0;

//   while (counter <= end) {
//     console.log(counter);
//     console.log(Math.pow(counter, 2));

//     sum += Math.pow(counter, 2);

//     counter++;
//   }

//   return sum;
// }

// // let sumResult = sumSquares(101, 150);

// // console.log("The sum is", sumResult);

// function countToTwenty() {
//   // While loop
//   //   let counter = 0;

//   //   while (counter < 21) {
//   //     console.log(counter);
//   //     counter++;
//   //   }

//   //   For loop
//   for (let i = 0; i < 21; i++) {
//     console.log(i);
//   }

//   for (let i = 20; i >= 0; i--) {
//     console.log(i);
//   }
// }

// // countToTwenty();

// generate an array of numbers

function generateNumArray(num) {
  let resultArr = [];

  for (let i = 1; i <= num; i++) {
    resultArr.push(i);
  }
  return resultArr;
}

// let twentyArr = generateNumArray(20);

// function multiplyNumberArray(numArray, number) {
//   let resultArr = [];

//   for (let i = 0; i < numArray.length; i++) {
//     resultArr.push(numArray[i] * number);
//   }
//   return resultArr;
// }

// console.log(twentyArr);

// let multipledArr = multiplyNumberArray(twentyArr, 4);

// console.log(multipledArr);

// // For of loop example

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// for (let student of students) {
//   console.log(student);
// }

// Break and continue

// console.log(fruits);

// Break
function findFavouriteFruit(favFruit, fruitArr) {
  let foundFruit = null;

  for (let fruit of fruitArr) {
    if (fruit === favFruit) {
      foundFruit = fruit;
      break;
    }
    console.log(fruit);
  }

  if (!foundFruit) return "No Fruit Found";

  return foundFruit;

  //   return foundFruit ? foundFruit : "No Fruit Found";
  //   return foundFruit || "No Fruit Found";
}
// console.log(findFavouriteFruit("apples", fruits));

// Continue

function filterLargeNumbers(minNumber, numArray) {
  let resultArr = [];

  for (let num of numArray) {
    if (num < minNumber) continue;

    resultArr.push(num);
  }

  return resultArr;
}

let filteredArr = filterLargeNumbers(150, [10, 203, 400, 20, 400, 30]);

// console.log(filteredArr);

let groceries = ["Bread", "Milk", "Butter"];

function addToGroceryList(item) {
  if (typeof item !== "string") {
    console.log(`The item ${item} was not added to the list, sorry`);
    return;
  }
  // Valid operations
  groceries.push(item);
  console.log(`You have added ${item} to the list!`);
}

// addToGroceryList("Eggs");
// addToGroceryList("Cake");
// addToGroceryList(true);

function showGroceriesList() {
  console.log("My wife's grocery list:");
  for (let i = 0; i < groceries.length; i++) {
    if (!groceries[i]) continue;

    console.log(`${i + 1}. ${groceries[i]}`);
  }
}

// showGroceriesList();

function checkForItemInGroceryList(item) {
  for (let listItem of groceries) {
    if (listItem === item) return `The item ${item} was found!`;
  }

  return `There was no ${item} item in the list`;
}

let foundItem = checkForItemInGroceryList("Butter");
let foundItemTwo = checkForItemInGroceryList("Apples");

// console.log(foundItem);
// console.log(foundItemTwo);

function deleteItemFromGroceryList(item) {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`The item ${item} has been deleted`);
      groceries[i] = null;
      return;
    }
  }
}

// deleteItemFromGroceryList("Milk");
// deleteItemFromGroceryList("Butter");

// showGroceriesList();

/*
FIND NUMBERS IN ARRAY
How many times is a number contained in an array

Write a function named findNumber that:
Takes 2 arguments: number, array
Calculates how many times the number is contained in an array with numbers
Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
Call the function three times with different arrays.
Time to accomplish: 15 minutes.
*/

// Exercise 1 solution

function countTimesNumber(targetNumber, numArray) {
  let total = 0;

  for (let num of numArray) {
    if (num === targetNumber) total++;
  }

  return `The number ${targetNumber} appears ${total} times in the array`;
}

let countResult = countTimesNumber(2, [3, 3, 3, 2, 4, 5, 3, 1, 1, 1, 3]);

console.log(countResult);

/*
FILTER ODD/EVEN NUMBERS FUNCTION
Write a function named findNumber that:
Takes 2 arguments: array, type
The person that calls the function should provide an array of numbers and string odd / even
If the type is even the function should find all the even numbers and return them as result
If the type is odd the function should find all the odd numbers and return them as result
Time to accomplish: 20 minutes.
*/

// Exercise 2 solution

let fiftyArray = generateNumArray(50);

console.log(fiftyArray);

function filterOddEven(numArray, type) {
  let resultArr = [];

  for (let num of numArray) {
    if (num % 2 === 0 && type === "even") resultArr.push(num);

    if (num % 2 !== 0 && type === "odd") resultArr.push(num);
  }

  return resultArr;
}

let oddNumbers = filterOddEven(fiftyArray, "odd");

let evenNumbers = filterOddEven(fiftyArray, "even");

const firstName = "Borche";

console.log("Odd numbers", oddNumbers);
console.log("Even numbers", evenNumbers);
