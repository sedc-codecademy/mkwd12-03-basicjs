let pass = 50;	//pass mark
let score = 90; //score
let hasPassed = score >= pass;
let hasPassedNegated = !(score >= pass); // Negateon of the expression inside the parenthesis

console.log(hasPassed);
console.log(hasPassedNegated);

console.log('Logical AND'); 
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log('Logical OR'); 
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log('Comparison'); 
console.log(!true); // false
console.log(!false); // true

let comparison1 = 5 < 10;
let comparison2 = 10 != '10';
let comparison3 = 10 !== '10';
console.log(comparison1); // true
console.log(comparison2); // false
console.log(comparison3); // true
console.log(comparison1 && comparison2); // false
console.log(!(comparison2 || comparison3)); // false

// Truthy/Falsy values
console.log('Truthy/Falsy values');
console.log(false && (5==6)); 
console.log('cat' && 50);
console.log('cat' && 0);
console.log(0 && 'cat');

console.log(false || (5==6));
console.log('cat' || 50);
console.log('cat' || 0);
console.log(0 || 'cat');
