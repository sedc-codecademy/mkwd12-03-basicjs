/* Make a TODO app for yourself. 
You should have only one input and “Add” button.
After clicking on the Add button, display the
newly added task that you need to do in an unordered
list. Each new todo should be saved into an array.
Bonus: Add checkbox to each of the tasks in the 
unordered list, and after checking a task, it 
should cross trough the text! 
Try making the ToDo an object that needs to
have two properties: Name and isCompleted properties
*/

// Data
let todos = [];

// Selected elements
let input = document.querySelector("#input");
let btn = document.querySelector("#submit-btn");
let list = document.querySelector("#list");

// Functionality
function renderTodoList(todoList) {
  list.innerHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    //`<li>${todo.name}</li>`;
    let listItem = document.createElement("li");
    let input = document.createElement("input");

    //  <input type="checkbox" checked />
    input.type = "checkbox";
    input.checked = todo.isCompleted;

    input.addEventListener("change", function () {
      todos[i].isCompleted = !todos[i].isCompleted;
      renderTodoList(todos);
    });

    if (todo.isCompleted) {
      listItem.style.textDecoration = "line-through";
    }

    let todoText = document.createTextNode(todo.name);

    listItem.appendChild(input);
    listItem.appendChild(todoText);

    list.appendChild(listItem);
  }
}

// Events
btn.addEventListener("click", function (event) {
  event.preventDefault();

  let value = {
    name: input.value,
    isCompleted: false,
  };
  todos.push(value);
  renderTodoList(todos);

  input.value = "";
});
