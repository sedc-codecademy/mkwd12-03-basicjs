// Calculator

// input from user
let input = 0;
let prevValue = ""
// checking the user input
prevValue = userInput
if(typeof parseFloat(userInput) === "number"){
    input = parseFloat(userInput)
}
if(prevValue === "*"){
    let newValue = userInput * input
    input = newValue
}

// Hangman
let maxAttempts = 5


// 1. collection of words
// 2. if user starts game, return/extract random element of the array of words =)
// 3. primitive data type string has length as well (they are iterable)
// 4. create buttons from a-z
// 5. and on each click on the button read the value from the input =)
// 6. check if the string contains the  value of the clicked button, disable that character (button)
// 7. if not, take one life from the user game lifes =)
maxAttempts--

if(maxAttempts === 0) alert('game over');

// please do not user .map() .filter() .reduce() eval() .forEach() .includes() .find()