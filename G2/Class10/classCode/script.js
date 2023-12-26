import getUrlData from "./src/getUrlData.js";
import test from "./src/test.js";
import testButtonFunction from "./src/testButtonFunction.js";

// https://swapi.dev/api/

test('bilo sto');

const button = document.querySelector('#testButton');
const button2 = document.querySelector('#testButton2');

button.addEventListener('click', testButtonFunction)

button2.addEventListener('click', function () {
    test('hehehihiahaha vtoro kopceeeeee')
})

async function start() {
    const data = await getUrlData('homepage', 'https://swapi.dev/api/')
    console.log(data);
}
start();

// make a button, button3, which will have a function
// that prints the result of two numbers, but the function
// will be in separate js file

const someArray = [1, 2, 3, 5, 6];
const someObject = {
    name: 'hehe',
    age: 5
}
console.log(someArray instanceof Array);
console.log(someObject instanceof Object);


function testWhichNear100(num1, num2) {
    const testingCase = 100;
    let testFirstNum = testingCase - num1;
    let testSecondNum = testingCase - num2;
    if (testFirstNum < 0) testFirstNum *= -1;
    if (testSecondNum < 0) testSecondNum *= -1;
    if (testSecondNum == testFirstNum)
        return `both numbers with values: ${num1} ${num2} are equally close to ${testingCase}`;
    if (testSecondNum > testFirstNum)
        return `num1: ${num1} is closer to ${testingCase}`;
    return `num2: ${num2} is closer to ${testingCase}`;
}

let num1 = parseInt(prompt('enter number 1'))
let num2 = parseInt(prompt('enter number 2'))
alert(testWhichNear100(num1, num2));