
// Procedural programming
function animalSpeak (animalType, animalBreed) {
    if (animalType === 'cat') {
        console.log(`The ${animalType} of breed ${animalBreed} meows.`)
    }

    if (animalType === 'dog') {
        console.log(`The ${animalType} of breed ${animalBreed} barks.`)
    }

    if (animalType === 'tiger') {
        console.log(`The ${animalType} of breed ${animalBreed} roars.`)
    }
}

// Object oriented concept - everything is an object
// Creating an object via object notation
let cat = {
    type: 'cat',
    breed: 'Ragdoll',

    speak: function() {
        // console.log('The cat meows');
        console.log(`The animal of ${this.type} and 
        of breed ${this.breed} meows.`);
    }
}

let dog = {
    type: 'dog',
    breed: 'Husky',

    speak: function() {
        // console.log('The cat meows');
        console.log(`The animal of ${this.type} and 
        of breed ${this.breed} barks.`);
    }
}

let tiger = {
    type: 'tiger',
    breed: 'Bengal',

    speak: function() {
        // console.log('The cat meows');
        console.log(`The animal of ${this.type} and 
        of breed ${this.breed} roars.`);
    }
}

cat.speak();
console.log(cat.speak);
console.log(cat.breed);

// Creating an object via Object literal
let person = new Object();
person.name = 'Petko';
person.age = 25;
console.log(person);
person.getInfo = function() {
    console.log(`This person's name is ${this.name} and their's age is ${this.age}`);
}

person.getInfo();

// Creating object via literal notation
let personTwo = {};
personTwo['height'] = 185;
personTwo["gender"] = 'male';
personTwo['hobbies'] = ['hiking', 'swimming', 'gaming'];

console.log(personTwo);
console.log(`personTwo: gender - ${personTwo.hasOwnProperty('gender')}`);
console.log(`personTwo: gender - ${personTwo.hasOwnProperty('salary')}`);



let car = {
    make: 'Honda',
    model: 'Civic',
    fuel: 'Gasoline',
    productionYear: 2020,

    move: function() {
        console.log('The car is moving');
    },

    start: function() {
        console.log('The car starts');
    },

    stop: function() {
        console.log('The car stops');
    }
}

console.log(car);

delete car.productionYear;

car.model = 'Jazz';
car['fuel'] = 'diesel';

console.log(car);

// Creating constructor function
function VehicleCreator (vehicleType, vehicleMake, vehicleModel, yearOfProduction, fuel) {
    this.type = vehicleType;
    this.make = vehicleMake;
    this.model = vehicleModel;
    this.year = yearOfProduction;
    this.fuel = fuel;

    this.getInfo = function() {
        return `The vehicle of type ${this.type} and make ${this.make} and model ${this.model} which is produced in ${this.year} useses ${this.fuel}`;
    }

    this.getVehicle = function() {
        console.log(this);
    }
}

let fico = new VehicleCreator('car', 'fiat', '500', 1983, 'gasoline');
console.log(fico.getInfo());

let pegla = new VehicleCreator('car', 'fiat', 'polski', 1990, 'gasolne');
console.log(pegla.getInfo());

let yugo = new VehicleCreator('car', 'zastava', 'yugo 55', 1991, 'diesel');
console.log(yugo.getInfo());

yugo.getVehicle();
console.log(this);

let firstName = 'Bob';
let person2 = {firstName: 'Jill'};

function printName() {
    console.log(this.firstName);
}

function printNameTwo() {
    console.log(firstName);
}

printName(); // undefined
person2.printName = printName;
printName(); // undefined
person2.printName(); // Jill

printNameTwo(); // Bob
person2.printName = printName;
printNameTwo(); // Bob
person2.printNameTwo(); // Bob



