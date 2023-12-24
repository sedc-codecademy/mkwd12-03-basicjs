// // let firstName = 'Marko';
// // let age = 28;
// // let isDeveloper = true;
// // let lastName = 'Djamtoski';
// // let gender = 'M';

// // let person = new Object(); // one of the ways to create a object.
// // person.firstName = 'Marko'; // firstName is the key and value is 'Marko'.
// // person.age = 28;
// // person.isDeveloper = true;
// // person.lastName = 'Djamtoski';
// // person.gender = 'M';
// // console.log(person);
// // console.log(person.firstName); // we are trying to access the property with KEY firstName.


// let person = {
//     firstName : 'Marko',
//     lastName : 'Djamtoski',
//     age : 28,
//     gender : 'M',
//     isDeveloper : true,
//     talk : function () {
//         console.log('Phylosophy');
//     }
// }
// person.talk();
// console.log(person);

// let hotel = {};
// // console.log(hotel);
// hotel.rooms = 25; // add a new property in hotel object with key "rooms"

// person.age = 26; // we change the age in the object
// // person.talk = 'Hello';
// console.log(person);

// delete person.age;
// console.log(person);

// class Person { // This is a class but we are using function Person to create an instance of this object
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.talk = function () {
//             console.log('Talk!');
//         };
//     }
// }


// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.talk = function() {
//         console.log('Talk!');
//     }
// }

// let person = new Person('Marko','Djamtoski',28);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// person.talk();
// let firstName = 'Petar';
// let exampleObj = {
//     firstName : 'Marko',
//     talk : function() {
//         console.log(`This is the global variable : ${firstName}!!! and this is the variable in the object :  ${this.firstName}!!!`);
//     }
// }
// exampleObj.talk();

// function windowSize() {
//     let width = this.innerWidth;
//     let height = this.innerHeight;
//     return [width,height];
// }

// console.log(windowSize());

let innerWidth = 600;
let shape = {
    innerWidth : 300,
    showWidth : function() {
        console.log(this.innerWidth);
    }
};

function showWidth() {
    console.log(innerWidth); // this belongs to window but when we define it within the object it gives 300.
}
// shape.showWidth = showWidth; // I am giving this function to the object (NOTE this will change the value of this because "this")
// reffers to the object where the function(method) is being called
shape.showWidth();

showWidth();

