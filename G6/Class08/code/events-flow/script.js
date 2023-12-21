let parentDiv = document.getElementById("parentDiv");
let childDiv = document.getElementById('childDiv');

// **** EVENT BUBBLING ****

// in the anonymous function(event) the argument "event"
// is the actual event that happened
// childDiv.addEventListener("click", function(event){
//     event.stopPropagation() // it won't propagate the event
//     console.log(event)   // the event that happened, we can consume it
//     alert("Child div was clicked")
// }, false); // false is the default value for the 3rd argument

// parentDiv.addEventListener("click", function(event){
//     alert('Parent div was clicked')
// }); // false is the default value for the 3rd argument

// **** EVENT CAPTURING *****

childDiv.addEventListener("click", function (event) {
    console.log(event)   // the event that happened, we can consume it
    alert("Child div was clicked")
}, true); // with value of true, we do event capturing

parentDiv.addEventListener("click", function (event) {
    event.stopPropagation()
    alert('Parent div was clicked')
}, true);


// Submit button

let registerButton = document.getElementById("registerButton");

registerButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log('Form is submitted')
})