console.log("it works");

const clickMeBtn = document.querySelector("#clickMeBtn");

console.log(clickMeBtn);

function sayHello() {
  console.log("Hello World");
}

function printWin() {
  console.log("You are the winner!");
}

// Passing a function reference as event listener function
clickMeBtn.onclick = sayHello;

clickMeBtn.onclick = printWin;

// Defining a function as a value directly ( anonymous function )
clickMeBtn.onclick = function () {
  console.log("I am not a named function but i still work");
};

const nameBtn = document.getElementById("nameBtn");
const nameInputEl = document.querySelector("#nameInput");
const errorMsgEl = document.querySelector(".error-msg");

errorMsgEl.style.color = "red";

function printFullName() {
  console.log(nameInputEl.value);
}

function validateNameLength(minLength) {
  if (minLength > nameInputEl.value.length) {
    errorMsgEl.innerText = `Minimum characters is ${minLength}`;
  } else {
    errorMsgEl.innerText = "";
  }
}

nameBtn.addEventListener("click", printFullName);
// nameBtn.addEventListener("mouseenter", sayHello);
// nameBtn.addEventListener("mouseleave", printWin);

nameInputEl.addEventListener("blur", function () {
  console.log("blur fired, not focused on input anymore");
  validateNameLength(10);
});

function generateBigString(
  firstNameValue,
  lastNameValue,
  emailValue,
  passwordValue
) {
  return `First Name: ${firstNameValue}, Last Name: ${lastNameValue}, Email: ${emailValue}, Password: ${passwordValue}`;
}
