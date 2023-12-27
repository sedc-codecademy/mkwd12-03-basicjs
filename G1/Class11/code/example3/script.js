let rootEl = document.querySelector("#root");
let btn = document.querySelector("#joke-btn");

btn.addEventListener("click", function () {
  fetch(`https://backend-omega-seven.vercel.app/api/getjoke`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (body) {
      console.log("SUCCESS");
      console.log(body);

      rootEl.innerHTML = `
        <h1>${body[0].question}</h1>
        <h2>${body[0].punchline}</h2>
          `;
    })
    .catch(function () {
      console.log("ERROR");
    })
    .finally(function () {
      console.log("REQUEST HAS FINISHED");
    });
});
