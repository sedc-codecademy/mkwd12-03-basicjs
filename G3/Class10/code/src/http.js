function makeHttpRequest() {
    let xhr = new XMLHttpRequest();

    let url = 'https://swapi.dev/api/films';

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let response = xhr.responseText;
                // console.log(response);
                let responseData = JSON.parse(response);
                console.log(responseData);
            } else {
                console.log('Something went wrong')
            }
        }
    }
    xhr.send();
}
let myBtn = document.getElementById('myButton');
myBtn.addEventListener('click', makeHttpRequest);