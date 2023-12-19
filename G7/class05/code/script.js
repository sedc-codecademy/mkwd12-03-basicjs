// Selectors

// id selector - it returns one element
let myHeader = document.getElementById("myTitle");
console.log(myHeader);

// myHeader.innerText = "This is my new title";

// class selector = returns an array of elements
let paragraphs = document.getElementsByClassName("myParagraph");
console.log(paragraphs);

let paragraphOneElement = document.getElementsByClassName("second");
console.log(paragraphOneElement);
console.log(paragraphOneElement[0]);

// tag selector - returns an array of elements
let tagParagraphs = document.getElementsByTagName("p");
console.log(tagParagraphs);


// query selector - you need to use the full selector syntax, just as in css, . for class, # for id
let firstDiv = document.querySelector(".myDiv");
console.log(firstDiv);

let myHeaderQuery = document.querySelector("#myHeader");
console.log(myHeader);

let allParagraphsQuery = document.querySelectorAll("p");
console.log(allParagraphsQuery);

// Traversing the DOM three

let child = document.querySelector(".child");
console.log(child);

let nextSibling = child.nextElementSibling;
console.log(nextSibling);

let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);

// parent selector

let parentElement = child.parentElement;
console.log(parentElement);

console.log(parentElement.querySelector(":nth-child(2)"));
console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);
console.log(parentElement.children);

// changin elements

console.log(myHeader);
console.log(myHeader.textContent);
console.log(myHeader.innerText);

myHeader.innerText = "";
myHeader.innerText = "I am the        new header of       the page";
myHeader.innerText += " Hello G7";

console.log(myHeader.textContent);

let pets = ["Dog", "Cat", "Fish", "Rabit", "Snake"];

let list = document.getElementById("list");

for(let pet of pets) {
    list.innerHTML += `<li>${pet}</li>`
}

list.style.color = "red";
list.style.backgroundColor = "green";
// list.style.display = "none";


// function exercise 

function multuplyTwoNumbers(num1, num2) {
    let result = num1 * num2
    return result;
}

let calcResult = multuplyTwoNumbers(3, 5);
let calcResult2 = multuplyTwoNumbers(5, 5);

let resultParagraph = document.getElementById("result");
resultParagraph.innerText = `The result of our calculation is ${calcResult}`;

let resultParagraph2 = document.getElementById("result2");
resultParagraph2.innerText = `The result of the calculation with diffrent parametars is ${calcResult2}`;

function sayHi(name) {
    alert(`Hello back ${name}, on this page you can do.....`);
}

let namePromt = prompt("Enter your name:");
let namePromt2 = prompt("Enter your name:");

sayHi(namePromt);

// 100 lines later
sayHi(namePromt2);


