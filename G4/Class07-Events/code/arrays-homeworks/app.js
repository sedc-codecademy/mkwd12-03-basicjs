console.log("You better work");

/*
The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

*/
function tellStory(array) {
  if (array.length !== 3) return "Invalid input";

  for (let string of array) {
    if (typeof string !== "string") return "Invalid input";
  }

  return `This is ${array[0]}, ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`;
}

tellStory(["Borche", "Angry", "Explaining code"]);

/*
Write a function that will take an array of 5 numbers as an argument and return the sum.
*/

const randomNums = [3, 2, -100, 4, 2];

function sumNumbers(numArray) {
  let sum = 0;

  for (let num of numArray) {
    if (!validateNumber(num)) return "Invalid input";

    sum += num;
  }

  return sum;
}

function validateNumber(number) {
  if (typeof number !== "number" || Number.isNaN(number)) return false;

  return true;
}

console.log(sumNumbers(randomNums));

/*
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC !"
*/

function createBigString(stringArr, separator) {
  //   return stringArr.join(" ");

  let resultString = "";

  for (let i = 0; i < stringArr.length; i++) {
    if (i < stringArr.length - 1) {
      resultString += `${stringArr[i]}${separator}`;
    } else {
      resultString += stringArr[i];
    }
  }
  return resultString;
}

let resultString = createBigString(
  ["Hello", "there", "students", "of", "SEDC", "!"],
  " "
);

console.log(resultString);

/*
Description:Write a loop in javascript that goes from 1-20 that will print each number in the console and add "number is even" after every even number and add "number is odd" after every odd number
*/

function printEvenOdd() {
  for (let i = 0; i < 21; i++) {
    if (i % 2 === 0) console.log(`The number ${i} is even`);

    if (i % 2 === 1) console.log(`The number ${i} is odd`);
  }
}

printEvenOdd();

/*
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/

function calculateMinMax(numArray) {
  let min = numArray[0];
  let max = numArray[0];

  for (let num of numArray) {
    if (typeof num !== "number" || Number.isNaN(num)) continue;

    if (num > max) max = num;

    if (num < min) min = num;
  }

  let result = min + max;

  return `Max is: ${max}, Min is: ${min}, Their sum is ${result}`;
}

function altMinMax(numArray) {
  let min = Math.min(...numArray);
  let max = Math.max(...numArray);

  return `Max is: ${max}, Min is: ${min}, Their sum is ${min + max}`;
}

console.log(calculateMinMax([3, "Borche", "5", "1000", 5, 6, 8, 11]));

/*
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

const firstNames = ["Tommy", "Bobby", "Tony", "Carmine", "Mikey"];
const lastNames = ["Vincetti", "Pantangeli", "Soprano", "Falcone", "Moretti"];

function printFullNames(firstNames, lastNames) {
  if (firstNames.length !== lastNames.length)
    return "Number of first names must be equal to number of last names";

  let fullNames = [];

  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${i + 1} ${firstNames[i]} ${lastNames[i]}`);
  }

  return fullNames;
}

console.log(printFullNames(firstNames, lastNames));
