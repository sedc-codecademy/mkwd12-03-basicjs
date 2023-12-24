// Literal object
console.log("**** LITERAL OBJECT ****")
let car = {
    //PROPERTIES
    //key : value pairs
    color: "red",
    engine: "diesel",
    yearsOfProduction: 2004,
    isServiced: true,
    additionalGadgets: ["Seat Heaters", "Wheel Heater", "Led Display"],

    // METHODS
    drive: function (speed) {
        return `The car is driving ${speed} km/h ... vroom!! I am Verstappen`
    }
};

console.log(car);

console.log("**** ACESSING PROPERTIES/METHODS FROM OBJECT ****");

console.log("** DOT NOTATION **");

let carInfo = `The car color is: ${car.color}.`;
console.log(carInfo);

console.log(car.isServiced);
console.log(car.additionalGadgets);
console.log(car.engine);

let carIsDriving = car.drive(120);
console.log(carIsDriving);

console.log("** KEY NOTATION **");

console.log(car["isServiced"]);
console.log(car["additionalGadgets"]);
console.log(car["engine"]);

console.log(car["drive"](200));

console.log("**** ADDING/CHANGING PROPERTIES TO OBJECT ****");

let footballClub = {
    name: "Real Madrid"
};
console.log(footballClub);

footballClub.mainColor = "white";
console.log(footballClub);

footballClub.bestPlayer = "Kepa";
console.log(footballClub);

footballClub.chanting = function () { console.log('Hala madrid') }

console.log(footballClub)

footballClub.chanting();
console.log(footballClub.bestPlayer);

footballClub.name = "FC Real Madrid";
console.log(footballClub.name);
console.log(footballClub);

console.log("**** CONSTRUCTOR NOTATION ****");
let movie = new Object();

movie.name = "Harry Potter";
movie.release = 2008;
movie.genre = "Fantasy";

console.log(movie)
console.log(movie.name)

console.log("**** DELETING A PROPERTY ****");

let song = {
    name: "As it Was",
    author: "Harry Styles"
}
console.log(song);

// will delete this property of the object
delete song.author;

console.log(song) // {name: 'As It Was'} =)

let myDiv = document.getElementById("myDiv");

console.log(myDiv);

console.log("**** EXPLAINING 'this' keyword ****")

let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects",

    // Solution one
    // getFullName: function(name, lastName){
    //     console.log(`Full name is: ${name} ${lastName}`)
    // }

    // WRONG
    // getFullName: function () {
    //     console.log(`Full name is: ${trainer.name} ${trainer.lastName}`)
    // }

    getFullName: function(){
        console.log(`Full name is: ${this.name} ${this.lastName}`)
    }
};

// trainer.getFullName(trainer.name, trainer.lastName)

trainer.getFullName()

let address =  "Majka Teraza br.5"

trainer.academyName = function(){
    console.log(this.academy)
    console.log(this.address) // undefined, since adress is not existing in the object 
}

console.log(this) // window object =)



trainer.academyName()


console.log("**** CONSTRUCTOR FUNCTIONS ****");

// FABRIC FOR PERSONs
function Person(firstName, lastName, birthYear){
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear

    this.isAdult = function(){
        let currentYear = new Date().getFullYear();

        let difference = currentYear - birthYear;

        // if(difference >= 18){
        //     return true
        // }else {
        //     return false
        // }

        // same as above but shorter
        return difference >= 18
    };
};

// When we write new Person we create new INSTANCE
// of the constructor function Person 
let personOne = new Person("John", "Doe", 1995);
console.log(personOne);
console.log(personOne.isAdult())

let personTwo = new Person("Anna", "Smith", 2000);
console.log(personTwo)
console.log(personTwo.isAdult())

let personThree = new Person("Bob", "Bobski", 2020);
console.log(personThree)
console.log(personThree.isAdult())

let bookOne = {
    author: "John",
    title: "Harry Potter",
    
}