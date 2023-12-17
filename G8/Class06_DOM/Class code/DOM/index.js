console.log(document);
document.write("Aleksandra");


//SELECTING ELEMENTS BY ID
let myHeader=document.getElementById("myTitle");
console.log(myHeader);
console.log(myHeader.innerText);

//SELECTING ELEMENTS BY CLASS
let paragraphs=document.getElementsByClassName("myParagraph");
console.log(paragraphs);
console.log(paragraphs[0]);
console.log(paragraphs[0].innerText);
console.log(paragraphs[paragraphs.length-1]);

//SELECTING ELEMENTS BY TAG NAME
let paragraphs2=document.getElementsByTagName("p");
console.log(paragraphs2);
let texts=document.getElementsByTagName("text");
console.log(texts);
console.log(texts[0].innerText);

//SELECTING ELEMENTS WITH QUERY SELECTOR
let paragraphs3=document.querySelectorAll("p");
console.log(paragraphs3);
let myTitle2=document.querySelector("#myTitle");
console.log(myTitle2);
console.log(myTitle2.innerText);
let div=document.querySelector(".myDiv");
console.log(div);

//FINDING SIBLING ELEMENTS
let paragraph4=document.getElementsByClassName("myParagraph")[0];
let sibling = paragraph4.nextElementSibling;
console.log(paragraph4);
console.log(sibling);
console.log(paragraph4.previousElementSibling);

//FINDING PARENTS ELEMENT
let paragraph5=document.getElementsByClassName("myParagraph")[0];
let parent=paragraph5.parentElement;
console.log(paragraph5);
console.log(parent);

//FINDING CHILDREN ELEMENTS
let div2=document.getElementById("main");
console.log(div2);
let children=div2.children;
console.log(children);
let firstChild=div2.firstElementChild;
let lastChild=div2.lastElementChild;
console.log(firstChild);
console.log(lastChild);

//GETTING TEXT 
let myDiv = document.getElementById("main");
let textSpaces = myDiv.textContent; // Get content with white spaces
let textNoSpaces = myDiv.innerText; // Get content without white spaces
console.log(textSpaces);
console.log(textNoSpaces);


//CHANGING TEXT IN ELEMENT
let header = document.getElementById("myTitle");
console.log(header.innerText);
header.innerText="";
console.log(header.innerText);
header.innerText="New Text";
console.log(header.innerText);
header.innerText+=" Addition";
console.log(header.innerText);

//ADING OR CHANGIN CODE 
let myDiv2=document.getElementById("main");
console.log(myDiv2);
 myDiv2.innerHTML+=`<p class="new"> This is from JS </p> `;
// console.log(myDiv2);
// myDiv2.innerHTML="";