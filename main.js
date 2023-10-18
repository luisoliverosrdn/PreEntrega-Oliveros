// Simulador "movies randomizer"

// 3 actores  ==> 3 decadas diferentes ==> 3 peliculas de cada decada

// usuario seleccionar 1 actor ==> 1 decada (opcional) ==> return 1 pelicula al azar

function Movie(name, year, actorName, posterURL) {
  this.name = name;
  this.year = year;
  this.actorName = actorName;
  this.posterURL = posterURL;
}


const moviesByActor = {
  "adam sandler": [
    new Movie("Big Daddy", 1999, "adam sandler", "media/sandlerMovies/bigDaddy.jpg"),
    new Movie("Happy Gilmore", 1996, "adam sandler", "media/sandlerMovies/happyGilmore.webp"),
    new Movie("Billy Madison", 1995, "adam sandler", "media/sandlerMovies/billyMadison.jpg"),
    new Movie("Punch-Drunk love", 2002, "adam sandler", "media/sandlerMovies/punchDrunkLove.jpg"),
    new Movie("50 First dates", 2004, "adam sandler", "media/sandlerMovies/50First.webp"),
    new Movie("The Longest Yard", 2005, "adam sandler", "media/sandlerMovies/longestYard.jpg"),
    new Movie("Uncut gems", 2019, "adam sandler", "media/sandlerMovies/uncutGems.jpg"),
    new Movie("Grown ups", 2010, "adam sandler", "media/sandlerMovies/grownUps.webp"),
    new Movie("Just Go with It", 2011, "adam sandler", "media/sandlerMovies/justGo.webp")
  ],

  "robert de niro": [
    new Movie("The Godfather 2", 1974, "robert de niro", "media/deniroMovies/godfather.jpg"),
    new Movie("Taxi Driver", 1976, "robert de niro", "media/deniroMovies/taxiDriver.webp"),
    new Movie("The Deer Hunter", 1978, "robert de niro", "media/deniroMovies/deerHunter.jpg"),
    new Movie("Raging bull", 1980, "robert de niro", "media/deniroMovies/ragingbul.webp"),
    new Movie("The King of Comedy", 1982, "robert de niro", "media/deniroMovies/kingComedy.jpg"),
    new Movie("Once upon a time in America", 1984, "robert de niro", "media/deniroMovies/onceUpon.jpg"),
    new Movie("Goodfellas", 1990, "robert de niro", "media/deniroMovies/goofellas.jpg"),
    new Movie("Casino", 1995, "robert de niro", "media/deniroMovies/casino.webp"),
    new Movie("Heat", 1995, "robert de niro", "media/deniroMovies/heat.webp")
  ],

  "leonardo dicaprio": [
    new Movie("Titanic", 1997, "leonardo dicaprio", "media/dicaprioMovies/titanic.jpg"),
    new Movie("This Boy's Life", 1993, "leonardo dicaprio", "media/dicaprioMovies/boysLife.jpg"),
    new Movie("Romeo + Juliet", 1996, "leonardo dicaprio", "media/dicaprioMovies/romeo.jpg"),
    new Movie("The Aviator", 2004, "leonardo dicaprio", "media/dicaprioMovies/aviator.jpg"),
    new Movie("Gangs of New York", 2002, "leonardo dicaprio", "media/dicaprioMovies/gangsNY.jpg"),
    new Movie("The Departed", 2006, "leonardo dicaprio", "media/dicaprioMovies/departed.webp"),
    new Movie("The Wolf of Wallstreet", 2013, "leonardo dicaprio", "media/dicaprioMovies/wolf.jpg"),
    new Movie("Shutter Island", 2010, "leonardo dicaprio", "media/dicaprioMovies/shutter.webp"),
    new Movie("The Revenant", 2015, "leonardo dicaprio", "media/dicaprioMovies/revenant.jpg")
  ]
}

const moviesJSON = JSON.stringify(moviesByActor);

function anyRandomMovie() {
  const actorKeys = Object.keys(moviesByActor);
  const selectedActor = moviesByActor[actorKeys[Math.floor(Math.random() * actorKeys.length)]];
  let randomMovieResult = selectedActor[Math.floor(Math.random() * selectedActor.length)];
   
  // Movie recommendation Card
  const card = document.createElement("div");
   card.classList.add("actorsCard");
   card.classList.add("anyRandomMovie");
   card.innerHTML = `
   <img src=${randomMovieResult.posterURL} alt="">
   <h2>${randomMovieResult.name}(${randomMovieResult.year})</h2>
   <h3> Starring: ${randomMovieResult.actorName}</h3>
   `;

   // Message above card
   const instructionsContainer = document.getElementById("instructionsContainer");
   const instructions = document.createElement("h2");
   instructions.classList.add("instructionsStyle");
   instructions.innerText = "We recommend you to watch:";

  instructionsContainer.appendChild(instructions);
   container.appendChild(card);
}

function randomMovie(selectedActor) {
  randomMovieResult = selectedActor[Math.floor(Math.random() * selectedActor.length)];
   const card = document.createElement("div");
   card.classList.add("actorsCard");
   card.innerHTML = `
   <img src=${randomMovieResult.posterURL} alt="">
   <h2>${randomMovieResult.name} (${randomMovieResult.year})</h2>
   `;
   const cardRecomendation = document.createElement("div");
   cardRecomendation.classList.add("actorsCard");
   cardRecomendation.classList.add("cardInstructions");
   cardRecomendation.innerHTML = `
   <h2>We recommend you to watch:</h2>
   `;
   container.appendChild(cardRecomendation)
   container.appendChild(card);
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

function removeCard(remove1, remove2, remove3, remove4){
  const removeCard1 = document.getElementById(remove1);
  removeCard1.remove();
  const removeCard2 = document.getElementById(remove2);
  removeCard2.remove();
  const removeCard3 = document.getElementById(remove3);
  removeCard3.remove();
  const removeCard4 = document.getElementById(remove4);
  removeCard4.remove();
}

function createDecadesCard(selectedActor){

  const availableDecades = getAvailableDecades(selectedActor);
  const cardInstructions = document.createElement("div");
  cardInstructions.classList.add("actorsCard");
  cardInstructions.classList.add("cardInstructions");
  const instructions = document.createElement("h2");
  instructions.classList.add("instructionsStyle");
  instructions.innerText = "Select one of the following decades:";
  cardInstructions.appendChild(instructions);
  //Creating card with available decades
  const cardDecades = document.createElement("div");
  cardDecades.classList.add("actorsCard");
  // Creating buttons with events
  availableDecades.forEach(decade => {
    const newDecade = document.createElement("button");
    newDecade.innerText = `${decade}`;
    newDecade.classList.add("btn");
    newDecade.classList.add("btnDecades");
    newDecade.addEventListener("click", function(){
      cardInstructions.remove();
      cardDecades.remove();
      const userDecade = decade;
      const moviesByDecade = selectedActor.filter((movie) => {
        return movie.year >= userDecade && movie.year < userDecade + 10;
      });
    
      randomMovie(moviesByDecade);
    })
    cardDecades.appendChild(newDecade)
  });

  // Button to skip choosing decade
  const chooseAny = document.createElement("button");
  chooseAny.classList.add("btn");
  chooseAny.innerText = "I'll watch anything";
  chooseAny.addEventListener("click", function(){
    cardInstructions.remove();
    cardDecades.remove();
    randomMovie(userActor);
  });
  
  container.appendChild(cardInstructions);
  container.appendChild(cardDecades);
  cardDecades.appendChild(chooseAny);
};

const container = document.getElementById("container");
let userActor;

const sandlerSelected = document.getElementById("select_sandler");
const deniroSelected = document.getElementById("select_deniro");
const dicaprioSelected = document.getElementById("select_dicaprio");
const randomMovieBtn = document.getElementById("randomMovieBtn");

randomMovieBtn.addEventListener("click", function() {
  anyRandomMovie();
  removeCard("sandler", "deniro", "dicaprio","instructions");
  randomMovieBtn.remove();
})

sandlerSelected.addEventListener("click", function () {
  userActor = moviesByActor["adam sandler"];
  removeCard("deniro", "dicaprio","select_sandler", "instructionsContainer");
  randomMovieBtn.remove();
  createDecadesCard(userActor);
});

deniroSelected.addEventListener("click", function () {
  userActor = moviesByActor["robert de niro"];
  removeCard("sandler", "dicaprio", "select_deniro", "instructionsContainer");
  randomMovieBtn.remove();
  createDecadesCard(userActor);
});

dicaprioSelected.addEventListener("click", function () {
  userActor = moviesByActor["leonardo dicaprio"];
  removeCard("deniro","sandler", "select_dicaprio", "instructionsContainer");
  randomMovieBtn.remove();
  createDecadesCard(userActor);
});








