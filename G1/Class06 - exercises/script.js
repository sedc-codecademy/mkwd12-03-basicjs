// Exercise 1: Average grade
// Given a list of student grades find the average grade

let martinGrades = [4, 5, 3, 1, 2, 5];
let kirilGrades = [5, 3, 2, 1];

function calculateAvgStudentGrade(grades) {
    let sum = 0;

    for (let grade of grades) {
        // or sum = sum + grade
        sum += grade
    }

    let avg = sum / grades.length
    return avg;
}

let martinAvgGrade = calculateAvgStudentGrade(martinGrades)
let kirilAvgGrade = calculateAvgStudentGrade(kirilGrades)

console.log("Martin has an avg grade of:", martinAvgGrade)
console.log("Kiril has an avg grade of:", kirilAvgGrade)

// expected result 3.3



/*
 === Create a shopping app ===
 1. App accepts an input of clothing: shirt, pants, sneakers,
 sandals - any other type would ask the user to add a
 proper value
 2. App accepts an input of color: white, black, yellow, green
 - any other color would ask the user to add a proper color
 3. App will ask the user to continue shopping or not 
 - if the user continues to shop, we can choose additional
 clothing and colors
 4. App will showcase the bought clothing with it's color
 in the list
*/

// let availableClothing = ['pants', 'shirt', 'sneakers', 'sandals'];
// for (let item of availableClothing) {
//     if (clothing === item) {
//     }
// }

function shopping() {
    let chosenTypeOfClothing;
    
    while(!chosenTypeOfClothing) {
        let clothing = prompt('What type of clothing do you want to buy?');

        switch (clothing) {
            case 'pants':
            case 'shirt':
            case 'sneakers':
            case 'sandals':
                chosenTypeOfClothing = clothing
                break;
            default:
                alert(`We don't have ${clothing}, please choose another clothing type.`)
        }
    }
    
}

shopping();