// Select element by ID - Returns only ONE element
let importantSection = document.getElementById('important-section');
// console.log(importantSection)

let niceButton = document.getElementById('nice-button');
// console.log(niceButton)

// Select elements by class - Returns an array of elements
let footerInfoItems = document.getElementsByClassName('footer-info');
// console.log(footerInfoItems)
// console.log(footerInfoItems[0])

// Select elements by tag name - Returns an array of elements
let paragraphs = document.getElementsByTagName('p')
// console.log(paragraphs)
// console.log(paragraphs[paragraphs.length - 1])

// Query a single element
let impSection = document.querySelector('#important-section')
// console.log(impSection);

// querying the first element by class 
let footerInfoItem = document.querySelector('.footer-info')
// console.log(footerInfoItem);

// querying the first element by tag name
let paragraph1 = document.querySelector('p');
// console.log(paragraph1)

// Query array of elements
let impSections = document.querySelectorAll('#important-section')
// console.log(impSections)

let footerInfoItems2 = document.querySelectorAll('.footer-info');
// console.log(footerInfoItems2)

let paragraphs2 = document.querySelectorAll('p')
// console.log(paragraphs2)

// Getting the text content
let sportParagraph = document.querySelector('#sport');
// console.log(sportParagraph)

// console.log('Inside text: ', sportParagraph.innerText)

// Getting the HTML content
let mains = document.getElementsByTagName('main');
let theOneAndOnlyMain = mains[0]
// console.log('Inside HTML:', theOneAndOnlyMain.innerHTML)

// Getting the element siblings
let headerItems = document.getElementsByTagName('li');
let aboutUs = headerItems[1];

// console.log('the second list item', aboutUs)
let previousItem = aboutUs.previousSibling;
// console.log('Home:', previousItem)

let nextItem = aboutUs.nextSibling;
// console.log('Contact us:', nextItem);

// Get elements children
let list = document.querySelector('ul');
let listChildren = list.children;

// console.log(listChildren)

// Get number of li items
let listItems = document.getElementsByTagName('li');
let numberOfListItems = listItems.length;
// console.log("Number of items", numberOfListItems)

// Add text to element
let newParagraph = document.getElementById('new');
// console.log('new element', newParagraph)

newParagraph.innerText = `Text from JavaScript`;

// Add HTML to element
let newSection = document.getElementById('new-section');
// console.log(newSection.innerHTML)

// newSection.innerHTML = newSection.innerHTML + `<p>Completely new paragraph</p>`
newSection.innerHTML += `<p>Completely new paragraph</p>`

// Changing CSS Style
let header = document.querySelector('header');

header.style.backgroundColor = 'green';
header.style.color = 'white';
header.style.border = '1px solid black';

// Changing any HTML attribute
let button = document.querySelector('#subscribe');

button.disabled = true;

// Insert elements from arrays to HTML

let colors = ['green', 'red', 'blue'];

let colorsList = document.querySelector('#colors');

for (let color of colors) {
    colorsList.innerHTML += `<li>${color}</li>`;
}
