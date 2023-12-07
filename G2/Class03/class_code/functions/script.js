console.log('Functions');


function nekakvaFunkcija() {
    console.log(new Date().getTime());
}


let funkcijaZacuvanaVoVarijabla = nekakvaFunkcija;

console.log(funkcijaZacuvanaVoVarijabla);

// funkcijaZacuvanaVoVarijabla()

function sayHello(nekakovParametar) {
    document.write(nekakovParametar);
}

// let printaj = prompt('Vnesi zbor')
// sayHello(printaj);
// sayHello('Bilo sto');
// sayHello(2363453);
// sayHello(true);


function multiplyNumbers(a, b) {
    let result = a * b;
    return result;
}

let resultOfMultiplying = multiplyNumbers(3, 5);

// console.log(resultOfMultiplying);

// console.log(multiplyNumbers(25, 25));


// let broj1 = parseInt(prompt('Vnesete prv broj'));
// let broj2 = parseInt(prompt('Vnesete vtor broj'));

// alert(`Rezulatot od ovie dva broja e ${multiplyNumbers(broj1, broj2)}`)

function numberReturner(nekakovSting) {
    let numberToReturn = parseInt(nekakovSting);
    if (isNaN(numberToReturn)) {
        alert('Vnesede validen broj vo poleto');
        return;
    }
    if (numberToReturn > 100) {
        alert('Ve molime vnesete pomal broj od 100')
        return;
    }
    return numberToReturn;
}


// let promptNekakov = prompt('Vnesete broj1')
// let brojOdPromptNekakov = numberReturner(promptNekakov);
// console.log(brojOdPromptNekakov);


function sumTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}

let resultOfSumTwoNumbers1 = sumTwoNumbers(25, 25);
let resultOfSumTwoNumbers2 = sumTwoNumbers(45, 67);
let resultOfSumTwoNumbers3 = sumTwoNumbers(32532523, 5764567);

console.log(resultOfSumTwoNumbers1);
console.log(resultOfSumTwoNumbers2);
console.log(resultOfSumTwoNumbers3);

function subtractTwoNumbers(a, b) {
    let result = a - b;
    return result;
}

let resultOfSubtractTwoNumbers1 = subtractTwoNumbers(10, 5);
let resultOfSubtarctTwoNumbers2 = subtractTwoNumbers(3523, 2327);
let resultOfSubtarctTwoNumbers3 = subtractTwoNumbers(453, 25);

console.log('-------------');
console.log('SUBTARCT');
console.log('-------------');

console.log(resultOfSubtractTwoNumbers1);
console.log(resultOfSubtarctTwoNumbers2);
console.log(resultOfSubtarctTwoNumbers3);

console.log('-------------');
console.log('MULTIPLY');
console.log('-------------');

function multiplyTwoNumbers(a, b) {
    return a * b;
};
let resultOfMultiplyTwoNumbers1 = multiplyTwoNumbers(2, 5);
let resultOfMultiplyTwoNumbers2 = multiplyTwoNumbers(232542, 2342345);
let resultOfMultiplyTwoNumbers3 = multiplyTwoNumbers(2345, 5435);

console.log(resultOfMultiplyTwoNumbers1);
console.log(resultOfMultiplyTwoNumbers2);
console.log(resultOfMultiplyTwoNumbers3);

console.log('-------------');
console.log('MULTIPLY');
console.log('-------------');

function divideTwoNumbers(bukvalnoBiloSto1, bukvalnoBiloSto2) {
    let resulzat = bukvalnoBiloSto1 / bukvalnoBiloSto2;
    return resulzat;
}

let resultOfDivideTwoNumbers1 = divideTwoNumbers(10, 5);
let resultOfDivideTwoNumbers2 = divideTwoNumbers(2, 0);
let resultOfDivideTwoNumbers3 = divideTwoNumbers(55, 51);

console.log(resultOfDivideTwoNumbers1);
console.log(resultOfDivideTwoNumbers2);
console.log(resultOfDivideTwoNumbers3);


