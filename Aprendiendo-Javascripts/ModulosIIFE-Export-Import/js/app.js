//Modulo IIFE
(()=>{
    const fruta = "🍉";
    console.log(fruta)
})()
//                      se puede utilizar el as para renombrar
import {humano,frutilla as fresa,Fruta} from "./fruta.js"

console.log(humano);

fresa();

const cereza = new Fruta("🍒")
console.log(cereza);

//aunque use otro "nombre" me va a traer por defecto la pc
import computadora from "./fruta.js"
console.log(computadora)
