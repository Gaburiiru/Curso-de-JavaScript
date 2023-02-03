const lista = document.querySelector("#lista");

const elemento = document.createElement("li");
elemento.textContent = "elemento desde js";
console.log(elemento)

lista.appendChild(elemento);
//no se puede agregar un elemento 2 veces al documento html
lista.appendChild(elemento);

//pero si se puede recorrer un array y agregarlo
const arrayPaises = ["argentina","chile","uruguay"];

arrayPaises.forEach((pais)=>{
    const li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);
});

//otra forma de hacerlo es usando "innerHTML" pero se debe asignar "+=" para que no se sobreescriba
const arrayVehiculos = ["auto","moto","camion"];

arrayVehiculos.forEach((vehiculo)=>{
    lista.innerHTML += `<li>${vehiculo}</li>`
});
/*el "innerHTML" te simplifica el tener que usar codigo pero tiene desventajas
 como que no es seguro y hace la pagina mas lenta osea que tenga "reflow"*/

//para trear un array y que no tenga "reflow" se utiliza "Fragment"
//el "Fragment" se ejecuta de manera paralela al DOM hasta ser insertado en el HTML
const fragment = document.createDocumentFragment();
//otra forma seria "const fragmentt = new DocumentFragment;"
const arrayAnimales = ["gato","loro","perro"];

arrayAnimales.forEach((animal)=>{
    const etiqueta = document.createElement("li");
    etiqueta.textContent = animal;
    fragment.appendChild(etiqueta);
});

lista.appendChild(fragment);
//de esta manera se evita el "reflow"

