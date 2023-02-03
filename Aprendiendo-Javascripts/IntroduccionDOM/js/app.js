//formas de acceder a etiquetas del html
console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.domain);

//accerder por id
console.log(document.getElementById("tituloWeb"));
//selecciona el contenido de la etiqueta por id
console.log(document.getElementById("tituloWeb").innerHTML);
console.log(document.getElementById("tituloWeb").textContent);

/* se utiliza para cargar de arriba a abajo, el src="app.js" 
   del script por la estructura DOM cuando esta esta en el <head>
document.addEventListener("DOMContentLoaded",()=>{
    console.log(document.getElementById("tituloWeb"));
    console.log(document.getElementById("tituloWeb").innerHTML);
});
 */

//el "querrySelector" devuelve la primera coincidencia que encuentre
//con id
console.log(document.querySelector("#bWeb"));
//con class
console.log(document.querySelector(".text-primary"));
//con etiqueta
console.log(document.querySelector("p"));

//al agregar "ALL" estoy trayendo todas las coincidencias
console.log(document.querySelectorAll(".text-primary"));

//ahi estoy agregando solo lo que esta adentro del "div"
console.log(document.querySelectorAll(".container .text-primary"));

//guardo el contenido en una constante y lo muestro
const a = document.getElementById("tituloWeb");
console.log(a.id);
console.log(a.tagName);
console.log(a.textContent);

//edito el contenido desde la constante
a.textContent = "nuevo texto desde js";
a.style.background = "black"
a.style.color = "white"

