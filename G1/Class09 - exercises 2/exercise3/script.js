// Data - single source of truth
let todoData = [];

// Selected Elements
let list = document.getElementById("todo-list");
let submitBtn = document.getElementById("submit");
let input = document.getElementById("todo-input");

// Functionality
function renderListItems(todos) {
  list.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;

    checkbox.addEventListener("change", function () {
      todoData[i].isCompleted = !todoData[i].isCompleted;
      renderListItems(todoData);
    });

    let todoText = document.createTextNode(todo.name);

    if (todo.isCompleted) {
      listItem.style.textDecoration = "line-through";
    }

    listItem.appendChild(checkbox);
    listItem.appendChild(todoText);

    list.appendChild(listItem);
  }
}

// Events
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

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
