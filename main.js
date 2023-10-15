// Simulador "movies randomizer"

// 3 actores ==> 3 peliculas ==> 3 decadas diferentes ==> 2 peliculas de cada decada

// usuario seleccionar 1 actor ==> 1 decada (opcional) ==> return 1 pelicula al azar

function Movie(name,year, actorName){
    this.name = name;
    this.year = year;
    this.actorName = actorName;
}


const moviesByActor = {
    "adam sandler": [
        new Movie("Big Daddy", 1999, "adam sandler"),
        new Movie("Happy Gilmore", 1996, "adam sandler"),
        new Movie("Punch-Drunk love", 2002, "adam sandler"),
        new Movie("50 First dates", 2004, "adam sandler"),
        new Movie("Uncut gems", 2019, "adam sandler"),
        new Movie("Grown ups", 2010, "adam sandler"),
    ],

    "robert de niro":[
        new Movie("The Godfather 2", 1974, "robert de niro"),
        new Movie("Taxi Driver", 1976, "robert de niro"),
        new Movie("Raging bull", 1980, "robert de niro"),
        new Movie("Once upon a time in America", 1984, "robert de niro"),
        new Movie("Goodfellas", 1990, "robert de niro"),
        new Movie("Heat", 1995, "robert de niro")
    ],

    "leonardo dicaprio":[
        new Movie("Titanic", 1997, "leonardo dicaprio"),
        new Movie("Romeo + Juliet", 1996, "leonardo dicaprio"),
        new Movie("The Aviator", 2004, "leonardo dicaprio"),
        new Movie("The Departed", 2006, "leonardo dicaprio"),
        new Movie("The Wolf of Wallstreet", 2013, "leonardo dicaprio"),
        new Movie("Shutter Island", 2010, "leonardo dicaprio")
    ]
}

function randomMovie(selectedActor){
    randomMovieResult = selectedActor[Math.floor(Math.random()*selectedActor.length)];
    alert(`We recommend you to watch ${randomMovieResult.name} (${randomMovieResult.year})`)
}


function getAvailableDecades(selectedActor) {
    const decades = selectedActor.reduce((decades, movie) => {
      const decade = Math.floor(movie.year / 10) * 10;
      if (!decades.includes(decade)) {
        decades.push(decade);
      }
      return decades;
    }, []);
  
    return decades.sort();
  }

function selectDecade(selectedActor){

    const availableDecades = getAvailableDecades(selectedActor);
    let userDecade;
  
    while (true) {
      userDecade = prompt(
        `Select one of the following decades: ${availableDecades.join(", ")}. To skip, type 'skip'.`
      );
  
      if (userDecade === "") {
        const randomActorMovie = randomMovie(selectedActor);
        alert(`We recommend you to watch ${randomActorMovie.name} (${randomActorMovie.year})`);
        return;
      }
  
      if (userDecade === "skip") {
        break;
      }
  
      userDecade = parseInt(userDecade);
  
      if (isNaN(userDecade) || !availableDecades.includes(userDecade)) {
        alert("Invalid selection. Please try again.");
      } else {
        break;
      }
    }
  
    const moviesByDecade = selectedActor.filter((movie) => {
      return movie.year >= userDecade && movie.year < userDecade + 10;
    });
  
    randomMovie(moviesByDecade);
  }

let userActor;

const sandlerSelected = document.getElementById("select_sandler");
const deniroSelected = document.getElementById("select_deniro");
const dicaprioSelected = document.getElementById("select_dicaprio");

sandlerSelected.addEventListener("click", function(){
  userActor = moviesByActor["adam sandler"];
});
deniroSelected.addEventListener("click", function(){
  userActor = moviesByActor["robert de niro"];
});
dicaprioSelected.addEventListener("click", function(){
  userActor = moviesByActor["leonardo dicaprio"];
});
do {
    userActor = prompt(`Select one of the following actors: Adam Sandler, Robert De Niro or Leonardo Dicaprio`).toLowerCase();
    if (userActor === "adam sandler") {
            
            userActor = moviesByActor["adam sandler"];

    }else if (userActor === "robert de niro") {
            userActor = moviesByActor["robert de niro"];

    }else if(userActor === "leonardo dicaprio"){
            userActor = moviesByActor["leonardo dicaprio"];
    }else{
            alert("Choose one of the options");
    }
}while (userActor != moviesByActor["adam sandler"] && userActor != moviesByActor["robert de niro"] && userActor != moviesByActor["leonardo dicaprio"])

selectDecade(userActor)





