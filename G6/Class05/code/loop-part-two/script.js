console.log('CONNECTED');

console.log('**** DO/WHILE LOOP ****');

let iteratorDoWhile = 0;

do {
    // logic that is going to execute in a loop.
    let sentence = `Number in do while is: ${iteratorDoWhile}`;

    console.log(sentence);
    iteratorDoWhile++
} while(iteratorDoWhile <= 10); // this is the statement


console.log('**** DO WHILE SECOND EXAMPLE ****');

let iteratorSecondDoWhile = 0;

do{
    let sentence = `Number in second example is: ${iteratorSecondDoWhile}`;
    console.log(sentence);

    iteratorSecondDoWhile++
} while(iteratorSecondDoWhile >= 10);

console.log('**** FOR LOOP ****')

// Same as while loop but is way shorter or it is fancy while loop =)
// ITERATOR; CONDITION; INCREMENT/DECREMENT ITERATOR
for(let iterator = 0; iterator <= 20; iterator++){
    console.log(`Number is for loop is: ${iterator}`)
};


console.log("**** EXAMPLE #1 ****");

let fullNames = ["Bob Bobski", "John Doe", "John Wick", "Anna Ann"];

/**
 * TASK #1: Create a function that prints fullnames out of an array
 * 1. Create a function with the name printNames => DONE
 * 2. The function should accept one parameter => DONE
 * 3. use for loop to iterate that array => DONE
 * 4. on each iteration print the name => DONE
 */
console.log(fullNames)

function printNames(arrayOfFullNames){
    for(let iterator = 0; iterator < arrayOfFullNames.length; iterator++){
        let fullName = arrayOfFullNames[iterator];

        console.log(fullName);
    }
};

printNames(fullNames)

let userNames = ["Hello Me", 'Some thing', 'WWW'];

printNames(userNames)

console.log("**** EXAMPLE #2 ****");

/**
 * Create a funcion that accepts two parameters. Array and a value.
 * Find the element in the array.
 * If the element is existing return that element
 * If the element is not existing return message
 */

// function findValue(arrayOfValues, value){
//     let foundValue = "";

//     for(let i = 0; i < arrayOfValues.length; i++){
//         console.log('ITERATION IS ON GOING')
//         if(arrayOfValues[i] === value){
          
//             foundValue = arrayOfValues[i];
//             break; // Break will STOP the loop and we gonna exit it if the condition was met, so we will save on resources.

//             //continue; // Countinue means we will continue with iteration it is like the default value.

//             // return; // Same as break, it will stop the loop and it can return value as well
//         }
//     }
//     // foundValue.length === 0 // same as !foundValue, since if foundValue is empty string means it is falsy value
//     if(!foundValue) {
//         return "Product is not found"
//     }else {
//         return foundValue
//     }

// };

// Same as above but shorter
function findValue(arrayOfValues, value){
    for(let i = 0; i < arrayOfValues.length; i++){
        console.log('ITERATION IS ON GOING')
        if(arrayOfValues[i] === value){
            return arrayOfValues[i]
        }
    }
    return "Product is not found"

};


let products = ["PC", "Samsung Galaxy", "T-Shirt", "Headphones", "Banana", "Pomegranate", "Gaming pc", "Sony"];

let productFound = findValue(products, "Samsung Galaxy");

console.log(productFound)

// let productNotFound = findValue(products, "Iphone");
// console.log(productNotFound)