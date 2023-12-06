console.log('Hello' + ' ' + 'SEDC!');
console.log('Hello ' + 'SEDC!');

// String interpolation
let firstName = 'John';
console.log(`Hello ${firstName}!`);

// alert(`Sample text ${firstName} hello!`);

let first = 10;
let second = '5';
console.log('Conversion from number to string');
let sumResult = first + second;
console.log('The result is: ', sumResult);
console.log('The type is: ', typeof(sumResult));
console.log('The value is: ', true);
console.log('The first number is: ', first);

// Using single and double quotes
let quote = "It's really nice to be a programmer."
// let quote = 'It's really nice to be a programmer.'  // cannot use single quotes in this case
let newQuote = 'It\'s really nice to be a programmer'
console.log(quote);

let guestMessage = "The guest said \"HELLO\" to all of us.";
let guestMessageTwo = 'The guest said "HELLO" to all of \\ us.';
console.log(guestMessageTwo);
