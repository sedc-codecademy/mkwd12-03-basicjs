console.log("This is working");

const student = {
  firstName: "Filip",
  lastName: "Kostadinovski",
  isStudent: true,
  hobbies: [
    "Gaming",
    "Programming",
    "More Programming",
    "Even More Programming",
  ],
  age: 31,
};

console.log(student);

const studentJSON = JSON.stringify(student);

console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log(studentObj);

const personParagraphEl = document.querySelector(".person-paragraph");

fetch("https://swapi.dev/api/people/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("This is the swapi data");

    // height
    // mass
    // name
    personParagraphEl.innerText = `Name: ${data.name}, Height: ${data.height}cm, Weight: ${data.mass}kg`;

    console.log(data);
  });
