let getDataBtn = document.getElementById('data-btn');
let jokesContainerElement = document.getElementById('container');

function Joke(type, setup, punchline) {
    this.type = type,
    this.question = setup,
    this.answer = punchline

    this.getJoke = function() {
        return`${this.question}\n${this.answer}`;
    }
}

function getJokeData() {
    const url = `https://official-joke-api.appspot.com/jokes/programming/ten`;
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('There is an error with the network or server');
        }
        return response.json();
    })
    .then(responseData => {
        console.log(responseData);
        const transformedData = transformData(responseData);
        displayData(transformedData, jokesContainerElement);
    })
    .catch(error => {
        console.log(error);
    })
}

function transformData(responseData) {
    let resultArray = [];
    for (let i = 0; i < responseData.length; i++) {
        let joke = new Joke(responseData[i].type, responseData[i].setup, responseData[i].punchline);
        resultArray.push(joke);
    }
    return resultArray;
}

function displayData(dataArray, containerElement) {

    containerElement.textContent = '';

    for (let i = 0; i < dataArray.length; i++) {
        let jokeElement = document.createElement('div');
        jokeElement.classList.add('joke-container');

        let questionElement = document.createElement('p');
        questionElement.classList.add('question');
        questionElement.textContent = `${dataArray[i].question}`

        let answerElement = document.createElement('p');
        answerElement.classList.add('answer');
        answerElement.textContent = `${dataArray[i].answer}`;

        jokeElement.appendChild(questionElement);
        jokeElement.appendChild(answerElement);
        
        containerElement.appendChild(jokeElement);
    }
    
}

getDataBtn.addEventListener('click', getJokeData);