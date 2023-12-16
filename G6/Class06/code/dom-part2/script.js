console.log('Connected');


console.log("**** ID SELECTOR ****");
// ID SELECTOR => Returns us 1 elements
let container = document.getElementById("container");
console.log(container)


console.log("**** CLASS SELECTOR ****");
// CLASS SELECTOR => Returns us collection/array of elements that match the class =)
let desriptions = document.getElementsByClassName("description");
console.log(desriptions);

// We select the first element of the desriptions variable which is  collection/array of elements  
let firstDescription = desriptions[0];
firstDescription.innerText += " Some new text!!";

console.log("**** TAG SELECTOR ****");
// TAG SELETOR => Returns us collection/array of elements that match the html tag =)
let myDivs = document.getElementsByTagName("div");
console.log(myDivs);

let secondDiv = myDivs[1];
console.log(secondDiv);

secondDiv.innerHTML += "<p>Today is raining.</p>";

console.log("**** QUERY SELECTOR ****");

// QUERY SELECTOR ALL;
// WE USE THE CSS SELECTORS SYNTAX !
// It will return us all elements matching the tag p
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

// Query selector using ID as value
console.log("**** QUERY SELECTOR USING ID ****");
let footerDescription = document.querySelector("#footerDescription");
console.log(footerDescription)

console.log("**** QUERY SELECTOR USING CLASS ****");
// Using querySelector with css class syntax will return us the first element matching the class =)
let myParagraphs = document.querySelector(".description");
console.log(myParagraphs)

console.log("**** SELECTING SIBLINGS ****");
let productsSection = document.getElementById("productsSection");
console.log(productsSection)

console.log("--- children ---")
let childrenElements = productsSection.children;
console.log(childrenElements)

let lastElementUsingLength = childrenElements[childrenElements.length - 1];
console.log(lastElementUsingLength)

console.log("--- firstElementChild ---")
// firstElementChild will return us the first child of that element
let firstChild = productsSection.firstElementChild;
console.log(firstChild);

console.log("--- nextElementSibling ---")
// nextElementSibling will return us the next element sibling element
let siblingOfFirstChild = firstChild.nextElementSibling;
console.log(siblingOfFirstChild);

console.log("--- lastElementChild ---")
// lastElementChild will return us the last child of that element
let lastChild = productsSection.lastElementChild;
console.log(lastChild);
// element.innerText will select the text node of the element
// we can also append or overwrite that value
let lastChildText = lastChild.innerText;
console.log(lastChildText)
lastChild.innerText += " Hey new text added"
console.log("--- parentElement ---")
// parentElement will return us the parent element
let parentElement = lastChild.parentElement;
console.log(parentElement)