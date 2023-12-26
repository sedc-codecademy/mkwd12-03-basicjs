console.log("works");

/*
Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
*/

const numbersListEl = document.querySelector(".numbers-list");
const resultParagraphEl = document.querySelector(".result-paragraph");

const numbersArr = [23, 2, 12, 32, 54123, 2, 23, 12, 33, 2, 312];

function printNumArray(numArr, element) {
  let liContentHTML = "";

  for (let num of numArr) {
    liContentHTML += `<li>${num}</li>`;
  }

  //   for (let num of numArr) {
  //     const liEl = document.createElement("LI");
  //     liEl.innerText = num;
  //     element.appendChild(liEl);
  //   }

  element.innerHTML = liContentHTML;
}

function printResultStr(numArr, element) {
  let sum = 0;

  for (let num of numArr) {
    sum += num;
  }

  element.innerText = `The sum of all the numbers is: ${sum}.
  And the mathematical equation is ( ${numArr.join(" + ")} ) = ${sum}`;
}

printNumArray(numbersArr, numbersListEl);
printResultStr(numbersArr, resultParagraphEl);

console.log(numbersListEl, resultParagraphEl);
