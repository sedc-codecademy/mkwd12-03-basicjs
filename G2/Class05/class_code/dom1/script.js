
let nekojElement = document.getElementById('id');

setTimeout(function () {
    nekojElement.innerText = 'Smeneto od dom';
}, 2000);


let div1 = document.getElementsByTagName('div')[0];

function paragraphTemplate(itearorToBeInjected) {
    return `
<p class="big-letters">I am a paragraph ${itearorToBeInjected} from javascript</p>
`
}

for (let i = 1; i <= 50; i++) {
    div1.innerHTML += paragraphTemplate(i)
}

const secondHeadline = document.getElementById('secondHeadline');

console.log(secondHeadline.previousElementSibling);

const cardContainer = document.getElementById('cardContainer');

const childrenOfCardContainer = cardContainer.children;
const firstChildOfCardContainer = cardContainer.firstElementChild;
const lastChildOfCardContainer = cardContainer.lastElementChild;

console.log('--------------------------');
console.log(childrenOfCardContainer);
console.log(firstChildOfCardContainer);
console.log(lastChildOfCardContainer);
