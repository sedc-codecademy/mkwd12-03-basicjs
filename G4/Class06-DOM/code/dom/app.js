console.log("It is working");

// Get element by id
const mainHeadingEl = document.getElementById("mainTitle");

console.log(mainHeadingEl);

console.log(mainHeadingEl.textContent);

// Get elements by class name

// const paragraphs = document.getElementsByClassName("paragraph");

// console.log(paragraphs);

// for (let el of paragraphs) {
//   console.log("This is a paragraph", el);
// }

// const paragraphSecondEl = document.getElementsByClassName("second")[0];

// console.log(paragraphSecondEl.textContent);

// Get elements by tag name

// const paragraphsTag = document.getElementsByTagName("p");

// console.log(paragraphsTag);

// const textEl = document.getElementsByTagName("text")[0];

// console.log(textEl);

// Query selector

const secondParagraphEl = document.querySelector(".second");

console.log(secondParagraphEl);

const paragraphs = document.querySelectorAll(".paragraph");

console.log(paragraphs);

const firstDivEl = document.querySelector("div");

console.log(firstDivEl);

const allContainerEl = document.querySelectorAll(".container");

console.log(allContainerEl);

// Siblings

console.log("First div next sibling", firstDivEl.nextElementSibling);

// Parent

console.log("Second paragraph parent", secondParagraphEl.parentElement);

// Children

console.log(firstDivEl.children);

// Changing text of an html element through javascript

console.log("Text in main heading");
console.log(mainHeadingEl.textContent);
console.log(mainHeadingEl.innerText);

mainHeadingEl.innerText = "This is now updated";
mainHeadingEl.innerText += ", and i've added this too!";
mainHeadingEl.innerText += 1234;

// Changing the inner html of an element

firstDivEl.innerHTML = "<h1>I have been added through javascript</h1>";

firstDivEl.innerHTML += `
        <p>This was added from javascript</p>
        <ul class="main-list">
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
        </ul>
`;

// Exercise 1 solution

const firstDivEl = document.querySelector("div");

const allParagraphs = document.querySelectorAll("p");

const lastDivEl = document.querySelector("section").lastElementChild;

const allDivs = document.querySelectorAll("div");

const lastDivElAlt = allDivs[allDivs.length - 1];

const lastDivH3El = lastDivEl.querySelector("h3"); //lastDivEl.lastElementChild
const lastDivH1El = lastDivEl.querySelector("h1"); //lastDiv.firstElementChild

const secondParagraphText = document.querySelector(".second").innerText;

const textEl = document.querySelector("text");

textEl.innerText += "TEXT";

lastDivH1El.innerText = "CHANGED BY TRAINER";
lastDivH3El.innerText = "CHANGED BY TRAINER";
