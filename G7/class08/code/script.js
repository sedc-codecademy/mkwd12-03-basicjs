// Exercise 4

function closestTo100(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        alert("Negative number detected. Please enter only positive integers.");
        return;
    }
    
    // v1
    // let distanceNum1 = 100 - num1;
    // let distanceNum2 = 100 - num2;

    // if (distanceNum1 < 0) {
    //     distanceNum1 = -distanceNum1;
    // }
    // if (distanceNum2 < 0) {
    //     distanceNum2 = -distanceNum2;
    // }

    // v2
    // let distanceNum1 = 100 - num1;
    // let distanceNum2 = 100 - num2;

    // distanceNum1 = distanceNum1 > 0 ? distanceNum1 : -distanceNum1;
    // distanceNum2 = distanceNum2 > 0 ? distanceNum2 : -distanceNum2;

    // v3
    let distanceNum1 = Math.abs(100 - num1);
    let distanceNum2 = Math.abs(100 - num2);

    if (distanceNum1 < distanceNum2) {
        return num1;
    } else if (distanceNum2 < distanceNum1) {
        return num2;
    } else {
        return "Both numbers are equally close to 100.";
    }
}

let result = closestTo100(70, 50);
console.log(result);

// Exercise 5:

function calculateFinances(salary, rent, bills) {
    let totalExpenses = rent + bills;
    let remainingBalance = salary - totalExpenses;

    console.log(`Total expenses: ${totalExpenses} EUR`);
    console.log(`Remaining balance: ${remainingBalance} EUR`);
}

let salary = 1000; 
let rent = 375;    
let bills = 250;   

calculateFinances(salary, rent, bills);


// Exercise 7
let sampleArray = [NaN, 0, 15, 22, false, -55, "", undefined, "hi", null, true]

function validateArray(array) {
    let filteredArray = [];

    for(let element of array) {
        if(element !== null && element !== 0 && element !== "" && element !== undefined && element !== false && !Number.isNaN(element) ) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

console.log(validateArray(sampleArray));
// console.log(isNaN(NaN)); 
// console.log(isNaN("hello"));
// console.log(Number.isNaN("hello"));


function validateArray2(array) {
    let filteredArray = [];

    for(let element of array) {
        if(element === null || element === 0 || element === "" || element === undefined || element === false || Number.isNaN(element)){
            continue;
        }

        filteredArray.push(element);
    }

    return filteredArray;
}

console.log(validateArray2(sampleArray));

function validateArray3(array) {
    let filteredArray = [];

    for(let element of array) {
        if(element) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

console.log(validateArray3(sampleArray));

// Exercise 8

let button = document.getElementById("tellStoryButton");
let storyParagprah = document.getElementById("story")

button.addEventListener('click', function() {

        let whoValue = document.getElementById('who').value;
        let whatValue = document.getElementById('what').value;
        let whenValue = document.getElementById('when').value;

        let story = `${whoValue} was a ${whatValue} in the ${whenValue}`;
        storyParagprah.innerText = story;
});

