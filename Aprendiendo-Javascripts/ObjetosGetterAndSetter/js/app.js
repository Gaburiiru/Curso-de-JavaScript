const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    edad:10, //Int
    enemigos:['agua','perros'], //array
    //el "get no recibe ningun parametro"
    get nombreMayuscula(){
        return this.nombre.toUpperCase();
    },
    //el "set" recibe un solo parametro
    set agregarEnemigo(nuevoEnemigo){
        this.enemigos.push(nuevoEnemigo)
    }
};

console.log(gato.nombreMayuscula);
gato.agregarEnemigo = 'abejas'
console.log(gato.enemigos);