console.log("Connected");

let movies = ['Dune', 'The Gentleman', 'Harry Potter', 'Lord of the Rings', 'The Hobbit', 'Game of Thrones'];
console.log(movies);
// accesing each element
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[3]);


console.log('*** WHILE LOOP ***');

/**
 * VERY BEGGINING OF THE LOOP/ITERATION, OUR ITERATOR IS 0
 * 
 * FIRST ITERATION => IS 0; 0 < 6 => YES; PRINT IN CONSOLE AND INCREMENT
 * SECOND ITERATON => IS 1; 1 < 6 => YES; PRINT IN CONSOLE AND INCREMENT
 * THIRD ITERATION => IS 2; 2 < 6 => YES; PRINT IN CONSOLE AND INCREMENT
 * FOURTH ITERATION => IS 3; 3 < 6 => YES; PRINT IN CONSOLE AND INCREMENT
 * ... until the last one
 * LAST ITERATION => IS 6; 6 < 6 => NO; EXIT THE LOOP
 */


// THE ITERATOR => will start from the beggining of the array
let iterator = 0;

// STATEMENT
// UNTIL THE ITERATOR IS LESS THEN THE LENGTH OF THE ARRAY
while(iterator < movies.length){
    console.log(iterator)
    console.log(movies[iterator])

    // WE MUST INCREMENT THE ITERATOR
    iterator++
}

console.log("*** Example 1 ***")
// Write a JavaScript program to read ten array values, determine the largest value, and print it

/**
 * 1. Create a function called printLargestName. DONE
 * 2. The function should accept one parameter, which is array of values. DONE
 * 3. Using loop we are going to iterate the array
 *   - Create a helper variable that will contain the largest element,
 *   - Create looping structure (while loop)
 *   - On each iteration, check if the element of the current iteration is bigger then the value of the helper variable. If so, overwrite the variable.
 * 4. The largest element found, return it as value or print it
 */


function printLargestName(arrayOfValues){
    let largestValue = "";

    let i = 0;
    while(i < arrayOfValues.length){
        // arrayOfValues[i] the element of the current iteration
        if(arrayOfValues[i].length > largestValue.length){
            // if the element of the current itration is bigger then
            // the length of largestValue variable we gonna assign new value to the variable
            largestValue = arrayOfValues[i];
        }

        i++
    }


    return largestValue;
}

let largestMovie = printLargestName(movies);
console.log(largestMovie);

// To find the smallest 
function printSmallestLength(arrayOfValues){
    // let largestValue = ""// length is 0
    let largestValue = arrayOfValues[0]
    let i = 0;
    while(i < arrayOfValues.length){
  
        if(arrayOfValues[i].length < largestValue.length){
       
            largestValue = arrayOfValues[i];
        }

        i++
    }


    return largestValue;
}