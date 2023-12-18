let myButton = document.getElementById("myButton");
let mySecondButton = document.getElementById("mySecondButton");
let myDiv = document.getElementById("myDiv");

function btnClick(){
    alert("You clicked the first button!");
}

function greeting(){
    alert("Happy New Year!");
}

function goodByGreeting(){
    alert("Goodbye");
}
function hiGreeting() {
    alert("Hi G5")
}

function mouseDown(){
    alert("Mouse Down");
}

myButton.onclick = btnClick; //onclick event
//myButton.onclick = greeting; //onclick event OVERWRITE

mySecondButton.onclick = greeting; //onclick event 

myDiv.onmouseover = goodByGreeting; //onmouseover event
myDiv.onmouseover = hiGreeting; //onmousemove event OVERWRITE

myDiv.onmousedown = mouseDown;
