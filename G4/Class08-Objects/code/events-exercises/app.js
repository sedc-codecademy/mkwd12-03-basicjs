console.log("Script is working!");

/*
Exercise 2
On a button click, change a paragraph's text color, background color and font size.
*/
const changeStyleBtn = document.querySelector("#changeStyleBtn");
const styleParagraphEl = document.querySelector(".style-paragraph");

console.log(changeStyleBtn, styleParagraphEl);

changeStyleBtn.addEventListener("click", function () {
  console.log("The btn has been clicked");

  styleParagraphEl.style.color = "lightblue";
  styleParagraphEl.style.backgroundColor = "darkblue";
  styleParagraphEl.style.fontSize = "40px";
});

/*
Exercise 3
Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will add them to string
Finaly print the string in a new p element on the screen
*/
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submitBtn");

function createUserInfo(firstName, lastName, email, password) {
  return `First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Password: ${password}`;
}

submitBtn.addEventListener("click", function () {
  const resultString = createUserInfo(
    firstNameInput.value,
    lastNameInput.value,
    emailInput.value,
    passwordInput.value
  );
  document.querySelector(".result-paragraph").innerText = resultString;
});
