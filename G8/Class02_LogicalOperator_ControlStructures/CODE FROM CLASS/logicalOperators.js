// AND &&
//only way to show TRUE is if both operands are true
//every other result are FALSE

var a=true;
var b=false;
var c=true;

console.log(a && b);//false
console.log(a && c);//true
console.log(c && a);// true
console.log(b && b);//false


// OR ||
//only way to show FALSE is if both operands are FALSE
//every other result are TRUE

console.log(a || b);//true
console.log(b || b);//false

// NOT !
//changes the oposite value > meaning ex. NOT TRUE = FALSE

console.log(!a);//false
console.log(a);//true
console.log(!c);//false

var result = a || b;//true
console.log(!result);//false


//EXERCISE
var number1=100; //number 100
var number2=300;//string 100

//value
console.log(number1 == number2);
//type and value 
console.log(number1 === number2);

var number3=300;
console.log(number2===number3);

var boolean1= true;

console.log(boolean1 || (number1 === number3));//true
console.log(boolean1 && (number2 > number1));//true

console.log((number1>number3) || (number3===number1));
console.log(((number1>number3) || (number3===number1)) && boolean1);//false

console.log((boolean1 || (number3==number3)) || boolean1);//true
console.log((boolean1 || "") && (((number1>number3) || ((number3===number1) && boolean1))));
// true && (false || false)
//true && false
//false 

