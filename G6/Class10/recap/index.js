const movieName = document.getElementById("movieName");
const movieDirector = document.getElementById("movieDirector");
const movieGenre = document.getElementById("movieGenre");
const movieCoverImage = document.getElementById("movieCoverImage");
const movieReleaseDate = document.getElementById("movieReleaseDate");
const addMovieButton = document.getElementsByTagName("button")[0];
const result = document.getElementById("result");

function Movie(name, director, genre, image, realeaseDate){
    this.movieName = name;
    this.movieDirector = director;
    this.movieGenre = genre;
    this.movieCoverImage = image;
    this.movieReleaseDate = realeaseDate;
};

const movieDatabase = [];



addMovieButton.addEventListener("click", function(event){
    event.preventDefault()
    
    //logic that should happen when selectedbutton is clicked
    //movieName.value => means, we get the selected element (input), with .value we read the value written in the element =)
    let movie = new Movie(movieName.value, movieDirector.value, movieGenre.value, movieCoverImage.value, movieReleaseDate.value);

    movieDatabase.push(movie);

    result.innerHTML = "";
    for(let i = 0; i < movieDatabase.length; i++){
        console.log('Element from current iteration: ',movieDatabase[i])
        result.innerHTML +=
        `
            <div>
                <h2>${movieDatabase[i].movieName}</h2>
                <p>By: ${movieDatabase[i].movieDirector}</p>
                <p>Genre: ${movieDatabase[i].movieGenre}</p>
            </div>
            <hr />
        `
    }
   
});