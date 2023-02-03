const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    edad:10, //Int
    enemigos:['agua','perros']
};

//El "for in" se utiliza solo para recorrer objetos, el "for of" para recorrer arrays
//recorro las propiedades
for(let propiedad in gato){
    console.log(propiedad);
}
//recorro los valores de las propiedades
for(let propiedad in gato){
    console.log(gato[propiedad]);
}
//devuelve los valores de las propiedades del objeto en un array
console.log(Object.values(gato));
//devuelve los valores de las propiedades
Object.values(gato).forEach(i => console.log(i));

//devuelve un array de pares [propiedad, valor] 
console.log(Object.entries(gato));

/* devuelve un array cuyos elementos son strings correspondientes a las propiedades
 enumerables que se encuentran directamente en el object. */
console.log(Object.keys(gato));

/*devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.*/
console.log(Object.getOwnPropertyNames(gato));