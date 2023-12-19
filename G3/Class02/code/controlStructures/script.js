let score = 70;
// let score = 110;
if (score < 100) {
    console.log('You lost the game!');
}

// let points = 55;
let points = 85;
if (points > 60) {
    console.log('You passed the exam!');
} 
else {
    console.log('You failed the exam!');
}


// else-else-if-else
let scoredPoints1 = 91;
if (scoredPoints1 <= 60) {
    console.log('You failed!');
}
else if (scoredPoints1 <= 70) {
    console.log('Your grade is D');
}
else if (scoredPoints1 < 80) {
    console.log('Your grade is C');
}
else if (scoredPoints1 <= 90) {
    console.log('Your grade is B');
}
else {
    console.log('Your grade is A');
}


// else-else-if-else
console.log("Grades - if-else")
let scoredPoints = 43;
if(scoredPoints >= 91) {
    console.log("Grade A");
}
else if(scoredPoints >= 81 && scoredPoints <= 90) {
    console.log('Grade B');
}
else if(scoredPoints >= 71 && scoredPoints <= 80) {
    console.log('Grade C');
}
else if(scoredPoints >= 61 && scoredPoints <= 70) {
    console.log('Grade D');
}
else{
    console.log("you failed!");
}


// getting input from the user
let userNumber = prompt('Enter your score');
console.log(userNumber);
console.log(typeof userNumber);

const parsedUserInput = parseInt(userNumber);
console.log(parsedUserInput);
console.log(typeof parsedUserInput);

