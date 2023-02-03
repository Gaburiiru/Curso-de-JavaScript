const lista = document.querySelector("#lista");
const arrayPaises = ["argentina","chile","uruguay"];
const fragment = document.createDocumentFragment();

// <!-- <li class="list">
// <b>Pais:</b>
// <span class="text-primary">Aca va el pais</span>
// </li> -->

arrayPaises.forEach((pais)=>{
    const li = document.createElement("li");
    li.className = "list";

    const b = document.createElement("b");
    b.textContent = "Pais: ";

    const span = document.createElement("span");
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);

    fragment.appendChild(li);
});

lista.appendChild(fragment)
