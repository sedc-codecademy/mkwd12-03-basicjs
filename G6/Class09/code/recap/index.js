// Exercise #1.

// Print names of famous movie characters.
/**
 * 1. declare a variable that is array of famous movie characters. DONE
 * 2. define a function, that accepts one parameter. DONE
 * 3. The parameter is expected to be array. DONE
 * 4. Iterate the array and print in the console each element of it.
 */


let charactesArray = ["John Snow", "Sansa Stark", "James Bond", "Indiana Jones", "Rambo", "Harry Potter", "Angelina Jolie", "John Wick", "Saruman", "Bilbo Beggins"];

function printMovieCharacters(listOfCharacters) {
    // logic here...
    if (listOfCharacters.length === 0) {
        return "Invalid input."
    };

    // 1.declaration and init. iteratorot/index
    // 2.condition
    // 3.increment the index/iterator
    let names = ``;
    for (let index = 0; index < listOfCharacters.length; index++) {
        // console.log(listOfCharacters[index])
        names += `${listOfCharacters[index]}\n`
    };


    return names;
};


let names = printMovieCharacters(charactesArray);
console.log(names)

// Exercise 2

let firstNames = ['John', "Bob", "Anna"];
let lastNames = ['Doe', "Bobski", "Smith"];


function returnFullNames(listOfNames, listOfLastNames) {
    let fullNames = [];

  
    for (let index = 0; index < listOfNames.length; index++) {
        let fullname = `${index + 1}. ${listOfNames[index]} ${listOfLastNames[index]}`;
        console.log(fullname)
        fullNames.push(fullname);
    }

    return fullNames
};

console.log(returnFullNames(firstNames, lastNames))

let newFirstNames = ["Smith", "George"];
let newLastNames = ["Yoo", "Bee"];

console.log(returnFullNames(newFirstNames, newLastNames))


// Exercise #3:

let inputs = document.getElementsByTagName('input');
let songTitleInput = inputs[0];
let songSigerInput = inputs[1];
let submitButton = document.getElementById("submitButton");
let resultDiv = document.getElementById("result");
let errorMessage = document.getElementById('errMsg');

let songDatabase = [];

// constructor function
function Song(songTitle, songSinger){
    this.songTitle = songTitle;
    this.songSinger = songSinger;
};


function clearInputs(inputOne, inputTwo){
    inputOne.value = "";
    inputTwo.value = ""
}

function printSongs(element, songs){
    element.innerHTML = "";
    for(let i = 0; i < songs.length; i++){
        element.innerHTML += `
            <p>${songs[i].songTitle} - ${songs[i].songSinger}</p>
            <hr />
        `
    };
};

// in the argument "e" we can "read" the event that happened.
submitButton.addEventListener("click", function(e){
    e.preventDefault(); // prevent default behaveour on the button
    
    if(songTitleInput.value === "" ||  songSigerInput.value=== "" ){
        errMsg.innerText = "* Invalid inputs";
        errMsg.style.color = "red"
        return;
    }

    errMsg.innerText = ""
    // new instance of the constructor
    let song = new Song(songTitleInput.value, songSigerInput.value);
    songDatabase.push(song)

    printSongs(resultDiv, songDatabase)
    clearInputs(songTitleInput, songSigerInput)
    
});

