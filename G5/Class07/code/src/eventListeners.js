let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let myDiv = document.getElementById("myDiv");

function focusGreeting() {
  //alert("Focus on input!");
  console.log("Focus on input!");
}

function blurGreeting() {
  //alert("Input lost focus!");
  console.log("Input lost focus!");
}

function clickBtn() {
  alert(`Clicked button!`);
}

function secondClickButton() {
  alert("Second click btn");
}

myInput.addEventListener("focus", focusGreeting);
//myInput.addEventListener("blur", blurGreeting);

myInput.addEventListener("blur", function (event) {
  console.log(event.target.value);
  myDiv.innerHTML += `<p>Target value: ${event.target.value}</p>`;
});

myButton.addEventListener("click", clickBtn);
myButton.addEventListener("click", secondClickButton);

myButton.addEventListener("click", function (event) {
  console.log(event.target.value);
});

myButton.removeEventListener("click", secondClickButton);

//Getting Values from Inputs

myButton.addEventListener("click", function () {
  // gets the value
  console.log(`Somebody entered the name: ${myInput.value}`);
  
  myDiv.innerHTML += `<p>Somebody entered the name: ${myInput.value}</p>`;
  // changes the value to empty string
  //  input.value = "";
});
