console.log("Script is working");

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  knowledge: 43,
  isSignedUp: true,
  classes: ["Basic HTML", "Basic JS", "Adv JS"],

  study: function () {
    this.knowledge += 5;
  },

  studyHarder: function () {
    this.knowledge += 20;
  },

  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

console.log(student);

// Acessing and calling methods of an object
student.printFullName();
student.study();
student.studyHarder();

// Accessing properties of an object using . (dot) notation
console.log("Dot Notation");
console.log(student.knowledge);
console.log(student.age);
console.log(student.lastName);

// Accessing properties of an object using [] (bracket) notation
console.log("Bracket Notation");
console.log(student["isSignedUp"]);
console.log(student["knowledge"]);

// Avoid doing this, it is hard to read and work with
// student["studyHarder"]();

// Updating object properties
student.firstName = "Borche";
student.lastName = "Borisovski";

// Adding properties and methods to objects
student.country = "Macedonia";
student.city = "Skopje";

student.dontStudy = function () {
  this.knowledge -= 5;
};

student.dontStudy();
student.dontStudy();

// Deleting properties from objects ( Avoid this)
// delete student.country;
// delete student.city;

// Do this instead
student.country = "";
student.city = "";

console.log(student);

function createPersonObject(name, yearOfBirth, job) {
  const person = {
    name: name,
    yearOfBirth: yearOfBirth,
    job: job,
  };

  return person;
}

// const john = createPersonObject("John Doe", 1978, "Lawyer");
// const jane = createPersonObject("Jane Doe", 1985, "Nurse");

// console.log(john, jane);

function Person(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.calculateAge = function () {
    const currentYear = new Date().getFullYear();

    console.log(`${this.name} is ${currentYear - this.yearOfBirth} years old`);
  };
}

const john = new Person("John Doe", 1978, "Lawyer");
const jane = new Person("Jane Doe", 1985, "Nurse");
const bob = new Person("Bob Bobsky", 1994, "Truck Driver");

console.log(john);
console.log(jane);

john.calculateAge();
jane.calculateAge();
bob.calculateAge();

// Class example

class Vehicle {
  engineNumber = "M47-B";

  constructor(numberOfWheels, currentFuel, fuelConsumption, horsepower) {
    this.numberOfWheels = numberOfWheels;
    this.currentFuel = currentFuel;
    this.fuelConsumption = fuelConsumption;
    this.horsepower = horsepower;
  }

  driveOneHundredKm() {
    this.currentFuel -= this.fuelConsumption;
  }
}

const fiatPanda = new Vehicle(4, 20, 8, 43);
const fiatPandaSupreme = new Vehicle(4, 30, 10, 90);

console.log(fiatPanda);
console.log(fiatPandaSupreme);

// function checkThis() {
//   console.log(this.innerWidth);
//   console.log(this.knowledge);
// }

// checkThis();

// student.thisMethod = checkThis;
// student.thisMethod();
