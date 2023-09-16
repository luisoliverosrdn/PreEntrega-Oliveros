// Simulador "movies randomizer"

// 3 actores ==> 3 peliculas ==> 3 decadas diferentes ==> 3 peliculas de cada decada

// usuario seleccionar 1 actor ==> 1 decada (opcional) ==> return 1 pelicula al azar


function Actor(name, decade1, decade2, decade3, movie1, movie2, movie3) {
    this.name = name;
    this.decade1 = decade1;
    this.decade2 = decade2;
    this.decade3 = decade3;
    this.movie1 = movie1;
    this.movie2 = movie2;
    this.movie3 = movie3;
}

const actor1 = new Actor("adam sandler", "1990s", "2000s", "2010s", "Big Daddy (1999)", "50 first dates (2004)", "Uncut gems (2019)")

const actor2 = new Actor("robert de niro", "1970s", "1980s", "1990s", "Taxi driver (1976)", "Raging Bull (1980)", "Goodfellas(1990)")

const actor3 = new Actor("sylvester stallone", "1970s", "1980s", "1990s", "Rocky (1976)", "Rambo (1982)", "Demolition man (1993)")

alert("Welcome to Movie Randomizer :D")

let userActor = prompt(`Select one of the following actors: Adam Sandler, Robert De Niro or Sylvester Stallone`).toLowerCase();


while (userActor != actor1.name && userActor != actor2.name && userActor != actor3.name) {
    switch (userActor) {
        case actor1.name:
            userActor = actor1.name;
            break;

        case actor2.name:
            userActor = actor2.name;
            break;

        case actor3.name:
            userActor = actor3.name;
            break;

        default:
            alert("Choose one of the options");
            break;
    }
    userActor = prompt("Select one of the following actors: Adam Sandler, Robert De Niro or Sylvester Stallone").toLowerCase();
}

if (userActor === actor1.name) {
    let userDecade = prompt(`Select one of the following decades: ${actor1.decade1}, ${actor1.decade2}, ${actor1.decade3}. To skip press enter.`).toLowerCase()
    
    while (userDecade != actor1.decade1 && userDecade != actor1.decade2 && userDecade != actor1.decade3 && userDecade != "") {
        alert("Please choose one of the options or press enter to skip.");
        userDecade = prompt(`Select one of the following decades: ${actor1.decade1}, ${actor1.decade2}, ${actor1.decade3}. To skip press enter.`).toLowerCase()
    }
    
    if (userDecade === actor1.decade1) {
        alert(`We recommend you to watch: ${actor1.movie1}`)
    } else if (userDecade === actor1.decade2) {
        alert(`We recommend you to watch: ${actor1.movie2}`)
    }
    else if (userDecade === actor1.decade3) {
        alert(`We recommend you to watch: ${actor1.movie3}`)
    }
    else {
        alert(`We recommend you to watch: ${actor1.movie1}`)
    }

} else if (userActor === actor2.name) {
    let userDecade = prompt(`Select one of the following decades: ${actor2.decade1}, ${actor2.decade2}, ${actor2.decade3}. To skip press enter.`).toLowerCase()
    
    while (userDecade != actor2.decade1 && userDecade != actor2.decade2 && userDecade != actor2.decade3 && userDecade != "") {
        alert("Please choose one of the options or press enter to skip.");
        userDecade = prompt(`Select one of the following decades: ${actor2.decade1}, ${actor2.decade2}, ${actor2.decade3}. To skip press enter.`).toLowerCase()
    }

    if (userDecade === actor2.decade1) {
        alert(`We recommend you to watch: ${actor2.movie1}`)
    } else if (userDecade === actor2.decade2) {
        alert(`We recommend you to watch: ${actor2.movie2}`)
    }
    else if (userDecade === actor2.decade3) {
        alert(`We recommend you to watch: ${actor2.movie3}`)
    }
    else {
        alert(`We recommend you to watch: ${actor2.movie1}`)
    }
} else if (userActor === actor3.name) {
    let userDecade = prompt(`Select one of the following decades: ${actor3.decade1}, ${actor3.decade2}, ${actor3.decade3}. To skip press enter.`).toLowerCase()

    while (userDecade != actor3.decade1 && userDecade != actor3.decade2 && userDecade != actor3.decade3 && userDecade != "") {
        alert("Please choose one of the options or press enter to skip.");
        userDecade = prompt(`Select one of the following decades: ${actor3.decade1}, ${actor3.decade2}, ${actor3.decade3}. To skip press enter.`).toLowerCase()
    }

    if (userDecade === actor3.decade1) {
        alert(`We recommend you to watch: ${actor3.movie1}`)
    } else if (userDecade === actor3.decade2) {
        alert(`We recommend you to watch: ${actor3.movie2}`)
    }
    else if (userDecade === actor3.decade3) {
        alert(`We recommend you to watch: ${actor3.movie3}`)
    }
    else {
        alert(`We recommend you to watch: ${actor3.movie1}`)
    }

}



