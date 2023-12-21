// Selecting all inputs
let inputNumbers = document.getElementsByTagName("input");
let firstNumber = inputNumbers[0];
let secondNumber = inputNumbers[1];

// Selecting the button
let calculateButton = document.getElementById("calculateButton");
// Selecting the paragraph
let result = document.getElementById("result");

function calculateNumbers(numberOne, numberTwo){
    let resultOfSum = numberOne + numberTwo;

    return `Result is: ${resultOfSum}`
};

calculateButton.addEventListener("click", function(){
    // .value takes the VALUE inside the element
    // IMPORTANT !!! Values from input are always STRING we must parse if we expect numbers
    let firstInputValue = parseFloat(firstNumber.value);
    // Number () comes from JS itself, it will convert string to number
    let secondInputValue = Number(secondNumber.value);

    // FUNCTION TO VALIDATE THE INPUT
    // IF INVALID RETURN ERROR MESSAGE
    let calculationResult = calculateNumbers(firstInputValue, secondInputValue);
    result.innerText = calculationResult;
})