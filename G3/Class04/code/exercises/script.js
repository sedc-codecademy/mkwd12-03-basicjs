console.log("======================== Exercise 1 ==============================");
/*
Action: Write a JavaScript program to read ten array values, determine the largest value, and print it
*/
let tenNumber = [1, 23, 234, 433_434, 3434, 500_000, 3444, 4334, 535, 644];

function findLargestValue(array) {
    let index = 0;
    let max = -Infinity;
    while (index < array.length) {
        if (array[index] > max) {
            max = array[index];
        }
        index++;
    }
    console.log(`The largest number is ${max}`);
}

findLargestValue(tenNumber);

