const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    edad:10, //Int
    enemigos:['agua','perros'], //Array
    comer: function(){  //Metodo dentro de un objeto
        console.log("gato comiendo");
    },
    dormir(){ //otra forma de escribir un metodo
        console.log("gato durmiendo");
    },
    jugar(juguete){  //Metodo recibe parametro
        console.log("gato jugando con: "+ juguete);
    },
    acariado(humano){console.log(`
        ${this.nombre} esta siendo acariciado por ${humano}
    `)}, //"this" hace referencia al objeto dentro del scope "this"="gato"
    listarEnemigos(){
        this.enemigos.forEach((i) => console.log(i));
    } //utilizo funcion de flechas dentro de un forEach para recorrer array dentro de un metodo
}     /*dentro de la funcion de flecha no se utiliza 
                    "this" ni "super"
         pero si dentro del scope del metodo*/
console.log(gato);

//llamo a los metodos dentro del objeto
gato.comer();
gato.dormir();
gato.jugar('pelota de minbre');
gato.acariado('gabo')
gato.listarEnemigos();