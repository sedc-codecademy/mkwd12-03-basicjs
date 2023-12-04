// var text = 'SEDC 2023';
// var secondText = " Welcome!";
// var combined = text + secondText; // Concatination of two strings will give us a combined value of both texts 
// console.log(combined);

// var number = 123;
// var text = 'SEDC';
// var combined = number + text; // Concatination
// console.log(typeof combined); // string because it combines both values into a string
// console.log(combined);

// var text = 'SEDC';
// var combined = text + ' ' + '2023'; // we can combine regular strings without defining variables
// console.log(combined);

// var incorrectString = 'It's really nice to be a programmer'; // incorrect way comment this out
// var correctString = 'It\'s really nice to be a programmer'; // correct way
// the \ character is an escape character that will tell the compiler to ignore the next character in line

// console.log(NaN);
// console.log(typeof NaN);
// console.log(isNaN('123'));
// console.log(isNaN('asf123'));
// console.log(isNaN(123));
// console.log(NaN == NaN);
// console.log('123' === 123);

// // var a = 2 / 'foo';
// var a = 2 / '2';
// console.log(a);

// var a = 1 / 0;    // Infinity 
// var b = Infinity; // Infinity
// var c = -1 / 0;    // -Infinity
// var d = -Infinity; // -Infinity

// var score = 90;
// var pass = 50;
// var hasPassed = score >= pass;
// console.log(hasPassed);

// var firstScore = 50;
// var secondScore = 20;

// var highScore = 60;
// var secondHighScore = 30;

// var result = (firstScore + secondScore) > (highScore + secondHighScore); // we can combine operands with brackets to get a single operand(expression)
// //                    OPERAND     LOGICAL OPERATOR       OPERAND
// console.log(result);


// a1 = true  && true       // t && t returns true
// a2 = true  && false      // t && f returns false
// a3 = false && true       // f && t returns false
// a4 = false && (3 == 4)   // f && f returns false
// a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
// a6 = false && 'Cat'      // f && t returns false
// a7 = 'Cat' && false      // t && f returns false
// a8 = ''    && false      // f && f returns ""
// a9 = false && ''         // f && f returns false
                    

// o1 = true  || true       // t || t returns true
// o2 = false || true       // f || t returns true
// o3 = true  || false      // t || f returns true
// o4 = false || (3 == 4)   // f || f returns false
// o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
// o6 = false || 'Cat'      // f || t returns "Cat"
// o7 = 'Cat' || false      // t || f returns "Cat"
// o8 = ''    || false      // f || f returns false
// o9 = false || ''         // f || f returns ""
                    

// console.log(o5);

// var a = 45;
// var b = '50';
// console.log(a > b);
// console.log(a < b);

// var score = 101; // Comment out to win
var score = 104; // Comment out to loose
if(score > 100) {
    alert('You won!');
}
else if(score > 90) {
    alert('You almost won!');
}
else {
    alert('You lost!');
}
//alert('You lost!');

var fridayCash = prompt();