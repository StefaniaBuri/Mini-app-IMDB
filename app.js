//--------Profesionales----------

//------ CLASE-------
class Professional{

    constructor( id, name, age, genre, isRetired, nationality, profession){
            this.id=id;
            this.name=name;
            this.age=age;
            this.genre=genre;
            this.isRetired=isRetired;
            this.nationality=nationality;
            this.profession=profession;
        }
}


//-------- FETCH PETICIONES----------
//------  GET----------
function getProfesional(){
    let id= document.getElementById("id").value;
    
    let url = "http://localhost:3000/profesionales";

    if(id != ""){
        url = "http://localhost:3000/profesionales?id=" + id;
    }

    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method:"GET"
    }
    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        if(Array.isArray(result) == true){
        
            for(let i= 0; i< result.length; i++){
               
                document.getElementById("profesionales").innerHTML += `
                Id: ${result[i].id}, 
                Nombre: ${result[i].name}, 
                Age: ${result[i].age},
                Genre: ${result[i].genre}, 
                is Retired?: ${result[i].isRetired}, 
                Nationality: ${result[i].nationality},
                Profession: ${result[i].profession} 
                `;
            }
            
        }else{
           
            document.getElementById("name").value= result.name;
            document.getElementById("age").value= result.age;
            document.getElementById("genre").value= result.genre;
            document.getElementById("retired").value= result.isRetired;
            document.getElementById("nationality").value= result.nationality;
            document.getElementById("profession").value= result.profession;
        }
    })

    .catch (function(error){
        console.log(error)
    })
}


//_________ POST ____________

function postProfesional (){

    let profesional = new Professional(
        document.getElementById("id").value,
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("genre").value,
        document.getElementById("retired").value,
        document.getElementById("nationality").value,
        document.getElementById("profession").value)

    const url = "http://localhost:3000/profesionales";

    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(profesional),
        method: "POST"
    }


    fetch(url, param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    })
}


// ----------Movies------------
// ------- CLASES

class Movie{
    constructor( title, releaseYear, nationality, genre, director, picture){
        this.title=title;
        this.releaseYear=releaseYear;
        this.nationality = nationality;
        this.genre=genre;
        this.director=director;
        this.picture=picture;
    }
}
class Imdb{
constructor(peliculas){
    this.peliculas=peliculas;
}
}


//CARTELERA DE PELICULAS
//--------------PELICULA 1-----------

var movie1 = new Movie("Squid Game", 2021, "South Korea", "Action");
movie1.director = "Heo Sung-tae";
movie1.actors = ["Lee Jung-jae", "Jung Hoyeon", "Park Hae-soo"];
movie1.writer ="Lee Byung-hun";
movie1.producer = "Bao Sung-hun";
movie1.language = "Korean";
movie1.plataform = "Netflix";
movie1.isMCU = false;
movie1.mainCharacterName = "Lee Jung-jae";
movie1.distributor = "Universal Studios";
movie1.picture = "https://pics.filmaffinity.com/squid_game_tv_series-678089983-large.jpg";

//-----------PELICULA 2---------------------
var movie2 = new Movie("Dune", 2021, "USA", "Sci-Fi");
movie2.director = "Denis Villeneuve";
movie2.actors = ["Timothée Chalamet", "Zendaya", "Jason Momoa"];
movie2.writer = "Eric Roth";
movie2.producer = "Jon Spaihts";
movie2.language = "English";
movie2.plataform = "Disney+";
movie2.isMCU = true;
movie2.mainCharacterName = "Jason Momoa";
movie2.distributor = "The Lions Studios";
movie2.picture = "https://pics.filmaffinity.com/dune-756528084-large.jpg";


//-----------PELICULA 3--------
var movie3 = new Movie("Vengadores: Endgame", 2019, "USA", "Action");
movie3.director = "Anthony Russo";
movie3.actors = ["Robert Downey Jr.", "Scarlett Johanson","Chris Evans"];
movie3.writer = "Jon Spaihts";
movie3.producer = "Stan Lee";
movie3.language = " English";
movie3.plataform = "HBO";
movie3.isMCU = true;
movie3.mainCharacterName = "Chris Evans";
movie3.distributor = "Island Records";
movie3.picture = "https://pics.filmaffinity.com/avengers_endgame-135478227-large.jpg";

//-----------PELICULA 4--------
var movie4 = new Movie("Free Guy", 2021, "USA", "Action");
movie4.director = "Shawn Levy";
movie4.actors = ["Ryan Reynolds", "Jodie Comer", "Channing Tatum"];
movie4.writer ="Zak Penn";
movie4.producer = "Matt Lieberman";
movie4.language = " English";
movie4.plataform = "HBO";
movie4.isMCU = false;
movie4.mainCharacterName = "Ryan Reynolds";
movie4.distributor = "20th Century Studios";
movie4.picture = "https://pics.filmaffinity.com/free_guy-297648487-large.jpg";

//-- objeto ---
let peliculas = [movie1,movie2, movie3, movie4]

let imdb1 = new Imdb (peliculas);


//-------- FUNCIONES------

function postMovie(){
    //Creamos variables que guardan los valores del formulario
    var title = document.querySelector("#title").value;
    var release = document.querySelector("#release").value;
    var nationality = document.querySelector("#nationality").value;
    var genre = document.querySelector("#genre").value;
    var director = document.querySelector("#director").value;
    var picture = document.querySelector("#picture").value;


    //creamos objeto Movie que guarda los datos rellenados
    let movieNew = new Movie(title, release, nationality, genre);
    movieNew.director = director;
    movieNew.picture = picture;

    //introducimos la nueva pelicula a nuestra cartelera
    peliculas.push(movieNew);

    //Mostramos esos valores en el id=movies
    document.getElementById("movies").innerHTML += `
    Title: ${title}, 
    Release year: ${release}, 
    Nationality: ${nationality},
    Genre: ${genre}, 
    Director: ${director},
    Picture: ${picture},
    `;

}


function getMovie(){
    for(let i= 0; i< peliculas.length; i++){
               
        document.getElementById("movies").innerHTML += ` 
        Title: ${peliculas[i].title},
        Release Year: ${peliculas[i].releaseYear},
        Nationality: ${peliculas[i].nationality},
        Genre: ${peliculas[i].genre},
        Director: ${peliculas[i].director},
        Actors: ${peliculas[i].actors},
        Writer: ${peliculas[i].writer},
        Producer: ${peliculas[i].producer},
        Language: ${peliculas[i].language},
        Plataform: ${peliculas[i].plataform},
        isMCU?: ${peliculas[i].isMCU},
        Main Character: ${peliculas[i].mainCharacterName},
        Distributor: ${peliculas[i].distributor},
        Picture: ${peliculas[i].picture},
        `;
    }
}


