let score = 75;

if(score > 100){
    //Code Block
    console.log("Score is greater than 100!!! You won!!!");
}


let points = 70;

if(points > 50){
    console.log("The student passed the exam");
    console.log(`The score is ${points}`);
}else{
    console.log("The student failed the exam!!!");
    console.log(`The score is ${points}`);
}

if(points > 50){
    console.log("The student passed the exam");
    console.log(`The score is ${points}`);
}else if(points === 50){
    console.log("The student passed the exam!!!");
    console.log(`The score is ${points}`);
}else{
    console.log("The student failed the exam!!!");
    console.log(`The score is ${points}`);
}


console.log("===== GRADE =====");

let score2 = prompt("Entre a score");
let scorePoints = parseInt(score2);
8
if(scorePoints >= 91){
    console.log("Grade A");
    console.log(`The scorePoints is ${scorePoints}`);
} else if(scorePoints >= 81 && scorePoints <= 90){
    console.log("Grade B");
    console.log(`The scorePoints is ${scorePoints}`);
} else if(scorePoints >= 71 && scorePoints <= 80){
    console.log("Grade C");
    console.log(`The scorePoints is ${scorePoints}`);
} else if(scorePoints >= 61 && scorePoints <= 70){
    console.log("Grade D");
    console.log(`The scorePoints is ${scorePoints}`);
}else{
    console.log("You failed");
    console.log(`The scorePoints is ${scorePoints}`);
}


