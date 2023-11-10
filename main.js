
const url = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTQ0Nzg1YzkyNTRlNDAwYTUxZDM1NGU0YmFjZmZlOSIsInN1YiI6IjY1NGNlOGQ2NWE1ZWQwMDBhZDU4MWRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wMkcTOZYRcn3Lgdd3u9RaSh364iT7RWn7qscoOWPGLU'
  }
};

const container = document.getElementById("container");
const containerActors = document.getElementById("containerActors");

function removeElementById(elementId) {
  const element = document.getElementById(elementId);
  element.remove();

}

const randomMovieBtn = document.getElementById("randomMovieBtn");
randomMovieBtn.addEventListener("click", () => {
  anyRandomMovie();
})


// Search bar 
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", () => {
  let searchInput = document.getElementById('searchBar').value.trim().toLowerCase();
  let inputWithoutSpace = searchInput.replace(/ /g, "%20");

  // Using API

  fetch(`${url}/search/person?query=${inputWithoutSpace}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(data => {
      let inputId = data.results[0].id;
      let inputInfo = data.results[0];
      let inputKnown = data.results[0].known_for_department;

      const card = document.createElement("div");
      card.classList.add("actorsCard");

      card.innerHTML = `
    <img src=https://image.tmdb.org/t/p/w500${inputInfo.profile_path} alt="">
    <h2>${inputInfo.name}</h2>
    <h3> Known for: ${inputKnown}</h3>
    `;
      containerActors.innerHTML = "";
      containerActors.appendChild(card);
      container.appendChild(containerActors);
      randomMovie(inputId, inputKnown);
    })
    .catch(err => console.error(err));


}
);



function anyRandomMovie() {

  let pageNumber = Math.floor(Math.random() * 500);
  fetch(`${url}/movie/top_rated?language=en-US&page=${pageNumber}`, options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let randomMovie = data.results;
      randomMovie = randomMovie[Math.floor(Math.random() * randomMovie.length)]

      // Movie recommendation Card
      const card = document.createElement("div");
      card.classList.add("actorsCard");
      card.classList.add("anyRandomMovie");
      card.innerHTML = `
  <img src=https://image.tmdb.org/t/p/w500${randomMovie.poster_path} alt="">
  <h2>${randomMovie.title} (${randomMovie.release_date.slice(0, 4)})</h2>
  `;

      const cardRecomendation = document.createElement("div");
      cardRecomendation.classList.add("actorsCard");
      cardRecomendation.classList.add("cardInstructions");
      cardRecomendation.innerHTML = `
  <h2>We recommend you to watch:</h2>
  `;
      removeElementById("randomMovieBtn");
      const btnContainer = document.getElementById("btn_container");
      const saveWatchlist = document.createElement("button");
      saveWatchlist.classList.add("btn");
      saveWatchlist.id = "randomMovieBtn";
      saveWatchlist.innerText = `Save to watchlist!`;
      saveWatchlist.addEventListener("click", () => { addWatchlist(randomMovie) });
      const getWatchlist = document.createElement("button");
      getWatchlist.classList.add("btn");
      getWatchlist.id = "randomMovieBtn";
      getWatchlist.innerText = `My watchlist!`;
      getWatchlist.addEventListener("click", displayWatchlist);
      btnContainer.appendChild(saveWatchlist);
      btnContainer.appendChild(getWatchlist);
      containerActors.appendChild(cardRecomendation);
      containerActors.appendChild(card);

    })
    .catch(err => console.error(err));
}




// Random movie function
function randomMovie(nroId, known) {

  fetch(`${url}/person/${nroId}/movie_credits?language=en-US`, options)
    .then(response => response.json())
    .then(data => {

      let randomMovieResult;

      if (known != "Acting") {
        do {

          randomMovieResult = data.crew[Math.floor(Math.random() * data.crew.length)];

        } while (known != randomMovieResult.department || randomMovieResult.popularity < 15);
      } else {
        do {

          randomMovieResult = data.cast[Math.floor(Math.random() * data.cast.length)];

        } while (randomMovieResult.popularity < 15);
      }

      removeElementById("randomMovieBtn");
      const card = document.createElement("div");
      card.classList.add("actorsCard");
      card.innerHTML = `
  <img src=https://image.tmdb.org/t/p/w500${randomMovieResult.poster_path} alt="">
  <h2>${randomMovieResult.original_title} (${randomMovieResult.release_date.slice(0, 4)})</h2>
  `;
      const cardRecomendation = document.createElement("div");
      cardRecomendation.classList.add("actorsCard");
      cardRecomendation.classList.add("cardInstructions");
      cardRecomendation.innerHTML = `
  <h2>We recommend you to watch:</h2>
  `;
      const btnContainer = document.getElementById("btn_container");
      const saveWatchlist = document.createElement("button");
      saveWatchlist.classList.add("btn");
      saveWatchlist.id = "randomMovieBtn";
      saveWatchlist.innerText = `Save to watchlist!`;
      saveWatchlist.addEventListener("click", () => { addWatchlist(randomMovieResult) });
      const getWatchlist = document.createElement("button");
      getWatchlist.classList.add("btn");
      getWatchlist.id = "randomMovieBtn";
      getWatchlist.innerText = `My watchlist!`;
      getWatchlist.addEventListener("click", displayWatchlist);
      btnContainer.appendChild(saveWatchlist);
      btnContainer.appendChild(getWatchlist);
      containerActors.appendChild(cardRecomendation);
      containerActors.appendChild(card);
    })
    .catch(err => console.error(err));

}

function getWatchlist() {
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

  return watchlist;
}


function addWatchlist(movieToAdd) {
  const newMovie = {
    title: movieToAdd.title,
    poster: `https://image.tmdb.org/t/p/w500${movieToAdd.poster_path}`,
    year: movieToAdd.release_date.slice(0, 4)
  };

  const watchlist = getWatchlist();
  watchlist.push(newMovie);
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
  removeElementById("randomMovieBtn");
}

function displayWatchlist() {

  const watchlist = getWatchlist();
  containerActors.innerHTML = "";
  watchlist.forEach(e => {
    const card = document.createElement("div");
    card.classList.add("actorsCard");
    card.classList.add("anyRandomMovie");
    card.innerHTML = `
  <img src=https://image.tmdb.org/t/p/w500${e.poster} alt="">
  <h2>${e.title} (${e.year})</h2>
  `;
    containerActors.appendChild(card);
  })

  container.appendChild(containerActors);
}
