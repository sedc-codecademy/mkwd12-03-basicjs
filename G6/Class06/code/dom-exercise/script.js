let appDiv = document.getElementById("app");
let titleDiv = document.getElementById("title");
let contentDiv = document.getElementById("content");
let ourAppTitle = document.getElementById("ourAppTitle");

ourAppTitle.style.color = "blue";
ourAppTitle.style.backgroundColor = "yellow"

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

/**
 * Print students or grades depending if login is teacher or student
 * 
 * 1. Create function academyPanel that will print the students or the grades of the students. DONE
 * 2. The function should accept two parameters: person, name DONE
 * 3. If person argument is "teacher" then print the list of students DONE
 * 4. If person argument is "student" print the grades of that student including the subjects DONE
 * 5. The name argument print it as additional message on the HTML
 */


// "Bob Bobsky" Hello Bob Bobski
function printStudents(studentsList, element) {
    element.innerHTML += "<ul>"
    for (let i = 0; i < studentsList.length; i++) {
        element.innerHTML += `<li>${studentsList[i]}</li>`
    }
    element.innerHTML += "</ul>"
}

function printGrades(subjectsList, gradesList) {
    contentDiv.innerHTML += "<ul>"
    for (let i = 0; i < subjectsList.length; i++) {
        contentDiv.innerHTML += `<li>${subjectsList[i]}: ${gradesList[i]}</li>`
    }
    contentDiv.innerHTML += "</ul>"
}


function academyPanel(person, name) {
    if (person === "teacher" && name.length > 0) {
        titleDiv.innerHTML += `
            <h2>Hello teacher ${name} these are your students:</h2>
        `;
        printStudents(students, contentDiv);
    } else if (person === "student" && name.length > 0) {
        titleDiv.innerHTML += `
        <h2>Hello student ${name} these are your grades:</h2>
        `
        printGrades(subjects, grades)
    } else {
        titleDiv.innerHTML +=`
            <p style='color: red'>User not supported</p>
        `
    }
};

// let person = prompt("Are you teacher or student?");
// let fullName = prompt("What is your name?")

// academyPanel(person, fullName)

academyPanel("teacher", "Lee")
// trim will remove the unnecessery empty spaces in the beginning and end of the string
console.log("  HELLO WORLD    ".trim())