console.log("----------- Objects -------------");

// Literal notation

let pane = {
    firstName: "Panche",
    lastName: "Manaskov",
    age: 31,
    company: "DEPT",
    job: "developer",
    canSing: false,

    saySomething: function(text) {
        return `${this.firstName} says ${text}`
    }
}

console.log(pane);

// access a property in a object

console.log(pane.firstName);
console.log(pane.age);

let sayText = pane.saySomething("Hello G7!");
console.log(sayText);

// change value of property
pane.job = "Software Developer";
console.log(pane.job);

// adding a new property
pane.hobby = "reading books";
console.log(pane.hobby);
console.log(pane);

let aleksandar = {};
console.log(aleksandar);

aleksandar.firstName = "Aleksandar";
console.log(aleksandar);
console.log(aleksandar.firstName);

// ---------- Dot Notation -----------

let dog = new Object();
console.log(dog);

dog.name = "Bart";
dog.breed = "AfganHound"
dog.bark = function() {
    return "WOOF WOOF";
}

console.log(dog);
console.log(dog.name);
console.log(dog.bark());

// ---------- Constructor Notation -------------


function Dog(nameFromUser, breedFromUser, ageFromUser, isLazy) {
    this.name = nameFromUser;
    this.breed = breedFromUser;
    this.age = ageFromUser;
    this.isLazy = isLazy;

    this.bark = function() {
        return 'WOOF WOOF WOOF'
    }
}

let myDog = new Dog("Rex", "German Shepard", 2, false);
console.log(myDog);

let secondDog = new Dog("Sparky", "Dzukela", 5, true);
console.log(secondDog);

secondDog.breed = "Belgian Shepard"
console.log(secondDog);

secondDog.isBarking = true;
console.log(secondDog);
console.log(myDog);

delete secondDog.breed;

console.log(secondDog);

// value and refrence type

let a = 5;
let b = 10;

b = a;
a = 20;

console.log("a:", a);
console.log("b:", b);


let obj1 = {
    fName: "Matej"
}

let obj2 = {
    fName: "Ivan"
}

// obj2 = obj1 
obj2 = {...obj1}

obj1.fName = "Dimitar";
obj2.fName = "Jonas";

console.log(obj1.fName)
console.log(obj2.fName)

// Exercise 5

let students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let button = document.getElementById("btn");
let list = document.getElementById("list");

function showStudents(studentsArr, element) {
    element.innerHTML = "";
    for(let student of studentsArr) {
        element.innerHTML += `<li><b>Student: </b> ${student.firstName} ${student.lastName}, <b>Age: </b>${student.age}</li>`
    }
}


button.addEventListener("click", function(event) {
    event.preventDefault();

    let name = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let age = document.getElementById("age");

    let newStudent = new Student(name.value, lastName.value, age.value);

    students.push(newStudent);
    console.log(students);
    showStudents(students, list);

    name.value = "";
    lastName.value = "";
    age.value = ""
})
