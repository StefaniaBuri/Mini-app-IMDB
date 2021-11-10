const { request, response } = require('express');
const express = require('express');
const app = express ();
let cors = require('cors');
app.use(cors());
const {Professional}  = require('./profesional')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


let profesionales = [
    professional1 = new Professional("0","Ana", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz"),
    professional2 = new Professional("1","Sara", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz"),
    professional3 = new Professional("2","Pedro", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actor"),
    professional4 = new Professional("3","Juan", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director"),
    professional5 = new Professional("4","Roberto", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director"),
    professional6 = new Professional("5","Marco", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "writer"),
    professional7 = new Professional("6","María", 68, "mujer", 60, 165, "castaño", "negro", "española", false, "española", 1, "writer"),
   ];

app.get("/", function(request, response){
    let respuesta = ({error:true, codigo:200, mensaje: "Punto de inicio"})
    response.send(respuesta)
});


//---------METODOS----------

app.get('/profesionales', (request, response) => {
    
    const { id } = request.query;
    
    if(id == null && profesionales.length != 0){
        response.send(profesionales);
    }else if(id != null && profesionales.length != 0){
        response.send(profesionales[id]);
    }
    else{
        response.send ={error: true, codigo: 200, mensaje: "El profesional no existe"}
    }
    
});


app.post('/profesionales', (request, response) => {
    const id = profesionales.length;
    const newProfessional = {...request.body, id};
        profesionales.push(newProfessional);
        response.send({error: true, codigo: 200, mensaje: "El profesional ha sido agregado", resultado: newProfessional});
});


app.put('/profesionales', (request, response) => {
 
    let respuesta;
    let i = request.body.id;
    if(profesionales.length == 0){
        respuesta = {error: true, codigo: 200, mensaje: "Los campos estan vacios", resultado: profesionales}
    }
    else {
        profesionales[i].name = request.body.name;
        profesionales[i].age = request.body.age;
        profesionales[i].genre = request.body.genre;
        profesionales[i].weight = request.body.weight;
        profesionales[i].height = request.body.height;
        profesionales[i].hairColor = request.body.hairColor;
        profesionales[i].eyeColor = request.body.eyeColor;
        profesionales[i].race = request.body.race;
        profesionales[i].isRetired = request.body.isRetired;
        profesionales[i].nationality = request.body.nationality;
        profesionales[i].oscarNumbers = request.body.oscarNumbers;
        profesionales[i].profession = request.body.profession;

        respuesta = {error: true, codigo: 200, mensaje: "El Profesional ha sido actualizado", resultado:profesionales};
    }
    
    response.send(respuesta);
});


app.delete('/profesionales', (request, response) => {
    console.log(request.body);
    let i = request.body.id;
    if(profesionales.length > i){
        profesionales.splice(i,1);
        response.send({error: true, codigo: 200, mensaje: "El profesional ha sido eliminado", resultado: profesionales});
    }
    else{
        response.send({error: true, codigo: 200, mensaje: "El Profesional no ha sido eliminado"});
    }
    console.log(profesionales);
 });



app.use(function(request, response, next){
    respuesta = {error: true, codigo: 404, mensaje: "URL no encontrada"};
    response.status(404).send(respuesta);
})

app.listen(3000);