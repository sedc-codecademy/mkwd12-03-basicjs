let myApp = document.getElementById('app');
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.children[1];

let students = ["Marko Gulevski", "Mario Milcevski", "Filip Nikolov", "Radica Shvigir", "Ana-Marija Stojcevksa"];
let subjects = ["Javascript Basic", "Introduction to HTML and CSS", "Javascript Advanced", "Angular", "React"];
let grades = ["A", "B", "A", "C", "E"];


/**
* @param {string[]} subjects 
* @param {string[]} grades 
* @param {HTMLElement} element 
*/
function printGrades(subjects, grades, element) {
    console.log(element);
    element.innerHTML = ""; //clearing element
    element.innerHTML += "<ul>";
    for (let i = 0; i < subjects.length; i++) {
        element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
    }
    element.innerHTML += "</ul>"
}

/**
 * @param {string[]} students 
 * @param {HTMLElement} element an html element to pass
 */
function printStudents(students, element) {
    element.innerHTML = ""; //clearing element
    element.innerHTML += `<ol>`;
    for (let student of students) {
        element.innerHTML += `<li>${student}</li>`
    }
    element.innerHTML += `</ol>`;
}


/**
 * @param {string} person person that will be validated
 * @param {string} name name of the person
 */
function academyPanel(person, name) {
    if (person == 'student' && name.length >= 2) {
        titleDiv.innerHTML += `<h1><b>Hello there ${name} </b></h1>`;
        titleDiv.innerHTML += `<p>Welcome to your student page</p>`;
        contentDiv.innerHTML += "<h3>Your grades:</h3>";
        printGrades(subjects, grades, contentDiv);
    } else if (person == "teacher" && name.length >= 2) {
        titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
        <p>Welcome to your teachers page</p>`;
        contentDiv.innerHTML += "<h3>Your students:</h3>";
        printStudents(students, contentDiv);
    } else {
        titleDiv.innerHTML += "<h1>Your login was unsucsessful</h1>";
        titleDiv.innerHTML += "<p>Please try again!</p>";
    }
};

let input = prompt("Are you a student or a teacher?");
let name = prompt("What is your name");
academyPanel(input, name);

myApp.style.color = "white";
myApp.style.backgroundColor = "black";


