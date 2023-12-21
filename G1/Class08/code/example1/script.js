// <============================= Defining, creating and accesing objects =============================> 

// Easiest way of creating an object - curly brackets 
let obj = {};

// An object is a group of variables and functions denoted as 'key: value' pairs 
let person = {
    // Object properties (variables) 
    firstName: 'Iva',
    lastName: 'Cvetkovska',
    '1age': 23, // If a name starts with number and continues with letters it must be written with single or double quotes 
    proffesion: 'assistant',
    eyeColor: 'brown',
    goesToGym: true,
    isLazy: false,
    favoriteFood: ['lasagna', 'burger', 'sweets'],
    address: {
        street: 123,
        number: 2
    },
    // Object methods (functions)
    '1greet': function () { // The function can take arguments as per usual
        return `Hi! My name is Iva Cvetkovska`; // `Hi! My name is ${this.firstName} ${this.lastName}`
    },
    bio: function () {
        return `Iva Cvetkovska is 23 years old. She works as an assistant in Qinshift Academy`;
    },
    // An object cannot have two properties with the same key name
    // firstName: "Ana",
}
// Access the whole object 
console.log(person)

// Accessing properties with dot notation 
console.log(person.firstName);
console.log(person.isLazy);
console.log(person.favoriteFood[0]);
// Accesing properties with brackets 
console.log(person['lastName']);
console.log(person['1age']);
// Accessing methods 
console.log(person['1greet']());
console.log(person.bio());

// Object with numbers as keys
let vegetables = {
    0: 'potato',
    1: 'cabbage',
    2: 'carrot'
}
console.log(vegetables['0']);



// <============================= Updating and deleting Object properties =============================> 

let hotel = {
    name: 'Alexandar Palace',
    rooms: 40,
    gym: true,
    roomTypes: ['twin', 'double']
}

// Updating existing properties
hotel.name = 'Hotel Karposh';
hotel.roomTypes.push('suite');
// Adding a non-existing property
hotel.booked = 25;

// Deleting an object property 
delete hotel.booked;
console.log(hotel)



// <============================= Proving that EVERYTHING is an Object =============================> 

// arr.length -> length is a property 
// arr.push(...) and arr.pop() -> push and pop are methods
let arr = [1, 2, 3];

// sum.name -> name is a property 
// sum.call(this, ...[2, 2]) -> call is a method 
function sum(a, b) {
    return a + b;
};

// body.innerText -> innerText is a property
// body.append(...) -> append is a method
let body = document.querySelector('body');



// <============================= The Window Object =============================> 
// The Window Object is a global object that represents the browser window

// Variables and functions declared in the global scope become properties and methods of the window object
let notAGlobalVariable = 'let';
var globalVariable = 'var';
// console.log(window.globalVariable)

// window.alert(), window.prompt(), and window.confirm() 
// console.log(window.alert())

// window.innerWidth and window.innerHeight
// console.log(window.innerHeight)
// console.log(window.innerWidth)



// <============================= Intro to OOP =============================> 

// Refers to a fundamental style or approach to writing code.

// OOP says that bringing together the data and it's behavior in a single location called an Object 
// and containing all of that in a box, makes it easier to understand how our programs work

// FP says that data nad behavior are distinctly different things and should be kept seperate for clarity
// Just give me data and I'll return something new from the data that you gave me 

// The idea is to use both paradigms to make beautiful programs, JS is multi-paradigm 
// Pick the right paradigm for the specific problem 



// <============================= this keyword =============================> 

// this is the object that the function is a property of 
// person.bio(this)

// this in the global scope, refers to window
// console.log(this) === console.log(window)
// console.log(this === window)



// <============================= Constructor Function =============================> 

let hotelByConstructor = new Object();
// How do we add a property to this object? 
// hotelByConstructor.rooms = 50;
// console.log(hotelByConstructor);

// Problem we are solving - too many people.. we can't copy paste for all of them 
// function createPerson(firstName, lastName, bio){
//     let person = new Object();
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.bio = bio;
//     return person;
// }
 
function Person(firstName, lastName) {
    // console.log(this); // I want you to point this to the object that we just created 
    this.firstName = firstName;
    this.lastName = lastName;
}

let iva = new Person('Iva', 'Cvetkovska'); // Any function that is invoked with the new keyword is a Constructor function 
let ivo = new Person('Ivo', 'Kostovski');
let ilija = new Person('Ilija', '...');

console.log(iva);
console.log(ivo);
console.log(ilija);

// Why constructor function instead of regular funciton..?
// Just proper syntax in OOP 
