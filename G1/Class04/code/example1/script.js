
            //   0        1      2        3 
let colors = ['Yellow', 'Red', 'Blue', 'Green'];

// console.log('All colors', colors)
// console.log('Yellow color:', colors[0])
// console.log('Green color:', colors[3])

// console.log('Before reassign', colors[2])
colors[2] = 'Purple';
// console.log('After reassign', colors[2])

let allValuesArray = [1, 'test', null, undefined,
                        NaN, true, ['another one']]

// console.log('We can have any types of values mixed:', allValuesArray)

// console.log('In the all values array we have', allValuesArray.length, 'items')

let animals = ['dog', 'cat', 'parrot', 'penguin'];
                              // 4 - 1
let theLastAnimal = animals[animals.length - 1]

// console.log('The last animal', theLastAnimal);

// console.log('The animal at length', animals[animals.length])

animals[animals.length] = 'bear';

// console.log('Animals with bear', animals);

let classes = ['intro', 'html css', 'basic js']

// Adding a new item in the array at the end
classes.push('Advanced JS');

classes.push('Node JS', 'Nest JS');

console.log('Classes after push()', classes)

// Adding a new item in the array at the beginning 
console.log('Third one before unshift is:', classes[3])
classes.unshift('Onboarding');
console.log('Third one after unshift is:', classes[3])
console.log('Classes after unshift()', classes)

// Deleting the last item of the array

let theLastClass = classes.pop()
console.log('The deleted class', theLastClass)
console.log('Classes after pop()', classes)

// Deleting the first item of the array

let theFirstClass = classes.shift();
console.log('The deleted first class', theFirstClass);
console.log('Classes after shift()', classes);

// === LOOPING STRUCTURES ===

// While

// Do not use while without exit scenario!!!
// It will result in infinite loop!!!
// while(true) {
//     console.log('While runs')
// }

// let counter = 0;

// while (counter <= 4) {
//     console.log('Counting: ', counter)
//     counter++;
// }

// While with arrays

// let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// let counter = 0;

// while(counter < days.length) {
//     console.log('the day: ', days[counter])
//     counter++;
// }

// Do while

// let counter = 0;

// do { 
//     console.log('Number: ', counter)
//     counter++;
// } while (counter < 0)

// For loop - Incrementation

let dogs = ['sharplaninec', 'chivava', 'border collie', 'golden retriever'];

// for (let i = 0; i < dogs.length; i++) {
//     console.log(dogs[i])
// }

// For loop - decrementation

// for (let i = dogs.length - 1; i >= 0; i--) {
//     console.log(dogs[i])
// }

// for (let i = dogs.length; i > 0; i--) {
//     console.log(dogs[i - 1])
// }

// For Of

// let numbers = [1, 2, 3]

// for (let number of numbers) {
//     console.log(number)
// }


let students = ['Petar', 'Orce', 'Dejan', 'Klime', 'Beni'];

// Break

let dejanExists = false;

for (let student of students) {
    // console.log('student in iteration', student)
    
    if (student === 'Dejan') {
        dejanExists = true;
        break;
    }
}

if (dejanExists) {
    console.log('Dejan is part of the students list')
} else {
    console.log("Dejan is not part of the students list")
}

// Continue

for (let student of students) {
    if (student === 'Orce') {
        continue
    }
    
    console.log('Student in iteration:', student)
}

// Filtering

let groceries = ['meat', 'cheese', 'bread', 'mushrooms', 'kiwi'];

function filterGroceries(ingredientToBeFilteredOut, array) {
    let filteredGroceries = [];

    for (let ingredient of array) {
        if (ingredient !== ingredientToBeFilteredOut) {
            filteredGroceries.push(ingredient)
        }
    }

    return filteredGroceries;
}

const result = filterGroceries('kiwi', groceries)
// console.log(result)

const cars = ['BMW', 'Opel', 'Golf']

const result1 = filterGroceries('Opel', cars)
// console.log(result1)

const grades = [1, 2, 3, 5, 2, 4, 3];

function giveBonusGrade(bonus, arrayOfGrades) {
    // declare empty array
    let updatedGrades = []

    // update empty array
    for (let grade of arrayOfGrades) {
        let sum = grade + bonus
        updatedGrades.push(sum)
    }

    // return empty array
    return updatedGrades;
}

const gradeResult = giveBonusGrade(3, grades);
// console.log(gradeResult);

let fruits = ['apple', 'kiwi', 'banana', 'orange']

function findItem(array, item) {
    for (let arrayItem of array) {
        if (arrayItem === item) {
            return true;
        }
    }
    
    return false;
}

const exists = findItem(fruits, 'kiwi')
const notExists = findItem(fruits, 'tomato')

console.log('exists', exists)
console.log('notExists', notExists)