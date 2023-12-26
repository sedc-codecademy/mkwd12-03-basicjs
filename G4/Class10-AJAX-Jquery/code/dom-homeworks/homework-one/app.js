// Change the text of all paragraphs and headers with javascript

const firstParagraphEl = document.querySelector(".paragraph");

firstParagraphEl.innerText = "CHANGED BY TRAINER (P1)";

const secondParagraphEl = document.querySelector(".second");

secondParagraphEl.innerText = "CHANGED BY TRAINER (P2)";

const mainHeadingEl = document.getElementById("mainHeading");

mainHeadingEl.innerText = "I AM CHANGED (MAIN HEADING)";

const headerThreeEl = document.querySelector("h3");

headerThreeEl.innerText = "I AM CHANGED (H3)";

const headerOneEl = document.querySelectorAll("h1")[1];

headerOneEl.innerText = "I AM CHANGED (H1 - LAST DIV)";

const lastDivEl = document.querySelector("div:nth-of-type(3)");

console.log(lastDivEl);
