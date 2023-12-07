console.log("CONNECTED");

console.log("**** STRING CONCATANATION ****");

// Example 1
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);
// Example 2
let movieName = "The Gentleman";
let movieDirector = "Guy Ritchie";
let movieInformation = "Recommended movie for today is " + movieName + " from " + movieDirector;
console.log(movieInformation);
// Example 3
let groupName = "G";
let groupNumber = 6;
console.log("We are group: ", groupName + groupNumber);
// Example 4
let currentYear = "20" + "23";
console.log(currentYear);
// Example 5
let numberOne = 55;
let valueTwo = "5";
let exampleFiveResult = numberOne + valueTwo
console.log(exampleFiveResult);
console.log(typeof exampleFiveResult)

console.log(2 * 10 - 5 + "10");
console.log(50 / 5 + 5 + "100");
console.log("10" + 10 - 5)
/**
 * STEP ONE:
 * "10" + 10 = "1010"
 * "1010" - 5 = 1005
 * 
 */
console.log("10" * 2);
console.log("100" / 5);


let welcomingMessage = "Hello student, \nhow are you?";
console.log(welcomingMessage);

// 2015 / es6
console.log('**** STRING INTERPOLATION ****');

let bananaSmoothieIngrediants = `1. Milk 2. Banana
3. Almonds 4.Honey
5. Peanut Butter
`;

console.log(bananaSmoothieIngrediants);

let javascriptInveted = "Brendan Eich";
let developedFor = "Netscape 2";
let yearDeveloped = 1995;

let jsInfoMessage = "Javascript was invented by: " + javascriptInveted + " for the company " + developedFor + " in the year " + yearDeveloped;

console.log(jsInfoMessage);

// we can use ${variable_here} only in backticks !!! IMPORTANT!
let jsInfoMessageUsingInterpolation = `Javascript was invented by: ${javascriptInveted} for the company \${} ${developedFor} in the year ${yearDeveloped}.`;

console.log("*** same as above using interpolation ***");
console.log(jsInfoMessageUsingInterpolation);
// We cannot use ${variableHere} syntax with double qoutes or single quotes
console.log("${javascriptInvented}");

console.log('**** ESCAPE CHARACTER ****')
// ERROR
// console.log('It's going to rain tomorrow.');
console.log('It\'s going to rain tomorrow.');
console.log("It's going to rain tomorrow.");
console.log(`It's going to rain tomorrow.`);

console.log('**** SPECIAL NUMBERS ****');

let invalidNumber = 2 * "Hello";
console.log(invalidNumber) // NaN
// NaN => Not a Number, means the result is not a number

// isNaN => Checks if the value IS NOT A NUMBER
let isInvalidNumberNaN = isNaN(invalidNumber); 
console.log(isInvalidNumberNaN)
// number / NaN
console.log(isNaN('11')) // false
console.log(isNaN(NaN)) // true
console.log(isNaN(33)) // false

// ES6
// NaN
console.log("*** Better usage of isNaN ***");
let specialNumberValue = 2 * "Hello World";
console.log(specialNumberValue)
console.log(Number.isNaN(specialNumberValue)); //true
console.log(Number.isNaN('11')); // false
console.log(Number.isNaN(33)) // false

// Infitity
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

console.log(positiveInfinity);
console.log(negativeInfinity);

console.log(10 > positiveInfinity); // false
console.log(10 > negativeInfinity); // true

console.log('**** LOGICAL OPERATORS ****');

/**
 * 22 operand
 * <= operator
 * 50 operand
 */
let expressionOne = 22 <= 50; // true
console.log('22 is less then 50', expressionOne);

console.log('*** LOGICAL OPERATOR && (AND) ***')
// LOGICAL OPERATOR && (AND);
/**
 * RULE: #1
 * WILL RETURN TRUE IF THE TWO VALUES THAT WE COMPARE
 * ARE TRUE
 * 
 */

let experessionTwo = 10 > 5; // true

console.log(expressionOne && experessionTwo);
console.log(true && false); // false

let adultAge = 18;
let personTwoAge = 22;

let discoEntrence = 18;

let amIAllowed = adultAge >= discoEntrence // true;
console.log("amIAllowed", amIAllowed);
let isPersonTwoAllowed = personTwoAge >= discoEntrence // true
console.log("isPersonTwoAllowed", isPersonTwoAllowed);

let arePeopleAllowed = amIAllowed && isPersonTwoAllowed;
console.log("arePeopleAllowed", arePeopleAllowed) // true

let canIGoOnFridayParty = false;
/**
 * amIAllowed => OPERAND
 * && => operator
 * canIGoOnFridayParty => OPERAND
 */
console.log('can i go on friday', amIAllowed && canIGoOnFridayParty);

/**
 * RULE #2:
 * When we compare two truthy values, the second one is returned
 */

console.log('Using && with two TRUTHY values:');
console.log(26 && "I AM STRING, I AM TRUTHY");
console.log("Hello World" && "I love chocolate"); //I love chocolate
console.log('I love js' && 100) // 100;
console.log(true  && "Dog"); // Dog
console.log('Cat' && true) // true 
console.log('Using && with one value false:');
/**
 * RULE #3:
 * When we have one false value, it returns false =)
 */

console.log(2 < 1 && "Hello world") // false

/**
 * RULE: #4
 * When we compare two falsy values logical operator && will return the FIRST falsy value
 */

console.log(0 && undefined) // 0

// Logical operator OR
console.log('*** LOGICAL OPERATOR || (OR) ***');

/**
 * RULE #1:
 * Will return true if one of the operands is true =)
 */
let isSchoolWeekOver = true;
let isHomeworkFinished = false;

let canIGoOut = isSchoolWeekOver || isHomeworkFinished;
console.log('canIGoOut:', canIGoOut);

/**
 * RULE #2:
 * When used with two truthy values will return the first
 * truthy value.
 */

let welcomingTitle = "Hello class" || "Hello World";
console.log('welcoming title:', welcomingTitle);

console.log('Bob Bobski' || 123) // Bob Bobski

/**
 * RULE #3:
 * When used with one true/truthy and the other is false or falsy
 * will return the true/truthy value
 */

console.log(1 > 2 || 100);

let isSummer = true;
let myHobby = "Swimming";

console.log(isSummer || false) // true
// -2 negative numbers is truthy value =)
console.log(-0 || myHobby) // Swimming
console.log(-2 || myHobby) // -2

/**
 * RULE #4:
 * When with two false/falsy values will return the second falsy value
 */
let twoFalsyValuesExample = undefined || 0;
console.log('two falsy || check:', twoFalsyValuesExample);

// Logical operator NOT
console.log('*** LOGICAL OPERATOR ! (NOT) ***');

console.log('logical not with !true:', !true);
console.log('logical not with !false:', !false);

console.log('*** CONTROLED STRUCTURES ***');
let myQuizScore = 40;

// inside the small brackets () we write the condition to happen/check
// the code/logic inside the {} will happen if the condition
// in the small brackets ( ) is fullfilled
if(myQuizScore === 50){
    console.log("Nice you have maximum points!")
} else {
    console.log('You entered the else')
}


let movieRating = 10;

// We can have only one else
if(movieRating === 10){
    console.log('The movie is awesome!!!')
} else if(movieRating === 8){
    console.log('The movie is great')
} else if(movieRating === 6){
    console.log('The movie was good')
} else if(movieRating === 4){
    console.log('The movie is kinda bad')
} else {
    console.log('Don\'t watch the movie.')
};


console.log('*** PROMPT ***')
let userInput = prompt('Write me number:');
console.log(userInput);
// EVERY value from user input WILL BE STRING
console.log(typeof userInput)

// parseFloat => converts decimals
// parseInt => convers numbers
let parsedUserInput = parseFloat(userInput);
console.log('parsed user input', parsedUserInput);
console.log(typeof parsedUserInput);

if(parsedUserInput === 10){
    console.log('Nice, the input was corrent')
} else if(parsedUserInput > 10 && parsedUserInput < 20){
    console.log('User input is between 10-20')
} else {
    console.log('Parsed input in else')
}