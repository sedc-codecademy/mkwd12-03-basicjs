console.log("============================ ARRAYS ============================");
// grupiranje na srodni vrednosti vo edna struktura
// one type of coolection
// list of comma-separated values
// we can store any type of data in an array

console.log("");
console.log("============ Creating an Array ============");
// we use square brackets [] to create an array

let emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);
console.log(emptyArray.length);

// array of strings
let fruits = ["Orange", "Apple", "Pear", "Strawberry"];
console.log(fruits);
console.log(fruits.length);

// a single array, even though written in multiple lines
// better readablity!
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
console.log(days);

// array of numbers
let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits);

let mixedArray = [1, 2, 3, true, "Wow is this possible?", false, null, 500, "Yes it is, it's JavaScript :)"]
// array of values with different types
// DON'T DO THIS !!!
console.log(mixedArray);



console.log("");
console.log("============ Accessing items in Array ============");
// by index => every item has it's own index
// JavaScript arrays are zero-indexed => indexing always starts from 0
console.log(days[2]);
console.log(days[1]);
console.log(days[0]);

// we can assign specific item to a variable
let someDay = days[5];
console.log(someDay); // Saturday
console.log(days[10]); // undefined
console.log(days[days.length]); // undefined
console.log(days[days.length - 1]);



console.log("");
console.log("============ Changing items values ============");

console.log(fruits[2]);
fruits[2] = "Peach";
console.log(fruits[2]);
console.log(fruits);

days[3] = "Someday";
//
console.log(days);



console.log("");
console.log("============ Adding items ============");
// console.log(fruits[10]);
// fruits[10] = "Fig";
// console.log(fruits[10]);
// console.log(fruits);
// DON'T DO THIS !

// 1) push() => adds one or more items to the end of an array
console.log(fruits[fruits.length - 1]);
// name of the array + . + push(new item)
// adding single item
fruits.push("Fig")
console.log(fruits[fruits.length - 1]);
console.log(fruits);
console.log(fruits.length); // 5

// adding multiple items
fruits.push("Raspberry", "Banana", "Papaya")
console.log(fruits);
console.log(fruits.length); // 8

// 2) unshift() => adds one or more items to the beggining of an array
console.log(fruits[0]);
fruits.unshift("Kiwi")
console.log(fruits[0]);

fruits.unshift("Olive", "Hazelnut");
console.log(fruits);



console.log("");
console.log("============ Deleting items ============");

// 1) pop() => removes the last item from an array AND returns it's value
console.log(fruits);
console.log("Remove the last item with pop()");
fruits.pop();
console.log(fruits);

let lastItem = fruits.pop();
console.log(`The item ${lastItem} has been removed.`);
console.log(fruits);

// 2) shift() => removes the first item from an array and returns it's value
fruits.shift(); // removes the first element
console.log(fruits);
let firstItem = fruits.shift();
console.log(firstItem);
console.log(fruits);

// 3) splice() => used to remove items from an array by specifing the start index and the number of items to be removed
console.log("");
console.log(days);
let removedDays = days.splice(2, 2);
console.log("We remove days with splice");
console.log("The removed days are:");
console.log(removedDays);

console.log(days);
days.splice(1); // delete everything starting from index 1
console.log(days);
