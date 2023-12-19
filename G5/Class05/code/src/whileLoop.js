let number = 1;

while(number <= 10){
    console.log(`The value of number is: ${number}`);
    number++;
    console.log(`The value of number after increment is: ${number}`);
}

console.log("After while loop");


//While loop with Array
console.log("====== While loop with Array =======");
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(days.length);

//first index of array is 0

//length = days.length

// last index of array is days.length - 1


let index = 0;

while(index < days.length){ //index < 7
    console.log(`days[${index}]: ${days[index]}`); //days[0]: Mon
    index++; //index = index + 1
}
console.log("After while loop with array");

let numberOfDays = [];
let counter = 0;
while(counter < 10){
    numberOfDays.push(counter);
    counter++;
}
console.log(numberOfDays);


//EXAMPLE
console.log("=== EXAMPLE ===");
let numbers = [101, 190, 77, 1, 56, 276, 99, 89, 212, 111];
let secondNumbers = [22,11,23,41,555,1111,241412,222];

function findLargestValue(inputArray){
    let counter = 0;
    let max = -Infinity;

    while(counter < inputArray.length){
        //console.log(inputArray[counter]);
        if(inputArray[counter] > max){
            max = inputArray[counter];
        }
        // console.log(`Largest element in array is: ${max}`);
        counter++;
    }

    return max; 
}

console.log("=== NUMBER ARRAY ===");
let printLargestValue = findLargestValue(numbers);
console.log(`Largest value of array is: ${printLargestValue}`);

console.log("=== SECOND NUMBER ARRAY ===");
let printSecondLargestValue = findLargestValue(secondNumbers);
console.log(`Largest value of array is: ${printSecondLargestValue}`);


//Example 2
//1 do 4
//Math.pow(x,y)
//Math.pow(2,2) 1^2 = 1 2^2 = 4 
console.log("=== sum Of Squares ===");
function sumOfSquares(num1, num2){
    let result = 0;
    let counter = num1; //101

    while(counter <= num2){ //101... <= 150
        result += Math.pow(counter, 2)//101^2 + 102^2 +..
        counter++;
    }

    return result;
}

let result = sumOfSquares(101, 150);
console.log(`The sum of squares is: ${result}`);

let secondResult = sumOfSquares(1, 2);
console.log(`The sum of squares is: ${secondResult}`);

//DO WHILE
let num = 1;

do{
    console.log(num);
    num++;
} while(num <= 2);



