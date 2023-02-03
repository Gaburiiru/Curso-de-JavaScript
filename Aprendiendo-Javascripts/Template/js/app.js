const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate");

const arrayPaises = ["argentina","chile","uruguay"];

/*usar el content es de solo lectura por lo que si quiero agregarle un "addEventListener"
para mandar algo por consola tengo que usar la propiedad "firstElementChild" 
seguido de la propiedad "content".
*/
const clickPaises = (e) => console.log("me diste click",e.target);

arrayPaises.forEach((pais)=>{
    const clone = liTemplate.content.firstElementChild.cloneNode(true);
    clone.querySelector(".text-primary").textContent = pais;
    clone.addEventListener("click",clickPaises);
    fragment.appendChild(clone);
});

lista.appendChild(fragment)


// const clone = liTemplate.content.cloneNode(true);

// clone.querySelector(".text-primary").textContent =
// "agregue texto atravez del template";

// lista.appendChild(clone);

