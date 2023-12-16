console.log("script working");

const appEl = document.getElementById("app");
const titleEL = document.querySelector("#title");
const contentEl = document.querySelector("#content");

console.log(appEl, titleEL, contentEl);

const students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
const subjects = ["Math", "English", "Science", "Sport"];
const grades = ["A", "B", "A", "C"];

function printGrades(subjects, grades, element) {
  // First clear the element innerHTML
  element.innerHTML = "";

  let liContent = "";

  for (let i = 0; i < subjects.length; i++) {
    liContent += `<li>${subjects[i]}: ${grades[i]}</li>`;
  }

  console.log(liContent);

  element.innerHTML += `<ul>${liContent}</ul>`;
}

printGrades(subjects, grades, contentEl);

function printStudents(students, element) {
  element.innerHTML = "";

  let liContent = "";

  for (let student of students) {
    liContent += `<li>${student}</li>`;
  }

  element.innerHTML += `<ol>${liContent}</ol>`;
}

printStudents(students, contentEl);

function renderAcademyPanel(userType, name) {
  if (userType === "student") {
    titleEL.innerHTML = `
    <h1>Hello there <strong>${name}<strong></h1>
    <p>Welcome to your student page</p>
    `;
    contentEl.innerHTML = `<h3>Your Grades:</h3>`;
    printGrades(subjects, grades, contentEl);
    return;
  }

  if (userType === "trainer") {
    titleEL.innerHTML = `
    <h1>Hello there <strong>${name}<strong></h1>
    <p>Welcome to your trainers page</p>
    `;
    contentEl.innerHTML = `<h3>Your students:</h3>`;
    printStudents(students, contentEl);
    return;
  }

  //   Give user invalid login error
  titleEL.innerHTML = `<h1>Your login was unsuccessfull!, please try again!</h1>`;
  contentEl.innerHTML = "";
}

const userType = prompt("Are you a student or a trainer?");
const username = prompt("What is your name?");

renderAcademyPanel(userType, username);

// Changing style
appEl.style.fontFamily = "sans-serif";
appEl.style.backgroundColor = "darkblue";
titleEL.style.color = "hotpink";
appEl.style.margin = "20px";
appEl.style.padding = "20px;";
