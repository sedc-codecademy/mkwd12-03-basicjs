console.log("WORKING FOR G4");

/*
Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! Try making the TODO an object that needs to have two properties: text(string) and isCompleted(boolean) properties 
*/

// Selectors
const addTodoInput = document.querySelector("#addTodo");
const saveBtn = document.querySelector("#saveBtn");
const todoListEl = document.querySelector(".todo-list");

// Class
class Todo {
  constructor(text) {
    this.text = text;
    // Every todo starts unfinished, we don't pass this from the constructor
    this.isFinished = false;
  }
}

// Data
const todos = [];

// Funcitons

// This function will only draw or render the todos on screen
function renderTodos(todos) {
  todoListEl.innerHTML = "";

  let todosLiHtml = "";

  for (let todo of todos) {
    /*
    Here we dynamically add a class to the todo text span
    if todo.isFinished is true wit will return the right side which is the class finished
    I've defined that class in the css and it will be aplied when this gets added to the dom
    */
    todosLiHtml += `
    <li class="todo ${todo.isFinished && "finished"}">
       <span>${todo.text}</span>        
       <button class="finish-btn">✅</button>
    </li>
        `;
  }

  todoListEl.innerHTML = todosLiHtml;

  //   Calling the add listeners function to setup listeners on every todo
  addListenersToTodos(todoListEl);
}

// This function will add listneers to every todo in the list so that they can be finished
function addListenersToTodos(listEl) {
  const todoElements = listEl.querySelectorAll(".todo");

  //   Looping through all the todo li elements
  for (let i = 0; i < todoElements.length; i++) {
    // selecting the finish btn in each of them
    todoElements[i]
      .querySelector(".finish-btn")
      .addEventListener("click", function () {
        console.log(`Todo finish btn with index of ${i} clicked`);
        // Here we need to finish the todo in question and then render the todos again
        todos[i].isFinished = true;

        // Calling render to rerender the todos again because the todos array has been updated
        // We must do this to reflect the new data on the screen
        renderTodos(todos);
      });
  }
}

// !IMPORTANT
/*
Just spend time reading the code and try to follow how everything is execued, for example look at where a function is called
and then see what code is executed
Why calling functions withing functions here works is because event listeners are async so that means they will wait until we fire an event
When we fire an event the entire code is called and the todos are rerendered and to each of these new todos a new event listener is added
*/

// Add Event Listener
saveBtn.addEventListener("click", function () {
  const addTodoText = addTodoInput.value;

  //   Checking if the text in the input is valid
  if (addTodoText.length < 2) return;

  // Creating a new todo with the clas
  const newTodo = new Todo(addTodoText);

  // Adding the todo in the array
  todos.push(newTodo);

  // Resetting the input
  addTodoInput.value = "";

  // Rendering the updated list to the screen
  renderTodos(todos);
});
