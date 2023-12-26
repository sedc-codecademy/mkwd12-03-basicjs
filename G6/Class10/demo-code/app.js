// console.log($); // $ with $ sign we access jquery

console.log('-- SELECTORS --');

let allElements = $("*");
console.log(allElements);

// id selector
let myTitle = $("#myTitle"); // document.getElementById("myTitle")
console.log(myTitle);

// class selector
let wrappers = $(".wrapper"); // document.getElementsByClassName("wrapper")
console.log(wrappers);

let firstWrapper = wrappers.first(); // wrappers[0]
console.log(firstWrapper)
let lastWrapper = wrappers.last(); // wrappers[wrappers.length -1];
console.log(lastWrapper);

console.log('-- DOM MANIPULATION --');
console.log(myTitle.text()); // myTitle.innerText

myTitle.text("Welcome to our store!!") // myTitle.innerText = "Welcome to our store!!";


// let paragraphs =  document.getElementsByTagName("p");
// console.log(paragraphs)

// for (let index = 0; index < paragraphs.length; index++) {
//     const element = paragraphs[index];
//     element.style.color = "blue"
// }

// SAME AS ABOVE BUT USING JQUERY
let allParagraphs = $("p"); // document.getElementsByTagName("p");
console.log(allParagraphs);
// will apply colors to all p elements of this selection
allParagraphs.css("color", "blue"); // allParagraphs[i].style.color = "blue"
allParagraphs.eq(0).css("font-size", "30px");

console.log("--- EVENTS ---");

let inputs = $("input") // document.getElementsByTagName('input');
let calcBtn = $("#calcBtn");
let result = $("#result");

let firstInput = inputs.eq(0);
let secondInput = inputs.eq(1);

calcBtn.click(function(){
    // firstInput.val() is same as firstInput.value
    let sum = parseFloat(firstInput.val()) + parseFloat(secondInput.val());

    result.append($("h2"), `Sum is: ${sum}`) // result.innerHTML += <h2>`Sum is: ${sum}`</h2>
})