console.log("It is a hot pink cake");

// 1. Age calculator

function calculateAge(birthYear) {
  let currentYear = new Date().getFullYear();

  console.log(`You are ${currentYear - birthYear} years old`);
}

// calculateAge(1992);
// calculateAge(1993);
// calculateAge(2003);

// 2. Type checker function

function typeChecker(input) {
  return typeof input;
}

console.log(typeChecker("Borche"));
console.log(typeChecker(true));
console.log(typeChecker(undefined));
console.log(typeChecker(31));
console.log(typeChecker({}));

// 3. DogYears calculator

// let yearsInput = Number(prompt("Enter age"));

// let typeInput = prompt("Enter type of conversion");

function dogYearCalculator(years, type) {
  if (Number.isNaN(years)) {
    return "Invalid input";
  }

  if (type === "dog") {
    return years * 7;
  }

  if (type === "human") {
    return years / 7;
  }

  return "Invalid type";
}

// let result = dogYearCalculator(yearsInput, typeInput);

// console.log(`Result is: ${result}, type is ${typeInput}`);

// 4. ATM Machine

let accountBalance = 15000;

function atmMachine(amount) {
  if (Number.isNaN(amount)) {
    return "Invalid input";
  }

  if (amount > accountBalance) {
    return "Not enough funds";
  }

  if (amount < accountBalance) {
    accountBalance = accountBalance - amount;

    return `You withdrew: ${amount} and the funds left are: ${accountBalance}`;
  }
}

let amountInputOne = Number(prompt("Enter amount"));

console.log(atmMachine(amountInputOne));

let amountInputTwo = Number(prompt("Enter amount"));

console.log(atmMachine(amountInputTwo));

let amountInputThree = Number(prompt("Enter amount"));

console.log(atmMachine(amountInputThree));

console.log(`You have left ${accountBalance} on your account`);
