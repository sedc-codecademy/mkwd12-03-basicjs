// const headline = document.getElementsByTagName('h1')[0];
// const headline = document.querySelectorAll('h1')[0]
const headline = document.querySelector('h1')
headline.innerText = '<i>That was last class</i>';
// const mainContaier = document.getElementById('main-container');
const mainContaier = document.querySelector('#main-container');
mainContaier.innerHTML = `
<ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
</ul>  `
const redTexts = document.getElementsByClassName('red-text');
for (let element of redTexts) {
    if (Math.random() > 0.5) {
        element.style.color = 'red';
    }
    else {
        element.style.color = 'green';
    }
}


function findNumberInArray(array, number) {
    for (let element of array) {
        if (element == number) {
            return number;
        }
        console.log(element);
    }
}

const nizaOdBroevi = [1, 3, 4, 2, 5, 6];

const theNumber = findNumberInArray(nizaOdBroevi, 4);
console.log(`the number ${theNumber} was found in the array`);
