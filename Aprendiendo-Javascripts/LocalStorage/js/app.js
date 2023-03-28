//local storage solo guarda "String" po lo que solo guarda 5mb
//local storage guarda todo en el navegador desde la ip de ese navegdaor/dispositivo
//Session storage solo guarda hasta que se cierre el navegador

//Envio con SET
localStorage.setItem("kiwi","🥝");
localStorage.setItem("uva","🍇");
localStorage.setItem("coco","🥥");

//Recibo con GET
const kiwi = localStorage.getItem("kiwi");
console.log(kiwi);

//pregunto si existe ese valor en local storage
//y lo guardo en una constante para mostrarlo por consola
if(localStorage.getItem("uva")){
    const uva = localStorage.getItem("uva");
    console.log(uva);
}

//Elimino con Remove
localStorage.removeItem("kiwi");

//Elimina todo lo que tengas guardado
localStorage.clear();

const frutas = [
    {
        nombre:"🍊",
        color:"naranja",
    },
    {
        nombre:"🍋",
        color:"amarillo",
    },
    {
        nombre:"🍐",
        color:"verde",
    }
]
//transformo el objeto FRUTAS en un "String"
localStorage.setItem("frutas",JSON.stringify(frutas));

//transformo el string en Objeto y lo muestro
if(localStorage.getItem("frutas")){
    const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"));
    console.log(frutasDesdeLocal);
}