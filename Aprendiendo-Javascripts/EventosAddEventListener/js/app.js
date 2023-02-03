const e = document.getElementById("id-JS");
console.log(e)

const boton = document.querySelector(".btn-primary");

boton.addEventListener("click", () => {
    console.log("hi, me diste click");
    e.textContent = "texto cambiado";
    e.style.color = "red";
    e.style.backgroundColor = "yellow";
});