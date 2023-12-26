// ===== EXERCISES =====

// Story Teller

/*
Write a JavaScript function called storyTeller(), 
that will take as an input parameters the input fields 
values from the html!

ex: storyTeller(who, what, when);

In the function, retrieve the current values of the 
form input elements, make a story from them, and output 
that in the story div (like "Example: Lancelot was a 
really strong knight in the middle age!")
*/

// Inputs / Output

// Inputs:
// Who: Eminem
// What: sang a song called Mockingbird
// When: 10 years ago

// Result: Eminem sang a song called Mockingbird 10 years ago

// Task breakdown
/*
    1. Add three text inputs and a paragraph for the result
    2. Add a "Tell a story" button
    3. Select all inputs, paragraph and the button
    4. Create storyTeller function that accepts 3 parameters
        - Concatenate the 3 strings and return them as result
    5. Add event listener to the button
        - Execute storyTeller function
    6. Show result in paragraph
*/

// Selecting all elements
let whoInput = document.querySelector('#who')
let whatInput = document.querySelector('#what')
let whenInput = document.querySelector('#when')
let submitBtn = document.querySelector('#submit')
let paragraph = document.querySelector('#story')

// Functionality
function storyTeller(who, what, when) {
    return `${who} ${what} ${when}`
}

// Events
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let whoValue = whoInput.value;
    let whatValue = whatInput.value;
    let whenValue = whenInput.value;

    if (!whoValue || !whatValue || !whenValue) {
        paragraph.innerText = 'You are missing values in the inputs';
        return
    }

    let result = storyTeller(whoValue, whatValue, whenValue);

    paragraph.innerText = result;
})