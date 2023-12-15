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

// The main function that executes the whole logic
function shopping() {
    let chosenTypeOfClothing; // info of selected value for type of clothing - gets populated ONLY if the value is proper (shirt, pants...)
    let chosenTypeOfColor;
    
    // Execute the code UNTIL the user HASN'T selected proper type of clothing
    while(!chosenTypeOfClothing) {
        // clothing will store the answer for the question for clothing type
        let clothing = prompt('What type of clothing do you want to buy?');

        // Decide if imputed clothing is available or not
        switch (clothing) {
            // There are two possible cases:
            // 1. imputed clothing is one of the following values
            case 'pants':
            case 'shirt':
            case 'sneakers':
            case 'sandals':
                // if it's one of the following values, set it as value to
                // chosenTypeOfClothing which will also stop the while iteration
                chosenTypeOfClothing = clothing
                break; // STOP execution
            default:
                // Provide info that clothing is not available
                alert(`We don't have ${clothing}, please choose another clothing type.`)
        }       
    }

    while(!chosenTypeOfColor) {
        // clothing will store the answer for the question for clothing type
        let color = prompt(`What type of color do you want the ${chosenTypeOfClothing} to be in?`);

        // Decide if imputed clothing is available or not
        switch (color) {
            // There are two possible cases:
            // 1. imputed clothing is one of the following values
            case 'white':
            case 'black':
            case 'yellow':
            case 'green':
                // if it's one of the following values, set it as value to
                // chosenTypeOfClothing which will also stop the while iteration
                chosenTypeOfColor = color
                break; // STOP execution
            default:
                // Provide info that clothing is not available
                alert(`We don't have ${color}, please choose another color.`)
        }       
    }
    
    
}

shopping();

// Using combination of if and for-of instead of switch
/*
    while(!chosenTypeOfClothing) {
        let clothing = prompt('What type of clothing do you want to buy?');
        let availableClothing = ['pants', 'shirt', 'sneakers', 'sandals'];
        for (let item of availableClothing) {
            if (clothing === item) {
                chosenTypeOfClothing = clothing
                break;
            }
        }
        if (!chosenTypeOfClothing) {
            alert(`We don't have ${clothing}, please choose another clothing type.`)
        }        
    }
*/