// //CONTROL STRUCTURES
// //start with the word IF

// var score=80;
// var passScore=100;

// if(score>=passScore){
//     console.log("You have passed!");
// }else{
//     console.log("You have failed");
// }

// if(score<=passScore){
// console.log("You have failed");
// }

// var answer=31;
// var correctAnswers=10;

// if(answer == 31){
//     alert("Correct");
//     correctAnswers++;
//     console.log(correctAnswers);
// }else{
//     alert("Wrong");
// }

// if(correctAnswers >= 9){
//     alert("You have passed the exam")
// }else{
//     alert("You have failed")
// }-

var fridayCash=prompt("How much money you have?");


if(fridayCash>=50){
    alert("Movie and dinner");
}else if(fridayCash>=35){
    alert("Meal");
}else if(fridayCash>=12){
    alert("Movie");
}else{
    alert("Stay home");
}


// //PROMP IS A BUILD IN FUNCTION THAT TAKES VALUE FROM THE USER
// //PROMP VALUE IS TYPE STRING
// var input = prompt("Enter a number:");//STRING

// //USE PARSEINT TO CONVERT THE STRING TO NUMBER
// var numberInput = parseInt(input);
// console.log(numberInput + 10);

// var fullName=prompt("Enter your name");
// var age=prompt("Enter your age");
// var mail=prompt("Enter your mail");

// console.log(`My name is ${fullName}, I'm ${age} years old and my mail is ${mail}`);


//Write a javascript program that will take value from the user.
//If the value is bigger than 100 console.log("Is bigger") and add 1 to the value and print it.
//If the value is smaller than 100 then console.log("Is smaller");

var userInput=prompt("Enter a value");
var userNumberInput=parseInt(userInput);

if(userInput>100){
    console.log("Is bigger");
    userNumberInput++;
    console.log(userNumberInput);
}else{
    console.log("Is smaller");
}