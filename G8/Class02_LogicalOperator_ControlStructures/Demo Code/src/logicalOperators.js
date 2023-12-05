//AND
console.log("AND");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR
console.log('OR');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//Negation
console.log(!true); // false
console.log(!false); // true


//COMPARISON
console.log("Comparison");
var comp1 = 4 < 7;
var comp2 = 5 != 8;
var a = 5;
var b = 9;
var comp3 = a > b;
console.log(comp2);

var expression = comp1 && comp2 && comp3; // true && true && false -> false
console.log(`expression: ${expression}`);

var expression2 = comp1 || comp2 || comp3; // true || true || false -> true
console.log(`expression: ${expression2}`);

var complexExpression = ( (5 < 2) && (2 >= 3) ); // false && false
console.log(complexExpression);

//TRUTHY/FALSY values
console.log("TRUTHY/FALSY values");
console.log(true  && true);
console.log(false && (3 == 4));
console.log('Cat' && 'Dog');
console.log("false" && ""); //""
console.log('' || ""); //empty string 

console.log(!""); //true
var d = true;
console.log(!!d); //1. !d -> false 2. !false -> true

var firstNum = 12;
var secondNum = "4";
console.log(secondNum < firstNum); //true

console.log("4" < "12");
console.log("5" < "Text");

console.log(5 == "5"); 
console.log(5 === "5"); 