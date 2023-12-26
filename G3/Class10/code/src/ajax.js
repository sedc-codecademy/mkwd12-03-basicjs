let myButton = document.getElementById("myButton");
let planet = document.getElementById("planet");
let planetText = document.getElementById("planetData");

function makeAjaxApiCall() {
    $.ajax({
        url: 'https://swapi.dev/api/films',
    
        success: function(result) {
            console.log(result);
        },
    
        error: function(error) {
            console.log('The api didnt return anything');
            console.log(error);
        }
    })
}

myButton.addEventListener('click', makeAjaxApiCall);

function makeAjaxApiCallForPlanet() {
    $.ajax({
        url: 'https://swapi.dev/api/planets/1/',
    
        success: function(result) {
            console.log(result);
            planetText.innerHTML = `The name of the planet is ${result.name} and the population is ${result.population
            }`;
        },
    
        error: function(error) {
            console.log('The api didnt return anything');
            console.log(error);
        }
    })
}

planet.addEventListener('click', makeAjaxApiCallForPlanet);


