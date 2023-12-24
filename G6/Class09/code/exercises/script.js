console.log("**** Exercise #7 ****")
let arrayOfValue = [null, "The Moon" , undefined, 2, "Galaxy" , NaN, "", false];

function filterFalsyValues(listOfValues){

    let truthyValues = [];

    for(let i = 0; i < listOfValues.length; i++){
        // if element of current itration is truthy =)
        if(listOfValues[i]){
            truthyValues.push(listOfValues[i])
        }
    }

    return truthyValues
};


let truthyValuesFiltered = filterFalsyValues(arrayOfValue);
console.log(truthyValuesFiltered)

console.log("**** Exercise #6 ****");

function checkIfPassed(grades){
    if(grades.length === 0){
        alert("Buddy, please provide you grades.")
        return;
    }

    let sum = 0;
    for(let i = 0; i < grades.length; i++){
        sum += grades[i]
    }

    let avarageScore = sum / grades.length;
    let requiredScore = 8;

    if(avarageScore >= requiredScore){
        alert("Amigo, you have passed!")
    }else {
        alert("Sorry amigo, ponavlan si")
    }
}

let gradesOne = [10, 6, 8, 9, 6];
checkIfPassed(gradesOne) 

let gradesTwo = [10, 6, 8, 9, 6, 10, 10];
checkIfPassed(gradesTwo)