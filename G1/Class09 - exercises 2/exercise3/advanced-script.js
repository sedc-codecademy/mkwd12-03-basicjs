// Data
let todoData = [];

// Selected Elements
let list = document.getElementById("todo-list");
let submitBtn = document.getElementById("submit");
let input = document.getElementById("todo-input");

// Functionality
function renderListItems(todos) {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = todos[i].isCompleted;

    checkbox.addEventListener("change", function () {
      toggleTodoCompetition(i);
    });

    let todoText = document.createTextNode(todos[i].name);

    if (todos[i].isCompleted) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(todoText);

    list.appendChild(listItem);
  }
}

function toggleTodoCompetition(index) {
  todoData[index].isCompleted = !todoData[index].isCompleted;
  renderListItems(todoData);
}

// Events
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (!input.value) {
    alert("You must have To D value!");
    return;
  }

  // Take the inputs value
  let todo = {
    name: input.value,
    isCompleted: false,
  };

  // Add the new value to the todo list
  todoData.push(todo);
  // Render all items to the HTML list
  renderListItems(todoData);
  // Clear the input value
  input.value = "";
});
