function makeFetchRequest() {
    fetch('https://swapi.dev/api/people/2/')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

let myBtn = document.getElementById('myButton');
myBtn.addEventListener('click', makeFetchRequest);