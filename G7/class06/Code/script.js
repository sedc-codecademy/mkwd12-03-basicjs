console.log('I am connected!')

let paragraphs = document.querySelector('.paragraph');
paragraphs.style.backgroundColor = 'lightblue'

let header = document.getElementById('myHeader');
header.style.fontSize = "42px";

let input = document.querySelector('input')
input.value = "Hello World"


//Events
//1. Select the element (Button)
//2. Choose the event (click)
//3. Respond to event (write code)

//Three ways to bind events to an element
//1. HTML event handlers - uses attributes in HTML
//2. Traditional DOM event handlers
//3. DOM Level 2 event handlers

// -----------------HTML Event Handler -----------------

function alertMessage() {
    alert("This is a message!");
}

let messageText = document.getElementById("message");
function changeText() {
    messageText.innerText = "The text has been changed!"
}


//---------------- Traditional DOM event handlers--------------

//named function - we can use it in many places
// let button4 = document.getElementById("btn4");
// function alertMe() {
//     alert("Button clicked - event binding with traditional DOM!")
// }
// button4.onclick = alertMe;


//anonymous functions - one use only
document.getElementById('btn4').onclick = function() {
    alert('Button clicked - event binding with traditional DOM anonymus text!')
}


//---------------DOM Level 2 event handlers----------------------

let button5 = document.getElementById('btn5');
button5.addEventListener('click', function() {
    alert('Button clicked! - We learned about addEventListener!')
})



//Student exercise 2
//1. Add two buttons: "Show text", "Hide text"
//2. Add a h1 with some text 
//3. On click on "Show text" shoow the text
//4. On click on "Hide text" hide the text
//*hint: use display = "none" to hide the text

let redDivider = document.getElementById("redDiv");
let secondDivider = document.getElementById("secondDiv");
let paragraph = document.getElementById('someParagraph');
function setColorToDiv(event) {
    event.target.style.backgroundColor = "red";
}
// function setColorToDiv() {
//     redDivider.style.backgroundColor = "red";
// }

redDivider.addEventListener('mousemove', setColorToDiv); //event.target = redDivider
secondDivider.addEventListener('mousemove', setColorToDiv); //event.target = secondDivider
paragraph.addEventListener('click', setColorToDiv); //event/target = paragraph


//Removing events
//add click event on our target element (redDivider)
//on click on the target element, remove the mousemove event listener
//when the target element is clicked, also add green background 
redDivider.addEventListener('click', function(event) {
    event.target.style.backgroundColor = "green";
    redDivider.removeEventListener('mousemove', setColorToDiv)
})



// ---------------------Getting values from inputs --------------------------
let inputName = document.getElementById('nameField');
let buttonField = document.getElementById('btnField');
buttonField.addEventListener('click', function() {
    //get value from input
    console.log(`Somebody shared their name: ${inputName.value}`)
    inputName.value = "";
})



// -----------------------Exercise 3 ----------------------------
let inputs = document.getElementById('userForm').children;
let formBtn = document.getElementById('formButton');
let formMsg = document.getElementById('formMessage');

function getUserInfo(inputElements) {
    let result = "User: ";
    for (let input of inputElements) {
        if (input.value) {
            result += input.value + " ";
        }
    }
    return result;
}

formBtn.addEventListener('click', function() {
    formMsg.innerText = getUserInfo(inputs);
})
