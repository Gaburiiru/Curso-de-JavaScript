//asignacion de variables *por valor*
let a = "hola";
let b = a;

//modifico el valor de "a"
a = "chau";

//pero el valor de "b" no cambia
console.log(b);

//USANDO ARRAY *por referencia*
const c = ["hola"];
const d = c;

//modifico el valor de "c"
c.push("chau");

//el valor de "d" cambia
console.log(d);

//USANDO OBJETOS
let e = {nombre:"hola"};
let f = e;
 
//modifico el valor de "e"
e.nombre = "chau";

//cambia el valor de "f"
console.log(f);