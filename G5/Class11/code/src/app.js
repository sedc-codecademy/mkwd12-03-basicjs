const html = {
  searchInput: document.getElementById('searchInput'),
  btnSearch: document.getElementById('btnSearch'),
  btnReset: document.getElementById('btnReset'),
  cardContainer: document.getElementById('cardContainer'),
  btnPopulation: document.getElementById('btnPopulation'),
  btnAustralia: document.getElementById('btnAustralia'),
  btnSouthAmerica: document.getElementById('btnSouthAmerica'),
  btnNorthAmerica: document.getElementById('btnNorthAmerica'),
  btnAsia: document.getElementById('btnAsia'),
  btnAfrica: document.getElementById('btnAfrica'),
  btnEurope: document.getElementById('btnEurope'),
  notification: document.getElementById('notification')
}

let data = fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(function (result) {
    data = result
    return data
  })

// console.log(data);

function createCard (country) {
  return `  
  <div class="col-sm-6">
  <div class="card" style="width: 18rem;">
  <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
  <div class="card-body">
      <h5 class="card-title">${country.name.common}</h5>
      <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital[0]}</p>
  </div>
</div>
  </div>
 `
}

function displayCountries(countries){
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";
    for(let country of countries){
        html.cardContainer.innerHTML += createCard(country)
    }
}

//Search with button click
html.btnSearch.addEventListener("click", function(){
    fetch(`https://restcountries.com/v3.1/name/${html.searchInput.value}`)
        .then(response => response.json())
        .then(function(data){
            if(data.status === 404){
                html.notification.innerHTML = "";
                html.cardContainer.innerHTML = "";
                html.notification.innerHTML += `
                <div class="alert alert-danger" role="alert">
                    You have entered a wrong country name, please try again!
                </div>
                `
            }else{
                displayCountries(data);
            }
        })
        .catch(error => console.log(error))
})

//Search with enter
html.searchInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        fetch(`https://restcountries.com/v3.1/name/${html.searchInput.value}`)
        .then(response => response.json())
        .then(function(data){
            if(data.status === 404){
                html.notification.innerHTML = "";
                html.cardContainer.innerHTML = "";
                html.notification.innerHTML += `
                <div class="alert alert-danger" role="alert">
                    You have entered a wrong country name, please try again!
                </div>
                `
            }else{
                displayCountries(data);
            }
        })
        .catch(error => console.log(error))
    }
})


html.btnReset.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";
    html.searchInput.value = "";
})


html.btnPopulation.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.population >= 100000000){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})

html.btnEurope.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.continents[0] === "Europe"){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})

html.btnAfrica.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.continents[0] === "Africa"){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})

html.btnAsia.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.continents[0] === "Asia"){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})

html.btnNorthAmerica.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.continents[0] === "North America"){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})

html.btnSouthAmerica.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.continents[0] === "South America"){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})

html.btnAustralia.addEventListener("click", function(){
    html.notification.innerHTML = "";
    html.cardContainer.innerHTML = "";

    for(let country of data){
        if(country.continents[0] === "Oceania"){
            html.cardContainer.innerHTML += createCard(country)
        }
    }
})