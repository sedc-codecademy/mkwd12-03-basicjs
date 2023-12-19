console.log("It is alive");

/*

Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig
*/

// Chinese Zodiac Homework Solution

// let userInput = prompt("Please enter year of birth");

let userInput = "";

let birthYear = Number(userInput);

let zodiacYear = (birthYear - 4) % 12;

if (userInput === null) {
  console.log("You clicked cancel, thanks for using our zodiac calculator");
} else if (Number.isNaN(birthYear)) {
  console.log("Invalid input, please refresh the page and try again");
} else if (zodiacYear === 0) {
  console.log("Rat");
} else if (zodiacYear === 1) {
  console.log("Ox");
} else if (zodiacYear === 2) {
  console.log("Tiger");
} else if (zodiacYear === 3) {
  console.log("Rabbit");
} else if (zodiacYear === 4) {
  console.log("Dragon");
} else if (zodiacYear === 5) {
  console.log("Snake");
} else if (zodiacYear === 6) {
  console.log("Horse");
} else if (zodiacYear === 7) {
  console.log("Goat");
} else if (zodiacYear === 8) {
  console.log("Monkey");
} else if (zodiacYear === 9) {
  console.log("Rooster");
} else if (zodiacYear === 10) {
  console.log("Dog");
} else if (zodiacYear === 11) {
  console.log("Pig");
}

// Functions recap

// Defining a function
function createFullName(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  return fullName;
}

// Calling a function
let trainerName = createFullName("Borche", "Borisovski");
let assistantName = createFullName("Hristina", "Bozhinova");

console.log(trainerName, assistantName);

// Default parameters

function calculateTax(income, taxRate = 20) {
  console.log("This is the tax rate", taxRate);
  return income * (taxRate / 100);
}

calculateTax(12000);

calculateTax(1500, 12);

// First homework function solution

function calculatePhonesCost(phonesNumber, phonePrice, taxRatePercent) {
  return phonesNumber * (phonePrice + phonePrice * (taxRatePercent / 100));
}

console.log(calculatePhonesCost(30, 119.95, 5));
console.log(calculatePhonesCost(1200, 10000, 20));
