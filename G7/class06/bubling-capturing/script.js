let box01 = document.getElementById("div01");
let box02 = document.getElementById("div02");
let box03 = document.getElementById("div03");
let button = document.getElementById("btn");

box01.addEventListener("click", function() {
    console.log("Box 1 was clicked");
}, false);

box02.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("Box 2 was clicked");
}, false);

box03.addEventListener("click", function() {
    console.log("Box 3 was clicked");
}, false);

button.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("The button was clicked");
}, false);

// box01.addEventListener("click", function() {
//     console.log("Box 1 was clicked");
// }, true);

// box02.addEventListener("click", function() {
//     console.log("Box 2 was clicked");
// }, true);

// box03.addEventListener("click", function() {
//     console.log("Box 3 was clicked");
// }, true);

// button.addEventListener("click", function() {
//     console.log("The button was clicked");
// }, true);