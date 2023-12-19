// console.log(document); // Gives the the entire html of the webpage.

// let myHeader = document.getElementById('myTitle'); // We get the element in our html file with the attribute id="myTitle"
// console.log(myHeader);
// console.log(myHeader.innerText); // Gives the text for this element 
// console.log(myHeader.classList); // Gives an array of classes for this element

// // Selecting by class name
// let myDivs = document.getElementsByClassName('myDiv');// this will return an array of elements with that class name
// console.log(myDivs[0]); // index the array myDivs with 0 so we can get the first element in the array of elements

// let myParagraphs = document.getElementsByClassName('myParagraph');
// let secondP = document.getElementsByClassName('second');
// console.log(myParagraphs);
// console.log(secondP);

//Selecting by tag name
// let paragraphs = document.getElementsByTagName('p');
// let firstParagraph = paragraphs[0]; // we get the first paragraph
// console.log(paragraphs);
// console.log(firstParagraph);
// console.log(firstParagraph.innerText); // we log the text inside the element


// Traversing through the DOM(siblings,parents,children)
// let myHeader = document.getElementById('myTitle'); // We get the element in our html file with the attribute id="myTitle"
// console.log(myHeader);
// let firstParagraph = myHeader.nextElementSibling; // always use this one.
// console.log(firstParagraph);
// console.log(firstParagraph.previousElementSibling); // this will return the previous element that is on the same level as this one.
// // document.nextSibling; // gives anything that is after the element doesn't need to be an html element
// // document.nextElementSibling; // gives an element only that is after this element.
// console.log(myHeader.parentElement); // this will return the parent element above this one.
// let parentElement = myHeader.parentElement;
// console.log(parentElement.children);

// Changing a text in a element

let firstHeader = document.getElementById('myTitle');
firstHeader.innerText = 'We changed the text!';
firstHeader.innerText += ' We added some more!'; // firstHeader.innerText = firstHeader.innerText + 'We added some more';
console.log(firstHeader.innerHTML);
let myDiv = document.getElementById('main');
console.log(myDiv.innerHTML); // This will return the html structure of the element in text format.
myDiv.innerHTML += '<p align="center">This is my paragraph</p>'; // We are changing the html(content) of the element to have a paragraph.
