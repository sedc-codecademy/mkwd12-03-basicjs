let myApp = document.getElementById('app');
let titleDiv = myApp.firstElementChild;
let contentDiv = titleDiv.nextElementSibling;
myApp.style.color = 'red';
contentDiv.style.color = 'green';
contentDiv.style.backgroundColor = '#efefef';
contentDiv.style.border = '1px solid black';

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function printGrades(subjects, grades , element ) {
    console.log(element);
    // element.innerHTML = '';
    element.innerHTML += '<ul>';
    for (let i = 0; i < subjects.length; i++) {
        element.innerHTML += `<li>${subjects[i]} : ${grades[i]}</li>`;
    }
    element.innerHTML += '</ul>';
}

function printStudents(students, element) {
    console.log(element);
    // element.innerHTML = '';
    element.innerHTML += '<ol>';
    for (let i = 0; i < students.length; i++) {
        element.innerHTML += `<li> ${students[i]} </li>`;        
    }
    element.innerHTML += '</ol>';
}

function academyPanel(person, name) {
    if(person === "student" && name.length >= 2) {
        titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
        titleDiv.innerHTML += "<p>Welcome to your student page</p>";
        contentDiv.innerHTML += "<h3>Your grades:</h3>";
        console.log(contentDiv);
        printGrades(subjects,grades,contentDiv);
    }
    else if(person === "teacher" && name.length >= 2) {
        titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
        <p>Welcome to your teachers page</p>`;
        contentDiv.innerHTML += "<h3>Your students:</h3>";
        printStudents(students,contentDiv);
    }
    else {
        titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
        titleDiv.innerHTML += "<p>Please try again!</p>";
    }
}

let input = prompt("Are you a student or a teacher?");
let firstName = prompt("What is your name?");
academyPanel(input, firstName);
