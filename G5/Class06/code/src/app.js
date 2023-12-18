console.log("====== Access by id =====");
let myHeader = document.getElementById("myTitle");
console.log(myHeader);
console.log(myHeader.innerText);
console.log(`Our header text: ${myHeader.innerText}`);
myHeader.innerText = "This is new text!!!!";


console.log("====== Access by class =====");
let ourParagraphs = document.getElementsByClassName("myParagraph");

console.log(ourParagraphs);
console.log(`ourParagraphs length: ${ourParagraphs.length}`);
console.log(`First element: ${ourParagraphs[0].innerText}`);
console.log(`Second element: ${ourParagraphs[1].innerText}`);
ourParagraphs[1].innerText = "Change paragraph text!!!";

console.log("====== Access by tag name =====");
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(`paragraphs length: ${paragraphs.length}`);
console.log(`Text element: ${paragraphs[2].innerText}`);


console.log("====== Access by query =====");
let firstDivWithClass = document.querySelector(".myDiv");
console.log(firstDivWithClass);

let allDivs = document.querySelectorAll(".myDiv");
console.log(`AllDivs length: ${allDivs.length}`);
console.log(allDivs[1]);

console.log("====== Access by sibling =====");
let header = document.getElementsByTagName("h1")[0];
let nextSibling = header.nextElementSibling;
console.log(nextSibling);
console.log(nextSibling.innerText);

// let nextSiblingTest = nextSibling.nextElementSibling;
// console.log(nextSiblingTest);

let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);

console.log("====== Access by child =====");
// let children = document.getElementById("main").children;
// console.log(children);
let div = document.getElementById("main");
let children = div.children; 
console.log(children);
console.log(`Second child: ${children[1].innerText}`);
let firstChild = div.firstElementChild;
console.log(firstChild);
let lastChild = div.lastElementChild;
console.log(lastChild);


console.log("==== GETTING TEXT =====");
let main = document.getElementById("main");
let textWithSpace = main.textContent;
let textWithOutSpace = main.innerText;

console.log(textWithSpace);
console.log(textWithOutSpace);


console.log("==== CHANGING TEXT =====");
let header2 = document.getElementById("header2");
console.log(header2.innerText);
header2.innerText = "";
header2.innerText = "New Text!";
header2.innerText += " Ultra new text!";

console.log("==== ADD NEW HTML =====");
let myDiv = document.getElementById("main");
console.log(myDiv);
//Add new element in div
myDiv.innerHTML += `<p class="newParagraphs">Paragraph generated from Javascript</p>`
myDiv.innerHTML += "<h3>New header generated from JS</h3>"
//myDiv.innerHTML = "";

let myStudent = document.getElementById("myStudent");
let students = ["Bob", "Aleksandar", "Ivan", "Marija", "Kiril", "Tamara", "Karen", "Nina"];
let sedc = ["G1", "G2","G5"];

function createListItem(studentsArray, element){
    //element.innerHTML = "" //clearing element

    let orderList = "";
    for(let student of studentsArray){
        orderList += `<li>${student}</li>`
    }
    element.innerHTML += `<ol>${orderList}</ol>`
}

createListItem(students, myStudent);
createListItem(sedc, myStudent);


console.log("==== ADD CSS =====");
let addCss = document.getElementsByClassName("second");
addCss[0].style.backgroundColor = "green";
addCss[0].style.color = "red";
//addCss[0].style.display = "none";