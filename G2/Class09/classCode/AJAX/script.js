

const user = {
    userName: 'Basho123',
    password: '123456',
    email: 'jamandilovski@gmail.com'
};

console.log(user);

const userToJson = JSON.stringify(user);
console.log(userToJson);

const jsonToObject = JSON.parse(userToJson);
console.log(jsonToObject);

//this is how local storage item is set
localStorage.setItem('userBasho', userToJson);

//how to retreive the saved item


const user2 = {
    userName: 'Ivan123',
    password: 'ivan123456',
    email: 'ivan.apostolovski@gmail.com'
}

sessionStorage.setItem('userIvan', JSON.stringify(user2));

const userFromLocalStorage = JSON.parse(localStorage.getItem('userBasho'));
console.log(userFromLocalStorage);

const user2FromSessionStorage = JSON.parse(sessionStorage.getItem('userIvan'));
console.log(user2FromSessionStorage);


// localStorage.removeItem('userBasho')

localStorage.clear();


// https://swapi.dev/api/people/1





//napravete kopce edno
//kopceto koga ke se klikne, da napravi povik do https://swapi.dev/api/people/1
//podatocite da se ispecacat vo konzola

const fetchButton = document.getElementById('fetchButton')

const mainContainer = document.getElementById('mainContainer');
fetchButton.addEventListener('click', () => {
    fetch('https://swapi.dev/api/people/1')
        .then((data) => {
            data.json()
                .then(res => {
                    console.log(res);
                    mainContainer.innerHTML += `<h1>${res.name}</h1>`

                });
        });
})



/**
 * @param {HTMLElement} container a valid html container
 * @param {Object} person a person from the swapi web page
 */
function printPerson(container, person) {
    const name = person.name;
    const birth_year = person.birth_year;
    const mass = person.mass;

    container.innerHTML += `
    <div class = "card">
        <h2>Name: ${name}</h2>
        <p>Birth Year: ${birth_year}</p>
        <p>Mass: ${mass}</p>
    </div>
    `
};

const printAllPeopleButton = document.getElementById('printAllPeopleButton');

printAllPeopleButton.addEventListener('click', () => {
    fetch('https://swapi.dev/api/people')
        .then(data => data.json())
        .then(res => {
            console.log(res.results);
            for (let i = 0; i < res.results.length; i++) {
                const result = res.results[i];
                printPerson(mainContainer, result)

            };
        })
})

fetch('https://swapi.dev/api/starships')
    .then(data => data.json())
    .then(res => {
        console.log(res);
    })


/*
 'https://swapi.dev/api/starships'
  1.make a function called printStarship() that takes 2 arguments, 
 container and starshipObject. The function should print 5 properties from 
 the starship object in the DOM,

 2. fetch the ships from 'https://swapi.dev/api/starships', and then 
    print all the ships from the response

 3. Make a button called "Get Ships" that will activate the logic

*/








