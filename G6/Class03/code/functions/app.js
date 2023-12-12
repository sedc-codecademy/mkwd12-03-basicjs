console.log('CONNECTED');




// DEFINING A FUNCTION
function sayHello(){
    // In between the {} braces
    // the block of the function
    console.log("Hello G6, this is our functions class");
    // rest of the complex code
}

// INVOKING THE FUNCTION
sayHello();
sayHello();
sayHello();


sayHello();

console.log('*** EXAMPLE #2 ***');

function greetings(){
    console.log('John says hi!')
};

greetings();
greetings();

console.log('*** EXAMPLE #3 PRAMETERS & ARGUMENTS***');

function introduce(userName){
    console.log('the parameter\'s value is:', userName)
    console.log('Hey my friend, my name is ' + userName)
}

introduce();

introduce("Gjorge");
introduce("Roze");
introduce("John");

let userName = prompt('Hey Amigo, what is your name!');

introduce(userName);

console.log('*** EXAMPLE #4 MULTIPLE PRAMETERS & ARGUMENTS***');


function sumOfNumbers(numberOne, numberTwo, numberThree){
    let result = parseFloat(numberOne) + parseFloat(numberTwo)  + parseFloat(numberThree);

    console.log('Result is: ', result)
};


sumOfNumbers(5,15,10);

// let numberOnePrompt = prompt('Enter first number');
// let numberTwoPrompt = prompt('Enter second number');
// let numberThreePrompt = prompt('Enter third number');
// sumOfNumbers(numberOnePrompt, numberTwoPrompt, numberThreePrompt);

console.log('*** EXAMPLE #5 RETURN KEYWORD ***');

/**
 * A function can accept paramets, and the parameters can have default values. Meaning if no value is send during invoke of the function, the default value will taken into considiration.
 */
function studentPassed(studentScore, studentName = "User"){
    let passingScore = 70;

    if(studentScore >= passingScore){
        let passingMessage = `Student with name ${studentName} has passed the exam.`

        // Careful!!! If we have just empty return, it means
        // we are going to just exit the function =)
        // return 
        
        return passingMessage

        // UNREACHABLE CODE
        // the code after return will NEVER execute
        let hey = "my name"
        // some logic
    }else if(studentScore > 60 && studentScore < passingScore){
        let message = `\n Sorry ${studentName} you are almost there.`;
        return message
    }

}

/**
 * the function studentPassed returns us a value
 * in order to read it, we MUST store it in variable
 */
let studentOneMessage = studentPassed(71, "Gjorge");
// console.log(studentOneMessage);
document.write(studentOneMessage)

let studentTwoMessage = studentPassed(61, "John");
console.log(studentTwoMessage)
document.write(studentTwoMessage)

let studentThreeMessage = studentPassed(100);
console.log(studentThreeMessage)