function callStarWarsApi(id){
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            showInformationFromAPI(data, document.getElementById("printApi"));
        })
        .catch(error =>{
            console.error("Error fetching data: ", error)
        })
}

function showInformationFromAPI(data, element){
    element.innerHTML += `
    <h2>Name: ${data.name}</h2>
    <p>Gender: ${data.gender}, 
    <br>Height: ${data.height},
    <br>Mass: ${data.mass}</p>`
}


document.getElementById("btn").addEventListener("click", function(){
     callStarWarsApi(1);
     callStarWarsApi(50);
})
