const gato = {
    nombre:"juan carlos", //String
    duerme:"true", //Boolean
    edad:10, //Int
    enemigos:['agua','perros'], //Array
    otros: {
        amigos:['el pepe','ete sech'],
        favoritos: {
            comida: {
                frio:'salmon',
                caliente:'pollito'
            }
        }
    }
}

console.log(gato.otros.favoritos.comida);
console.log(gato.otros.amigos[0])