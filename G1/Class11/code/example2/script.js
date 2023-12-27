// XMLHttpRequest is the first and oldest JS way of making a request

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  // If everything is OK
  if (this.readyState === 4 && this.status === 200) {
    let parsedResponse = JSON.parse(this.responseText);

    //   Set response text to the DIV
    document.querySelector("#root").innerHTML =
      parsedResponse[0].question + " " + parsedResponse[0].punchline;
  } else {
    //   error happened
  }
};

xhttp.open("GET", "https://backend-omega-seven.vercel.app/api/getjoke", true);
xhttp.send();
