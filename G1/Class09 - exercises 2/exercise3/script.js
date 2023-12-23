// Data
let todoData = [
    {
        name: 'Wash car',
        isCompleted: true
    },
    {
        name: 'Buy car',
        isCompleted: false
    }
]

// Selected Elements
let list = document.getElementById('todo-list')
let submitBtn = document.getElementById('submit')
let input = document.getElementById('todo-input')

// Functionality
function renderListItems(todos) {
    list.innerHTML = ''

    for (let todo of todos) {
        list.innerHTML += `<li id="${todo.name}">
        <input type="checkbox" />
        ${todo.name}
        </li>`

        if (todo.isCompleted) {
            let listItem = document.getElementById(todo.name)

            listItem.style.textDecoration = 'line-through'
        }
    }
}

renderListItems(todoData)

// Events
submitBtn.addEventListener('click', function (event) {
    event.preventDefault()

    // Take the inputs value
    let todo = {
        name: input.value,
        isCompleted: false
    }

    // Add the new value to the todo list
    todoData.push(todo)
    // Render all items to the HTML list
    renderListItems(todoData)
    // Clear the input value
    input.value = '';
})