let myInputElement = document.getElementById("myInput");
let myButton = document.getElementById("myButton");

function focusGreeting(){
    alert("Focus on input");
}

function blurGreeting(){
    alert("Input lost focus");
}

function buttonClicked(){
    alert("Button clicked");
}

function secondButtonClicked(){
    alert("Button clicked fkjdsfkj");
}

//myInputElement.addEventListener("focus", focusGreeting);
//myInputElement.addEventListener("blur", blurGreeting);

myInputElement.addEventListener("blur", function(event){
    console.log(event.target.value);
});

//we can bind as many named and anonymous functions to the same event of an element
myButton.addEventListener("click", buttonClicked);
myButton.addEventListener("click", secondButtonClicked);
myButton.addEventListener("click", function(){
    //console.log("Hello");
    alert("Hello from event listener");
});
myButton.addEventListener("click", function(event){
    //event.target == myButton == element which raised the event
    console.log(event);
    console.log(event.target.value);
});

//we remove the listener
myButton.removeEventListener("click", secondButtonClicked);


