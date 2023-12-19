console.log("==== First example =====");

function printMessage() {
    let message = "Hello world!"; // local variable
    console.log(message);
}
printMessage();
//console.log(message); // ERROR!!

console.log("==== Second example =====");

let greeting = "Hello SEDC!" //global

function printGreeting() {
    greeting = "Happy holidays!";
    console.log(greeting);
}

printGreeting(); //Happy holidays!
console.log(greeting); //Happy holidays!


console.log("==== Third example =====");

let num = 50; //global (global scope)
//Scope A
function thirdExample(){
    //Scope B
    let num = 30; // local (function scope)
    console.log(num);
}

thirdExample(); //30
console.log(num); //50



let message = "Outside the function"; // global
function warning(message){
	console.log(message);//local
}

warning("Inside the function");
console.log(message);

//Inside the function
//Outside the function