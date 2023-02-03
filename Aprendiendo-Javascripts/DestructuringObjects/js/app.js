const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    //edad:10, //Int
    enemigos:['agua','perros'], //array
    otros:{
        amigos:["el pepe","ete sech","winigtow"]
    }
};

//estoy asignando el nombre y guardandolo en una constante
const nombre = gato.nombre;
console.log(nombre);

//estoy desustructurando el objeto gato para tomar sus valores y guardalos en una constante
/*cuando utilizo "nombre:" estoy asignandole un "alias" para no generar conflicto 
entre los nombres de las variables*/
/*cuando utilizo "edad=''" estoy asigandole un string por defecto a la variable si no llega
a encontrar el valor*/
const { nombre : nombreGato = 'sin nombre', duerme, edad = 'recien nacido'} = gato;
console.log(nombreGato,duerme,edad);

const {amigos: amigosArray} = gato.otros
console.log(amigosArray);

//desectruturando array
const [amigo1, amigo2,amigo3] = amigosArray;
console.log(amigo1,'y ' + amigo3);
