let myDiv = document.getElementById("myDiv");
document.getElementById('btn').addEventListener("click",function(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data=>{
            //console.log(data);
            for(let dataName of data){
                //console.log(dataName);
                myDiv.innerHTML += `<p>Name: ${dataName.name}, Username: ${dataName.username}</p> <hr>`
            }
        })
        .catch(error => {
            console.error(error);
        })
})