const movieName = document.getElementById("movieName");
const movieDirector = document.getElementById("movieDirector");
const movieGenre = document.getElementById("movieGenre");
const movieCoverImage = document.getElementById("movieCoverImage");
const movieReleaseDate = document.getElementById("movieReleaseDate");
const addMovieButton = document.getElementsByTagName("button")[0];
const result = document.getElementById("result");

function Movie(id, name, director, genre, image, realeaseDate){
    this.id = id;
    this.movieName = name;
    this.movieDirector = director;
    this.movieGenre = genre;
    this.movieCoverImage = image;
    this.movieReleaseDate = realeaseDate;
};

let movieDatabase = [];
let movieIDToEdit = null;

function generateid(){
    return Date.now() // current time into timestamp
};

/**
 * 1. find out which movie name we want to delete
 * 2. take out those movies from the db that we DONT want to delete. DONE
 * 3. the values that we DONT want to delete, store them in temp. ARRAY. DONE.
 * 4. overwrite movieDatabase with the temp. array that has the values that we DONT want to delete
 */
function removeMovie(element){
    console.log(element)

    // Step 1
    let movietoDelete = parseFloat(element.value);
    let tempRemainingMovies = [];

    // Step 2 and 3
    for(let i = 0; i < movieDatabase.length; i++){
        if(movietoDelete !== movieDatabase[i].id ){
            tempRemainingMovies.push(movieDatabase[i])
        }
    };

    // Step 4
    printMovies(tempRemainingMovies);
    movieDatabase = tempRemainingMovies
}

function editMovie(element){
    console.log('edit movie')
    let movieToEdit = parseFloat(element.value);
    console.log('movie with id to be edited:', movieToEdit)

    let movieToBeEdited = {};


    for(let i = 0; i < movieDatabase.length; i++){
        if(movieToEdit === movieDatabase[i].id ){
            movieToBeEdited = movieDatabase[i]
        }
    };

    movieName.value = movieToBeEdited.movieName;
    movieDirector.value = movieToBeEdited.movieDirector;
    movieGenre.value = movieToBeEdited.movieGenre;
    movieCoverImage.value = movieToBeEdited.movieCoverImage; 
    movieReleaseDate.value = movieToBeEdited.movieReleaseDate;
    movieIDToEdit = movieToEdit;

};

function printMovies(movies){
    result.innerHTML = "";
    
    for(let i = 0; i < movies.length; i++){
        result.innerHTML +=
        `
            <div class="movieCard">
                <div>
                    <h2>${movies[i].movieName}</h2>
                    <p>By: ${movies[i].movieDirector}</p>
                    <p>Genre: ${movies[i].movieGenre}</p>
                </div>
                
                <img width="300" height="300" src="${movies[i].movieCoverImage}" alt="${movies[i].movieName}" />

                <button value="${movies[i].id}" onclick="removeMovie(this)">Remove Movie</button>
                <button value="${movies[i].id}" onclick="editMovie(this)">Edit Movie</button>
            </div>
        `
    }
}


addMovieButton.addEventListener("click", function(event){
    console.log(this) // ke go vrati elementot sto go predizvikal ovoj EVENT
    event.preventDefault()
    
    //logic that should happen when selectedbutton is clicked
    //movieName.value => means, we get the selected element (input), with .value we read the value written in the element =)

    if(movieIDToEdit !== null){
        for(let i = 0; i < movieDatabase.length; i++){
            if(movieDatabase[i].id === movieIDToEdit){
                movieDatabase[i].movieName = movieName.value;
                movieDatabase[i].movieDirector = movieDirector.value;
                movieDatabase[i].movieCoverImage = movieCoverImage.value;
                movieDatabase[i].movieReleaseDate = movieReleaseDate.value;
                movieDatabase[i].movieGenre = movieGenre.value;
            }
        }

        movieIDToEdit = null;
    }else {
        let movie = new Movie(generateid(), movieName.value, movieDirector.value, movieGenre.value, movieCoverImage.value, movieReleaseDate.value);

        movieDatabase.push(movie);
    }

  

    printMovies(movieDatabase)
 
    movieName.value = "";
    movieDirector.value = ""
    movieGenre.value = ""
    movieCoverImage.value = ""
    movieReleaseDate.value = ""
   
});