const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    edad:10, //Int
    enemigos:['agua','perros'] //Array
}
//forma de llamar al objeto entero 
console.log(gato);
//forma de acceder a una propiedad del objeto
console.log(gato.nombre);
//forma de acceder a el indece del array dentro de la propiedad enemigos
console.log(gato.enemigos[1]);
// otra forma de llamar una propiedad del objeto es usando "['']".
console.log(gato['enemigos']);