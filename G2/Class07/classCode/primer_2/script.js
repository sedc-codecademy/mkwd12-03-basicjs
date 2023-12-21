const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');

const firstParagraph = document.getElementById('firstParagraph');
const buttonChangeColor = document.getElementById('buttonChangeColor');

function greet() {
    const name = nameInput.value;
    alert(`Hello ${name}`);
}

greetButton.onclick = greet;


buttonChangeColor.addEventListener('click', function () {
    firstParagraph.style.color = 'red';
})

buttonChangeColor.addEventListener('click', greet);
buttonChangeColor.removeEventListener('click', greet);

//////////////////////////////////////////

const addNameInput = document.getElementById('addNameInput');
const addNameFromInputButton = document.getElementById('addNameFromInputButton');
const listOfAllNamesAdded = document.getElementById('listOfAllNamesAdded');

addNameFromInputButton.addEventListener('click', function () {
    if (!addNameInput.value) return;
    listOfAllNamesAdded.innerHTML += `<h3> ${addNameInput.value} </h3>`;
    addNameInput.value = '';
})


const paragraphVezba2 = document.getElementById('paragraphVezba2');
const buttonVezba2 = document.getElementById('buttonVezba2');

function r() {
    const minimumTreshold = 240;
    return Math.floor(minimumTreshold + (Math.random() * (255 - minimumTreshold)));
}

buttonVezba2.addEventListener('click', function () {
    paragraphVezba2.style.fontSize = '25px';
    paragraphVezba2.style.color = `rgb(${r()},${r()},${r()})`;
    paragraphVezba2.style.backgroundColor = `rgb(${r()},${r()},${r()})`;
})











