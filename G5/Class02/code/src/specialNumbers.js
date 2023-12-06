let number = 2 / "test";
console.log("Value of number is:");
console.log(number); // NaN
console.log(typeof(number)); //number

console.log(number == NaN); //false
console.log(number === NaN); //false

console.log(isNaN(number)); //true

let firstNumber = 2;
let secondNumber = "2";

console.log(firstNumber == secondNumber); //true
console.log(firstNumber === secondNumber); //false

let text = "Text";
console.log(isNaN(text)); //true

let num = 2;
console.log(isNaN(num)); //false

console.log("==Number.isNaN()==");
console.log(Number.isNaN(num)); //false
console.log(Number.isNaN(text)); //false
console.log(Number.isNaN(number)); //true

//Infinity

let numOne = Infinity;
console.log(numOne);
console.log("Type of numOne is:");
console.log(typeof(numOne));

let result = 10/0;
console.log(result);