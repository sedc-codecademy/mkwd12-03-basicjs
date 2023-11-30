//V A R I A B L E S


//Declaration 
var firstName;
//Declaration and initialisation
var age = 27;

console.log(firstName);  //undefined
console.log(age); //27

//STRINGS
var lastName = "Aleksandra";
console.log(typeof lastName);
console.log(lastName);


//NUMBERS
var birthYear = 1995;
console.log(typeof birthYear);
console.log(birthYear);

//escaping characters \
var introduction = 'I\'m Aleksandra';
var adress = "\"DameGruev\" br.1";


//ARITHMETIC OPERATIONS

var a = 5;
var b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);

//nova vrednost 
b = 3;
b++;
b--;
console.log(a + b);

var currentYear = 2023;
var birthYear = 1990;

var age = currentYear - birthYear;
console.log(2023 - 1990);

//MODULUS(ostatok pri delenje %)
console.log(a % b);

//COMPARISON
var c = 5;
var d = 2;

console.log(c > d);//true
console.log(c < d);//false
console.log(c <= d);//false
console.log(typeof (c <= d));// type of comparison is BOOLEAN

//EQUAL TO ==
console.log(c == d);
//NOT EQUAL TO !=
console.log(c != d);



//EXERCISE 1
// Write a JavaScript program to convert a length given in feet to meters.
// TIP: 1 feet = 0.3048 meters

var conversionRate = 0.3048;
var feets = 20;
var feetsToMeters = feets * conversionRate;

console.log(feetsToMeters);

//EXERCISE 2
// Write a JavaScript program that will read the two sides of a rectangle and calculate its area
// TIP: area = a * b

var sideA = 2;
var sideB = 10;
var area = sideA * sideB;

console.log(area);

//three triangles
var threeTriangles = 3 * area;
console.log(threeTriangles);

//EXERCISE 3
//Write a JavaScript program that will calculate the price of 30 Phones
// where the price of one phone is $119.95 and the tax rate is 5%.

var phonePrice = 119.95;
var taxRate = 0.05;
var phonePriceWithTax = phonePrice + (phonePrice * taxRate);
var numOfPhones = 30;

var total = numOfPhones * phonePriceWithTax;
console.log(total);
console.log("Total price of 30 phones is " + total);

//Write first name last name age and print the following message 
// I'm Aleksandra Mitkovska and i'm 28 years old

var firstName = "Aleksandra";
var lastName = "Mitkovska";
var age = 28;

console.log("I'm " + firstName + " " + lastName + " and I'm " + age + " years old ");
//BACKTICKS `` FOR ADDING VARIABLES IN STRINGS WITH ${}
console.log(`I'm ${firstName} ${lastName} and I'm ${age} years old`);

//What happens when adding number and string
var number1 = 7;
var number2 = "7";
console.log(number1 + number2);





