const frutas = ["sandia"];

//agrega un elemento al final del array
frutas.push("banana");

//agrega un elemento al principio del array
frutas.unshift("manzana");

//elimina el ultimo elemento del array
const frutaEliminadaPop = frutas.pop();

//elimina el primer elemento del array
const frutaEliminadaShit = frutas.shift();

console.log(frutas);
console.log(frutaEliminadaPop);
console.log(frutaEliminadaShit);