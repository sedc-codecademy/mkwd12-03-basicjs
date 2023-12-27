// Select elements
let root = document.getElementById("root");
let btn = document.getElementById("fetch-btn");
let error = document.getElementById("error");
let loader = document.getElementById("loader");
let counter = 1;

// Events
btn.addEventListener("click", function () {
  // show the element
  loader.style.display = "block";

  fetch(`https://swapi.dev/api/people/${counter}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (body) {
      console.log(body);
      root.innerHTML = `<h1>Name: ${body.name}, Height: ${body.height}, Mass: ${body.mass}</h1>`;
      counter++;
    })
    .catch(function () {
      error.innerText = "There has been an error!";
    })
    .finally(function () {
      // hide the element
      loader.style.display = "none";
    });
});
