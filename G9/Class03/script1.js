
//parseInt() is used to parse all sorts of values in to whole numbers (integers)
// let num1 = parseInt(prompt("Enter first number"));
// //let parsedNum1 = parseInt(num1);
// let num2 = parseInt(prompt("Enter second number"));
// let result = num1 + num2;
// console.log(result);

/// Get input from the user
// const year = parseInt(prompt("Enter the year:"));

// // Calculate the Chinese Zodiac
// const zodiac = (year - 4) % 12;

// // Use switch statement to determine and display the result
// switch (zodiac) {
//   case 0:
//     console.log("Rat");
//     break;
//   case 1:
//     console.log("Ox");
//     break;
//   case 2:
//     console.log("Tiger");
//     break;
//   case 3:
//     console.log("Rabbit");
//     break;
//   case 4:
//     console.log("Dragon");
//     break;
//   case 5:
//     console.log("Snake");
//     break;
//   case 6:
//     console.log("Horse");
//     break;
//   case 7:
//     console.log("Goat");
//     break;
//   case 8:
//     console.log("Monkey");
//     break;
//   case 9:
//     console.log("Rooster");
//     break;
//   case 10:
//     console.log("Dog");
//     break;
//   case 11:
//     console.log("Pig");
//     break;
//   default:
//     console.log("Invalid year");
// }

//Function declaration
//function myFunction()
//{
//code goes here
//variables, for loops,if,switch
//}
//Function calling, function won't execute if we don't call it explicitly 
// myFunction();
// prompt();


//Function KEYWORD --- //Function NAME
// function sayHello()
// {
//     document.write("Hello")
//     //code block
// }
// sayHello();

//Creating function with ARGUMENTS
// function myFunction(num1, num2)
// {
//     let result= num1 * num2;
//     console.log(result);
// }
//Calling the function, we can call the function as much times as we want
// myFunction(3, 3);
// myFunction(5, 7);


//Fucnction can RETURN a value
// function myFunction(num1, num2)
// {
//     let result= num1 * num2;
//     return result;
// }

// let functionResult = myFunction(3,7);
// console.log(functionResult);



//Parameter mismatche

// function sobiranje(x,y,z){
//         let result = x+y+z;
//         return result;
// }
//1. Calling the function with the number of arguments that it is declared
// let firstResult = sobiranje(3,5,7);
// console.log(firstResult);

//2. Calling the function with missing parameters, missing are passed as "undefined"
// let secondResult = sobiranje(3,5);
// console.log(secondResult);

//2. Calling the function with extra parameters, extras are ignored
// let thirdResult = sobiranje(3,5,6,7);
// console.log(thirdResult);

//DEFAULT parameters

// function mnozenje(x,y,z=2){
//     let result = x*y*z;
//     return result;
// }
// let result = mnozenje(3,5,6);
// console.log(result); //90

//if we do not send value for parameter z when calling the function, the default value will be used
// let secondResult = mnozenje(3,5);
// console.log(secondResult); //30

//SCOPE

// function simpleFunction()
// {
//     //code
//     let foo=500; //local variable
//     console.log(foo);
// }

// simpleFunction(); //500
// console.log(foo); //is not defined


// let foo = 500; //global
// function simpleFunction(){
//     //code
//     let foo = 600; //local 
//     console.log(foo);
// }
// simpleFunction(); //600
// console.log(foo); // 500

// let foo=500; //global
//  function simpleFunction()
//  {
//     //code
//     foo = 600; //local 
//     console.log(foo);
//  }

//  simpleFunction(); 
//  console.log(foo); // 600



//exercise 1
// Function declarations
// function sumNumbers(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// function subtractNumbers(num1, num2){
//     let result = num1 - num2;
//     return result;
// }

// function multiplyNumbers(num1, num2){
//     let result = num1 * num2;
//     return result;
// }

// function divideNumbers(num1, num2){
//     let result = num1 / num2;
//     return result;
// }

// //Function calling
// console.log(sumNumbers(2,5));
// console.log(subtractNumbers(7,4));
// console.log(multiplyNumbers(2,4));
// console.log(divideNumbers(8,2));
//or 
// let result = divideNumbers(8,2);
// console.log(result);

//exercise 2

//Declaration of both functions
// function farToCel(celsius){
// 	let result = celsius * 1.8 + 32;
// 	return result;
// }
// function celToFar(farenheits){
// 	let result = (5/9) * (farenheits-32);
// 	return result;  
// }

// //The person chooses what to calculate
// let personChoice = prompt("Enter F for farenheit and C for celsius");
// let personInput = parseInt(prompt("Please enter value:"));
// if(personChoice === "F"){
// 	console.log(`${celToFar(personInput)}C`);
// } else if(personChoice === "C"){
// 	console.log(`${farToCel(personInput)}F`);
// } else {
// 	console.log("ERROR!");
// }

//exercise 3
// function calculateAge(birthYear, currentYear) {
//     const age = currentYear - birthYear;
//     //console.log(`You are ${age} years old`);
//     console.log("You are " + age + " years old");
//   }
//bonus
//   const currentYear = new Date().getFullYear();
  
//   calculateAge(1990, currentYear);
//   calculateAge(1985, currentYear);
//   calculateAge(2000, currentYear);

// Example with Template literals which are literals delimited with backtick (`) characters
// function sumNumbers(num1, num2) {
//     let result = num1 + num2;
//     console.log("The sum of "+ num1 + "and " + num2 + "is: "+ result); // Without template literals
//     console.log(`The sum of ${num1} and ${num2} is: ${result}`); // with template literals
//   }
//   sumNumbers(10,56);