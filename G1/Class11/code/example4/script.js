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
      // .json() extracts the body and parses the JSON returned by the API
      return response.json();
    })
    .then(function (body) {
      // This block would only execute if the request is successful
      console.log(body);
      root.innerHTML = `<h1>Name: ${body.name}, Height: ${body.height}, Mass: ${body.mass}</h1>`;
      counter++;
    })
    .catch(function () {
      // This block would only execute if the request has failed
      error.innerText = "There has been an error!";
    })
    .finally(function () {
      // This block would only execute ALWAYS
      // hide the element
      loader.style.display = "none";
    });
});
