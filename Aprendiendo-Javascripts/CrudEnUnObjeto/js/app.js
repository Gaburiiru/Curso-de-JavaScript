const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    edad:10, //Int
    enemigos:['agua','perros'] //Array
}

//Create / Crear
gato.color = "naranja";

//Update / Actualizar
gato.edad = 5;

//Delete / Borrar
delete gato.duerme;

console.log(gato);

//corroborar existencia de propiedad en un objeto,devuelve True o False
console.log(gato.hasOwnProperty("edad"));
console.log(gato.hasOwnProperty("apellido"));

