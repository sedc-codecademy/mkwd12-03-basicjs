let myInputElement = document.getElementById("myInput");
let myButton = document.getElementById("myButton");

function focusGreeting() {
    alert("focus on input");
}

function blurGreeting() {
    alert("input lost focus");
}

function buttonClicked() {
    alert("button clicked");
}

function secondbuttonclicked() {
    alert("Button clicked, but from the second function!");
}

// myInputElement.addEventListener("focus", focusGreeting);
myInputElement.addEventListener("blur", blurGreeting);


// //bellow is named function
myButton.addEventListener("click", buttonClicked);
myButton.addEventListener("click", secondbuttonclicked);
//Bellow is annonymus function
myButton.addEventListener("click", function() {
    alert("Hello from our event listener in the annonymus function!")
})

// myButton.addEventListener("click", function() {
//     buttonClicked();
//     secondbuttonclicked();
//     alert("Hello again after the 2 functions!");
// });


myButton.addEventListener("click", function(event) {
    console.log(event);
    console.log(event.target);
    //bellow is getting the value!!!
    console.log(event.target.value);

})

myButton.removeEventListener("click", secondbuttonclicked);


