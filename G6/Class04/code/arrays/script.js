console.log('Connected');

console.log('**** SCOPE ****');
// Global Scope
let personOne = "Bob";
let personTwo = "John"; 

console.log('person one from global scope',personOne);
console.log('person two from global scope',personTwo);

// functional scope
function greeting(){
    console.log('person one from functional scope',personOne);
    console.log('person two from functional scope',personTwo);

    
    let personThree = "Anna";
    console.log("person two in functinal scope", personThree)
}

greeting();

// Dont do this, we cannot access variables in the global scope, that were declared in the functional scope. This throws an error
// console.log(personThree)

console.log('**** ARRAYS ****')

// *** IMPORTANT: Arrays in JS are 0 (zero) indexed

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
"Saturday", "Sunday"];

console.log(daysOfWeek);

// nameOfTheVariableThatIsArray.length => we get how many elements (the count) are in the array
console.log(`There are ${daysOfWeek.length} days in the week.`);

// We acess the value of the array, that is on the provided index.
console.log(daysOfWeek[0]); // Monday
console.log(daysOfWeek[1]); // Tuesday
console.log(daysOfWeek[2]); // Wednesday
console.log(daysOfWeek[5]); // Saturday

console.log("**** MIXED ARRAY ****");

let mixedArray = ["Hello world", false, 25, true, null, "Gjorge", 20 + 10];

console.log(mixedArray)
console.log(mixedArray[2]) // 25 is the value that sits on index 2

console.log("**** INDEXES IN STRING ****")
let fullName = "John Doe";
console.log(fullName);
console.log(fullName.length);
console.log(fullName[0]);

console.log('**** MANIPULATING VALUES IN ARRAY ****')
let todoList = ["Walk the dog", "Read an article", "Do the homeword", "Learn JS"];

// Printing the array before changing 
console.log(todoList)

let secondElementOfTodo = todoList[1];
console.log(secondElementOfTodo);

// Change the value of index 1
todoList[1] = "Wash the dishes";

// Printing array after changing
console.log(todoList);

// Accessing last element of todoList

// This is good
let lastItem = todoList[3];
console.log(lastItem);

console.log(todoList.length)

// This is better
// let lastItemBetter = todoList[todoList.length - 1];
let lastIndex = todoList.length - 1;
let lastItemBetter = todoList[lastIndex];
console.log(lastItemBetter);

console.log("**** FUNCTIONS FOR THE ARRAYS ****");
let movieNames = ["Harry Potter", "John Wick"];
console.log(movieNames);

// PUSH => Adds element/s at the end of the array
console.log("USING PUSH");
movieNames.push("Before the rain");
console.log(movieNames);

movieNames.push('Batman', "The amazing Spiderman", "Pirates of Caribean");
console.log(movieNames);


// UNSHIFT => Adds element/s at the beggining of the array
console.log("USING UNSHIFT");
movieNames.unshift("The Gentleman");
console.log(movieNames);
movieNames.unshift('Bullet Train', 'Dune');
console.log(movieNames);

console.log("USING POP");
// POP => Remove the element that the ending of the array;
// If we store the value of pop in a varible
// that value will be stored in the variable and we can read it.
let valueOfRemovedElement = movieNames.pop();
console.log(movieNames);
console.log("value of removed last element is:", valueOfRemovedElement)

console.log("USING SHIFT");
// SHIFT
let valueOfRemovedFirstElement = movieNames.shift();
console.log(movieNames);
console.log("value of removed first element", valueOfRemovedFirstElement)