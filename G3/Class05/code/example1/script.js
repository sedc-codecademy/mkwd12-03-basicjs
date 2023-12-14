console.log("test!");

let ourHeader = document.getElementById("myTitle");
console.log(`Our header's text: ${ourHeader.innerHTML}`);
console.log(`${ourHeader}`);
console.log(ourHeader);
ourHeader.style.border = "1px solid black";
ourHeader.style.backgroundColor = 'red';
ourHeader.innerText += " This is text from JS";

console.log(`======Access by class===========`);
let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(ourParagraphs);
console.log(`ourParagraphs length: ${ourParagraphs.length}`);
console.log(`ourParagraphs first element: ${ourParagraphs[0].innerText}`)

console.log(`=========access by tag========`);
let paragraphs = document.getElementsByTagName("p");
console.log(`paragraphs length: ${paragraphs.length}`);

console.log(`==========Access by css selectors===========`);
let firstDivWithClass = document.querySelector(".myDiv");
console.log(firstDivWithClass);
let ourDivs = document.querySelectorAll(".myDiv");
console.log(`ourDivs lenght: ${ourDivs.length}`);
console.log(ourDivs[1]);
console.log(ourDivs[0]);
console.log(ourDivs);

console.log(`=====Siblings=====`);
let header = document.getElementsByTagName("h1")[0];
console.log(header);
let nextSibling = header.nextElementSibling;
console.log(nextSibling);

console.log(`=======Children=====`);
let children = document.getElementById("main").children;
console.log(children);


