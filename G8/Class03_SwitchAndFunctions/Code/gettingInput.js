var wholeNumberInput = prompt("Enter a whole number");
console.log("wholeNumberInput:");
console.log(wholeNumberInput);
console.log(typeof(wholeNumberInput));

var parsedInput = parseInt(prompt("Enter numeric input"));

// var wholeNumber = parseInt(wholeNumberInput);
// console.log("wholeNumber:");
// console.log(wholeNumber);
// console.log(typeof(wholeNumber));

var wholeNumber = +wholeNumberInput;
console.log("wholeNumber:");
console.log(wholeNumber);
console.log(typeof(wholeNumber));



var decimalNumberString = "13.4";
console.log(parseInt(decimalNumberString));

// var a = parseInt(decimalNumberString);
// console.log(a);

console.log(parseFloat(decimalNumberString));
// var b = parseFloat(decimalNumberString);
// console.log(b);

var decimalNumber = +decimalNumberString;
console.log("decimalNumber:");
console.log(decimalNumber);
console.log(typeof(decimalNumber));

var num = Number("12.5");
console.log(num);


