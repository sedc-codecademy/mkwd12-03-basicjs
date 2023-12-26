console.log("working");

/*
Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :)
*/

// Selectors for inputs

// Functions for rendering recipes

// Event listeners for clicking on the save btn
const recipeNameInput = document.querySelector("#recipeName");
const ingCountInput = document.querySelector("#ingCount");
const ingredientControlsEl = document.querySelector(".ingredients-controls");
const saveBtn = document.querySelector("#saveBtn");
const addBtn = document.querySelector("#addBtn");
const recipeHeading = document.querySelector(".recipe-heading");
const ingredientList = document.querySelector(".ingredients-list");
const errorMsgEl = document.querySelector(".error-msg");

errorMsgEl.style.color = "red";

function generateDynamicInputs(number, container) {
  let inputHtml = "";

  for (let i = 0; i < number; i++) {
    inputHtml += `
    <div>
        <input type="text" class="ingredient-input"/>
    </div>
    `;
  }

  container.innerHTML = inputHtml;
}

function renderRecipeList(inputElements, listEl) {
  let liContentHTML = "";

  for (let inputEl of inputElements) {
    console.log(inputEl.value);
    liContentHTML += `<li>${inputEl.value}</li>`;
  }

  listEl.innerHTML = liContentHTML;
}

function validateDynamicInputs(inputElements, errorEl) {
  for (let inputEl of inputElements) {
    if (!inputEl.value) {
      errorEl.innerText = "Ingredient inputs must not be empty";
      inputEl.style.border = "2px solid red";
      return false;
    }
  }

  return true;
}

addBtn.addEventListener("click", function () {
  console.log("add btn clicked");
  // Read the value from the ingCount input
  const ingCountValue = Number(ingCountInput.value);

  if (Number.isNaN(ingCountValue) || ingCountValue <= 0) {
    errorMsgEl.innerText = "Invalid Number of Ingredients Input";
    return;
  }

  // Generate the number of inputs
  generateDynamicInputs(ingCountValue, ingredientControlsEl);
});

saveBtn.addEventListener("click", function () {
  // Read the recipeName input value
  const recipeNameValue = recipeNameInput.value;
  // Render name in heading element
  recipeHeading.innerText = recipeNameValue;

  // Read all the values from the dynamic inputs
  const dynamicInputs = document.querySelectorAll(".ingredient-input");

  if (!validateDynamicInputs(dynamicInputs, errorMsgEl)) return;

  renderRecipeList(dynamicInputs, ingredientList);

  // Render dynamic inputs values in list element
  console.log("save btn clicked");
});
