let myButton = document.getElementById("myButton");
let mySecondButton = document.getElementById("mySecondButton");
let myDiv = document.getElementById("myDiv");

function btnClick(){
    alert("You clicked the button!");
}

function greeting(){
    alert("Happy New Year!");
}

function goodByeGreeting(){
    alert("Goodbye");
}

function hiGreeting(){
    alert("Hi");
}

myButton.onclick = btnClick;
mySecondButton.onclick = btnClick;

//.....

mySecondButton.onclick = greeting; //OVERWRITE

myDiv.onmouseover = greeting;
myDiv.onmouseover = goodByeGreeting;

myDiv.onmouseout = hiGreeting;