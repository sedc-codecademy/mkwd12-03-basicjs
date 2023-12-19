
// let counter = 1;
// let displayCounter = 0;
// let counterDiv = document.getElementById('counter');
// let incrementBtn = document.getElementById('increment');
// let decrementBtn = document.getElementById('decrement');
// let alertBtn = document.getElementById('alertBtn');

// incrementBtn.onclick = incrementCounter;
// // incrementBtn.onclick = mouseEnter; // bad practice we cannot add two events on the same event with this method
// decrementBtn.onclick = decrementCounter;

// alertBtn.onclick = function() {
//     alert('Hello Marko');
// }

// // alertBtn.onclick = alertName; // It is the same as line 13 but with a pre-defined function

// function alertName() {
//     alert('Hello Marko');
// }

// function countToThree() {
//     for (let i = 1; i < 4; i++) {
//         console.log(i);        
//     }
// }

// function mouseEnter() {
//     console.log(++counter);
// }

// function incrementCounter() {
//     displayCounter++;
//     counterDiv.innerText = displayCounter;
// }

// function decrementCounter() {
//     if(displayCounter > 0) {
//     displayCounter--;
//     }
//     counterDiv.innerText = displayCounter;
// }


// let alertBtn = document.getElementById('randomNr');

// alertBtn.addEventListener('click', function() {
//     alert('First random generated number ' + (Math.random() * 10).toFixed(2));
// });

// alertBtn.addEventListener('click', function() {
//     alert('Second random generated number ' + (Math.random() * 10).toFixed(2));
// });

// alertBtn.addEventListener('click', function() {
//     alert('Third random generated number ' + (Math.random() * 10).toFixed(2));
// });

// alertBtn.onclick =  function() {
//     alert('First random generated number ' + (Math.random() * 10).toFixed(2));
// };

// alertBtn.onclick = function() {
//     alert('Second random generated number ' + (Math.random() * 10).toFixed(2));
// };

// alertBtn.onclick = function() {
//     alert('Third random generated number ' + (Math.random() * 10).toFixed(2));
// };

// let nameBtn = document.getElementById('name');

// nameBtn.addEventListener('click', function() {
//     alert('Hello Marko');
// });

let colorDiv = document.getElementById('colorDiv');

// colorDiv.addEventListener('click',changeColor);
// colorDiv.addEventListener('mouseleave',changeToGreen);


// Homework solve this with the boolean to toggle between red and green color on click.
// // Bonus
// colorDiv.addEventListener('click', function(event) {
//     changeColor(event,true);
// });

// function changeColor(event,bool) {
//     if(bool) {
//     event.target.style.backgroundColor = 'red'; // using event target but we can use line 78 as well
//     }
//     else {
//     event.target.style.backgroundColor = 'green';
//     }
//     // colorDiv.style.backgroundColor = 'red'; // using dom element selector
// }

// function changeToGreen() {
//     colorDiv.style.backgroundColor = 'green';
// }

// function showTarget(event) {
//     console.log(event.target);
// }

let nameInput = document.getElementById('nameInput');
let nameBtn = document.getElementById('submitName');


// Events
// input
// keydown
// keypress
// keyup
// change
// TEST THESE ALL OUT!

nameInput.addEventListener('input', function() {
    // console.log(nameInput.value);
    colorDiv.innerText = nameInput.value; // writing to div when the input value is changed
});

nameBtn.addEventListener('click',function() {
    alert(nameInput.value);
});