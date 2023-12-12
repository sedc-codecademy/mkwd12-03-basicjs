console.log("Script is working properly!");

/*
Decription: Using prompt() display a dialog box that prompts the visitor for input.
Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do
*/

// let userInput = prompt("How much money do you have");

// let numberValue = Number(userInput);

// let isNumberInvalid = Number.isNaN(numberValue);

// if (userInput === null) {
//   console.log("Thanks for using our service");
// } else if (isNumberInvalid) {
//   console.log("Invalid input, please restart program");
// } else if (numberValue > 100) {
//   console.log("Go to the mall");
// } else if (numberValue > 50) {
//   console.log("Go out to dinner");
// } else {
//   console.log("Maybe think about saving");
// }

/*
Homework 1 Solution

Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.
*/

let onePhonePrice = 1125.5;

let phonesNumber = 1200;

let phoneTaxPercent = 18;

let onePhonePriceWithTax =
  (onePhonePrice * phoneTaxPercent) / 100 + onePhonePrice;

let phonesTotal = phonesNumber * onePhonePriceWithTax;

console.log(phonesTotal);
