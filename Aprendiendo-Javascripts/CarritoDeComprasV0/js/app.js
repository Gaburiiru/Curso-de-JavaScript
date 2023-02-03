const frutas = [];

const fruta = prompt("🍉 Feria de frutas 🍓, ¿Que fruta desea comprar?");
frutas.push(fruta);

while(confirm("¿Desea seguir comprando? 🛒")){
    const fruta = prompt("¿que fruta desea agregar?");
    frutas.push(fruta);
}

console.log("Compraste: ");
for(const i of frutas){
    console.log(i);
}

//otra forma de recorrer el array de frutas usando forEach
// frutas.forEach( (fruta) => console.log(fruta));