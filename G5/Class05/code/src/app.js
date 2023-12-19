//Crete Array
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(days);

//empty array
let emptyArray = [];
console.log(emptyArray);

// Mixed Array

let mixedArray = [1998, "Danilo", true, "Goran", "5545", 24, "Ana", false];
console.log(mixedArray);

//firstElement in Array
console.log(mixedArray[0]);

// Member of array
console.log(mixedArray[3]);

let secondMember = mixedArray[1];
console.log(`The value of secondMember is ${secondMember}`);

mixedArray[4] = "Nina";
mixedArray[6] = "Alek";

console.log(mixedArray);

// Length of array

console.log(`The length of the arrays is ${mixedArray.length}`);

//Last Member of the array
console.log(`The last member of the array is ${mixedArray[mixedArray.length - 1]}`)

//mixedArray.length - 1 // 8-1 = 7 index
//mixedArray[7] //index 7


// ADDING ITEMS

let secondMixedArray = [2,56,77,"Danilo", "Ivan", true, false, "Kiril", "Tamara", 1001];
console.log(secondMixedArray);

//Add arrayName[arrayName.length]
secondMixedArray[secondMixedArray.length] = false;
console.log("after adding items");
console.log(secondMixedArray);

// Add element at the end of the array arrayName.push()
console.log("==== PUSH ===");
secondMixedArray.push("New member"); //adding one member at the end of the array
console.log(secondMixedArray);

secondMixedArray.push(11, true, null); //adding members at the end of the array
console.log(secondMixedArray);

// Add element at the beginning of the array arrayName.unshift()

secondMixedArray.unshift("SEDC"); //adding one member at the beginning of the array
console.log(secondMixedArray);

secondMixedArray.unshift(25, false); //adding members at the beginning of the array
console.log(secondMixedArray);

//DELETING ITEMS

// DELETE element at the end of the array arrayName.pop()
console.log("==pop()==")

secondMixedArray.pop();
console.log(secondMixedArray);

let lastMemberDeleted = secondMixedArray.pop();
console.log("==lastMemberDeleted== ")
console.log(lastMemberDeleted);
console.log(secondMixedArray);



// DELETE element at the beginning of the array arrayName.shift()
console.log("==shift()== ")
secondMixedArray.shift();
console.log(secondMixedArray);

let firstMemberDeleted = secondMixedArray.shift();
console.log("==firstMemberDeleted==");
console.log(firstMemberDeleted);
console.log(secondMixedArray);


