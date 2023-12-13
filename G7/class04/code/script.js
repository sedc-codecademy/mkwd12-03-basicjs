// Arrays
console.log("----------Arrays----------");

let myFirstArray = ["Stefan", "Ivan", "Jonas", "Ilija"];
let emptyArray = [];
let mixedArray = ["string", 34, true, undefined, false, {}, [], null];


console.log(myFirstArray);
console.log(emptyArray);
console.log(mixedArray);

// Access elements in arrays
let firstElement = myFirstArray[0]
console.log(firstElement);

let secondElement = myFirstArray[1];
console.log(secondElement);

// Change value of an element in arrays
myFirstArray[0] = "Matej";

console.log(myFirstArray);
console.log(myFirstArray[0]);

// Getting the length of the array
console.log(`The length of myFirstArray is: ${myFirstArray.length}`);

let lastElement = myFirstArray[myFirstArray.length - 1];
console.log(lastElement);

// Adding and removing elements
myFirstArray[myFirstArray.length] = "Dimitar";
console.log(myFirstArray);
console.log(myFirstArray[myFirstArray.length - 1]);
console.log(myFirstArray[4]);

// .push() is used for adding element(s) at the end of an array
// we can add multiple elements at once
myFirstArray.push("Nikola", "Teodor");
console.log(myFirstArray);

// .unshift() is used for adding element(s) at the beggining of an array
// we can add multiple elements at once
myFirstArray.unshift("Aleksandar", "Pane");
console.log(myFirstArray);

// splice - index, how many elements you want to remove, new elemen(s)
myFirstArray.splice(2, 1, "Bob", "Bobski", "Some name");
console.log(myFirstArray);

myFirstArray.splice(7, 2);
console.log(myFirstArray);

// .pop() is used for removing element at the end of the array;
myFirstArray.pop();
console.log(myFirstArray);

// .shift() is used for removing element at the start of the array
myFirstArray.shift();
console.log(myFirstArray);

// Loop
console.log("-------- Loops ----------");

// while

let counter = 1;

while (counter < 10) {
    console.log(counter);
    counter++;
}

// Exercise 

let whileCounter = 101;
let sumOfSquares = 0;

while(whileCounter <= 150) {
    //whileCounter++; if we put the counter first, we will skip the first value (101)
    console.log(`While Counter: ${whileCounter}`);
    sumOfSquares += Math.pow(whileCounter, 2);
    console.log(`Math.pow(): ${Math.pow(whileCounter, 2)}`);
    console.log(`Sum of squares: ${sumOfSquares}`);
    whileCounter++;
} 

console.log(`The sum of the squares of every number from 101 to 150 is ${sumOfSquares}`);

// Ask the user to gues our secret number via promt (ranging from 0 - 9);
// The user should be able to guess as many times until he finannly guesses our number

const secretNumber = 7;
let userNumber = 0;

// do {
//     userNumber = parseInt(prompt("Gues our secret number! Pick from 1 - 9"));
// } while (userNumber !== secretNumber)

// console.log(`Yay! You guest our secret number ${secretNumber}`);

while(true) {
    userNumber = parseInt(prompt("Gues our secret number! Pick from 1 - 9"));
    if(userNumber === secretNumber) {
        console.log(`Yay! You guest our secret number ${secretNumber}`);
        break;
    }
}




