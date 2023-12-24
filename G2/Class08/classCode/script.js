console.log('Vrzani sme');

const user1 = {
    userName: 'Ivan',
    password: 'Password123',
    email: 'jamandilovski@gmail.com'
};

const user2 = {
    userName: 'Ivan123',
    password: 'OPCGTC',
    email: 'ivan.apostolovski@gmail.com'
}

const dog = {
    race: 'Dzukela',
    age: 2,
    color: 'Kafeavo',
    gender: 'male',
    name: 'Dzuki',
    bolesti: ['Shtenechak', null],
    weight: 80, //kilograms
}

function studentGenerator(
    nameParameter,
    lastNameParameter,
    ageParameter,
    genderParameter,
    gradesParameter) {
    return {
        name: nameParameter,
        lastName: lastNameParameter,
        age: ageParameter,
        gender: genderParameter,
        grades: gradesParameter
    };
};

const student1 = studentGenerator('Viktor', 'Zdravkovski', 21, 'M', {
    matematika: 3,
    makedonski: 2
});

console.log(student1);


class Student {
    constructor(name, lastName, age, gender, grades) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender
        this.grades = grades;
    }

    walk() {
        console.log(`${this.name} with last name ${this.lastName} has started to walk.`);
    }

    changeLastName(lastName) {
        console.log(`Student ${this.name} ${this.lastName} has changed its last name to ${lastName}`);
        this.lastName = lastName;
    }
}
class Grades {
    constructor(matematika, makedonski) {
        this.matematika = matematika;
        this.makedonski = makedonski;
    }
}
console.log(Student);
const student2 = new Student('Mario', 'Milchevski', 29, 'M', new Grades(4, 5))

console.log(student2);//

const student3 = student2; //we connect another reference

student3.age = 30;

console.log(student2);// student2.age will be 30, because objects are reference type

console.log(student2.walk);

// make a class named Dog
// in the constructor, define 5 parameters
// make instances of 5 different dogs
// console log them


const student4 = new Student('Marija', 'Tuleva', 20, 'F', new Grades(5, 5));
const student5 = new Student('Filip', 'Nikolov', 18, 'M', new Grades(5, 5));

student4.walk();
student5.walk();

student4.changeLastName('Djokovic');

delete student5.grades
console.log(student5);



//on your class that you made before, class Dog
//extend it to have 2 new methods
//1. bark, console log the race and name that barks
//2. eat, accepts 1 argument, that is the food that the dog should eat, and
// should print the dog race, weight.

/** 
 * 
Create class Car with properties:

model, color, year, totalFuel, fuelConsumption

add drive method, that accepts one parameter, distance, that will print the distance passed and how much fuel was consumed during the travel, and will update total fuel accordingly. If there is not enough fuel for the travel, should print not enough fuel for the trip.


let fuelConsumed = distance * (this.fuelConsumption / 100);

**/


