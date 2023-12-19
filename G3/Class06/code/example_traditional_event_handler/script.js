let myButton = document.getElementById('myButton');
let MySecondButton = document.getElementById('mySecondButton');
let myDiv = document.getElementById("myDiv");

function btnClick() {
    alert('you clickced the button!')
}

function greeting() {
    alert('happy new year!');
}

function goodBye() {
    alert('goodbye');
}

function hiGreeting() {
    alert("hi!")
}


myButton.onclick = btnClick;
MySecondButton.onclick = btnClick;

//....................

MySecondButton.onclick = greeting;

myDiv.onmouseover = greeting;
