console.log("Hello " + "SEDC");
console.log("Hello" + " " + "SEDC");

let helloGreeting = "Hello";
let fromSEDC = "from SEDC";
let greeting = helloGreeting + " " + fromSEDC + "!";

console.log(greeting);

let firstNumber = 12;
let string = "example";
let result = string + " " + firstNumber;

console.log("Result: "+ result);
console.log(typeof(result));

//Interpolation

let academyName = "SEDC";
let sentence = `I am a student in ${academyName}`;

console.log(sentence);

let firstName = "Danilo";
let lastName = "Borozan";
let text = `${firstName} ${lastName} is a trainer in ${academyName}`;

console.log(text);


let fName = prompt("Enter your full name");
let fullName = `My name is ${fName}`;
console.log(fullName);


//Quotes
let message = "It's really nice to be a programmer";
console.log(message);

let secondMessage = 'It\'s really nice to be a programmer';

console.log(secondMessage);

let secondText = "It's really \"nice\" to be a programmer";
console.log(secondText);


//null

let exampleNull = null;
let secondExample = "Tarik";
console.log(exampleNull + secondExample);

exampleNull = "I am";
console.log(exampleNull + " " + secondExample);