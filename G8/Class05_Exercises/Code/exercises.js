// //1.Action: Write a function that will double each number in an array

// function duplicateNumbers(arr) {
//     let duplicatesArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         duplicatesArr.push(arr[i] * 2);
//     }

//     return duplicatesArr;
// }

// console.log(duplicateNumbers([10, 20, 30, 40, 50]));

// //2. In the array of numbers delete the first and last number
// // and add "First" as a string in the beggining and "last" as 
// //a string in the end !

// let numbersArr = [5, 2, 3, 4, 0];

// numbersArr.shift();
// numbersArr.pop();
// numbersArr.push("Last");
// numbersArr.unshift("First");
// console.log(numbersArr);

// //3.Write a function that returns the square of a number!

// function numberSquare(a) {
//     return a * a;
// }

// console.log(numberSquare(2));
// //console.log just for checking
// function numberSquare2(b) {
//     let result = b * b;

//     console.log(result);
// }

// numberSquare2(2);

// function numberSquare3(c) {
//     return Math.pow(c, 2);
// }

// console.log(numberSquare3(2));

// function numberSquare4(d) {
//     let sum = Math.pow(d, 2);
//     return sum;
// }

// console.log(numberSquare4(2));

// //4.Action: Write a JavaScript program to get the difference
// // between a given number and 13, if the number is greater 
// //than 13 double the difference as a result. Make sure you use a function! Ex. Input: 20 ==> Output: 14

// function diff(num){
//     if(num>13){
//         let difference=num-13;
//         let duplicateDifference=difference*2;
//         return duplicateDifference;
//     }else{
//         let difference=13-num;
//         return difference;
//     }
// }
// let userInput=parseInt(prompt("Enter a number"));
// console.log(diff(userInput));

//5.Create a function sumOfDigits that takes a number and 
//returns the sum of its digits.
//Use a loop to iterate through each digit.
function sumOfDigits(num){
    let stringNum=String(num);
    let sum=0;
    for (let i = 0; i < stringNum.length; i++) {
        
        sum=sum+parseInt(stringNum[i]);
        
    }
    return sum;
}

console.log(sumOfDigits(54));


//6.Action: Bob's salary is 1000 eur per month.
// He has expenses that has to cover during the month. 
//He has to pay rent for his apartment 375 eur.
// He should pay 250 eur for his bills in total.
// Print on screen what is the amount left that Bob has for 
//the rest of the month, and what is the total amount of his expenses. 
//Make sure you use a function!

function bobSalary(){
    let salary=1000;
    let apartment=375;
    let bills=250;
    let spentForExpences=bills+apartment;
    let leftAmount=salary-spentForExpences;

    return `Bob spent ${spentForExpences} and now he has ${leftAmount} left.`

    // let expenses=salary-apartment-bills;
    // console.log(`Bob spend ${expenses}`);
    // let spend=apartment+bills;
    // console.log(`Bob expenses ${spend}`);
}

console.log(bobSalary());

//7.Action: The Trip Planner
//Write a function named planTrip that:
//Takes 3 arguments: destination, number of days, and daily budget. 
//Calculates the total budget for the trip based on the number of days 
//and daily budget. Outputs your trip plan to the screen like so:
// "Your trip to [destination] for [number of days] days will require 
//a total budget of [total budget] euros." Call that function three times 
//with different sets of values.

function planTrip (destination, days, budget){
let totalBudget=days*budget;
return `Your trip to ${destination} for ${days} days will require a total budget of${totalBudget}`

}
console.log(planTrip("Ohrid",5,50));

//8.Action: One student has 5 exams in the first semester. 
//His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively.
// The professor told the students that for passing the first semester 
//they must have average of 8. The student needs to know whether they have
// passed the semester or not. Alert on screen if the student pass or not!

function averageOfGrades(array){
    let sum=0
    let average=0
    for (let i = 0; i < array.length; i++) {
        sum+=array[i]
        
    }
    average=sum/array.length
    if (average>=8){
        alert(`you passed with average: ${average}`)
    } else{
        alert(`you didnt pass with average: ${average}`)
    }   

}
let array=[10,6,8,9,6]
console.log(averageOfGrades(array))


function averageOfGrades2(array){
    let sum=0;

    for (let i = 0; i < array.length; i++) {
        sum+=array[i]   
    }

   let averageGrade=sum/array.length;
    if (averageGrade>=8){
        alert(`you passed with average: ${averageGrade}`)
    } else{
        alert(`you didnt pass with average: ${averageGrade}`)
    }   

}

console.log(averageOfGrades([10,6,8,9,6]))

//9.Action: Make a function to check if a number is even or odd
function checkNumber(number){
    if(number % 2 === 0){
        alert("its even")
    }else{
        alert("its not")
    }
}
checkNumber(6);

//10.Action: Write a JavaScript function that takes an array of
// numbers and returns a new array containing only numbers greater 
// than a certain value, passed as a second argument.

function numbersGreaterThan(arr,num){
    let greaterArr=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            greaterArr.push(arr[i]);
        }
    }
    return greaterArr;
}

console.log(numbersGreaterThan([10,20,30,40,50],25))