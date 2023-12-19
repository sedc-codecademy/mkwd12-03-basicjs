// **** HTML EVENT HANDLERS ****

function greetingsMessage(){
    alert("Hello friends!!!")
}

// **** BETTER EVENT HANDLING ****
let greetingButton = document.getElementById("greetingButton");
greetingButton.onclick = greetingsMessage;

// *** WITH PARAMETERS ****
function sumOfNumbers(numberOne, numberTwo){
    let result = numberOne + numberTwo;
    console.log('Result is: ', + result)
}

let resultButton = document.getElementById("printResultButton");
// It gets invoked instant after the script is loaded, and not on button click
// This is bad way to do so.
// resultButton.onclick = sumOfNumbers(2, 4);

// callback function
resultButton.onclick = function(){
    let numberOne = parseFloat(prompt('Enter number one'));
    let numberTwo = parseFloat(prompt('Enter number two'));
    // function to validate the input
    sumOfNumbers(numberOne, numberTwo)
    // rest of functions that I want to call
};

// **** EVENT LISTENERS ****
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", greetingsMessage);

function sayHello(){
    alert('I am called from event listener')
}

let buttonHello = document.getElementById("buttonHello");
buttonHello.addEventListener("dblclick", sayHello)

let buttonResult = document.getElementById("buttonResult");

// Syntax of calling a function on click, and the function accepts arguments
buttonResult.addEventListener("click", function(){
    sumOfNumbers(5, 25)
});