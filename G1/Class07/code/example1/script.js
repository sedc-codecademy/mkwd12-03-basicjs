// Using Event listeners

// Step 1: Selecting the element
// let btnOne = document.querySelector('#btn-1');

// Step 2: Indicating the event we are listening to
// Step 3: Handling the event trigger - Writing the
// code we need to execute when event is triggered
// btnOne.addEventListener('click', function () {
//     console.log('You clicked the button!!!')
// })


// normal function that is used for method no. 2,
// calling it from the HTML with onclick attribute
// function sum(num1, num2) {
//     console.log("Summing up...")
//     return num1 + num2
// }

// console.log(sum(1, 2))

// Don't use this method, use event listeners instead
// let btnTwo = document.querySelector('#btn-2');

// btnTwo.onclick = function () {
//     console.log('Method no. 3 evoked!')
// }

// Say my name exercise solution

// let sayMyNameBtn = document.querySelector('#btn-name')

// sayMyNameBtn.addEventListener('click', function () {
//     alert('Hello Ivo')
// })

// Handling click of buttons and reusing code

// let btnClickOne = document.querySelector('#btn-click-1')
// let btnClickTwo = document.querySelector('#btn-click-2')
// let countEl = document.querySelector('#count')

// let count = 0

// Stage 1, code should be optimized (see stage 2)
// btnClickOne.addEventListener('click', function() {
//     count++
//     countEl.innerText = count;
// })

// btnClickTwo.addEventListener('click', function() {
//     count++
//     countEl.innerText = count;
// })

// Stage 2: Much better, but still can be improved, see stage 3
// btnClickOne.addEventListener('click', function() {
//     showCount()
// })

// btnClickTwo.addEventListener('click', function() {
//     showCount()
// })

// btnClickOne.addEventListener('click', showCount)

// btnClickTwo.addEventListener('click', showCount)

// function showCount() {
//     count++
//     countEl.innerText = count;
// }

// Using parameters

// let spanOne = document.querySelector('#count-1')
// let spanTwo = document.querySelector('#count-2')

// let countBtnOne = 0
// let countBtnTwo = 0

// btnClickOne.addEventListener('click', function() {
//     showCount(1)
// })

// btnClickTwo.addEventListener('click', function() {
//     showCount(2)
// })

// function showCount(btnNumber) {
//     if (btnNumber === 1) {
//         countBtnOne++
//         spanOne.innerText = countBtnOne
//     } else if (btnNumber === 2) {
//         countBtnTwo++
//         spanTwo.innerText = countBtnTwo
//     } else {
//         console.log("There is some error")
//     }
// }§

// let nameBtn = document.getElementById('btn-name')
// let nameInput = document.getElementById('input-name')

// nameBtn.addEventListener('click', function() {
//     let userName = nameInput.value;
//     console.log(`Hello ${userName}`)
// })

// nameInput.addEventListener('keyup', function (event) {
//     const value = event.target.value
//     console.log(value)
// })

// Event bubbling

// const btn = document.querySelector('button')
// const div = document.querySelector('div')
// const section = document.querySelector('section')
// const span = document.querySelector('span')

// btn.addEventListener('click', function(event) {
//     event.stopPropagation()
//     console.log('Button was clicked!')
// })


// div.addEventListener('click', function() {
//     console.log('Div was clicked')
// })

// section.addEventListener('click', function() {
//     console.log('Section was clicked')
// })

// span.addEventListener('click', function() {
//     console.log('Span was clicked')
// })

// document
//     .querySelector('body')
//     .addEventListener('click', function() {
//         console.log("Body was clicked")
//     })

// document
//     .querySelector('html')
//     .addEventListener('click', function() {
//         console.log("HTML was clicked")
//     })

// Register Exercise

// Selecting elements
let firstNameEl = document.querySelector('#first-name')
let lastNameEl = document.querySelector('#last-name')
let emailEl = document.querySelector('#email')
let passwordEl = document.querySelector('#password')
let submitBtn = document.querySelector('#submit')
let infoParagraph = document.querySelector('#info')

// Event listeners
// submitBtn.addEventListener('click', function (event) {
//     event.preventDefault()

//     // get value from inputs
//     let info = `${firstNameEl.value} ${lastNameEl.value} has registered!`

//     // show Name Surname registered in our app
//     infoParagraph.innerText = info
// })

submitBtn.addEventListener('click', registerUser)

// Functions

function registerUser(event) {
    event.preventDefault()

    // get value from inputs
    let info = `${firstNameEl.value} ${lastNameEl.value} has registered!`

    // show Name Surname registered in our app
    infoParagraph.innerText = info
}