// let arrayOfNumbers = [1, 25, 2235, 11, -25, 625, 555];
// let arrayOfNumbers2 = [-325235, 35326, 65753, 2355, -13234];

function findLargestNumberInArray(someArray) {
    let lastBiggestNumber = -Infinity;
    let i = 0;
    while (i < someArray.length) {
        let numberElementFromArray = someArray[i];
        if (numberElementFromArray > lastBiggestNumber) {
            lastBiggestNumber = numberElementFromArray;
        }
        i++;
    }
    return lastBiggestNumber;
}

// let biggestNumber1 = findLargestNumberInArray(arrayOfNumbers);
// let biggestNumber2 = findLargestNumberInArray(arrayOfNumbers2);

// console.log(biggestNumber1, biggestNumber2);


// function digitsInNumber(input) {
//     console.log(`input: ${input}`);
//     while (input > 0) {
//         console.log(input % 10);
//         input = parseInt(input / 10);
//         console.log(`input: ${input}`);
//     }
// }

// digitsInNumber(2552);

let arrayOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let i = 0; i < arrayOfDays.length; i++) {
//     let dayOfWeek = arrayOfDays[i];
//     alert(`Iteratorot momentalno e: i == ${i}, a dayOfWeek e ${dayOfWeek}`);
// }

for (let dayOfWeek of arrayOfDays) {
    console.log(dayOfWeek);
}

// Write a function named findNumber that:
// Takes 2 arguments: array, type
// The person that calls the function should provide an array of numbers and string odd / even
// If the type is even the function should find all the even numbers and return them as result
// If the type is odd the function should find all the odd numbers and return them as result
// Time to accomplish: 20 minutes.


function findAllOddOrEvenNumbers(arrayOfNumbers, oddOrEven) {
    if (oddOrEven != 'odd' && oddOrEven != 'even') return null;

    let result = 0;
    for (let number of arrayOfNumbers) {
        if (oddOrEven == 'even') {
            if (number % 2 == 0) {
                result += number;
            }
        }
        else {
            if (number % 2 != 0) {
                result += number;
            }
        }
    }
    return result;
}

let arrayOfNumbers = [2, 3, 4, 5, 6, 7, 3252, 3543];

let result1 = findAllOddOrEvenNumbers(arrayOfNumbers, 'even');
console.log(result1);





