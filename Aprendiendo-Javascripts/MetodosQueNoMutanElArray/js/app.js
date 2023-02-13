//Metodos que no modifican el array original y crean otros
//Metodo MAP crea un nuevo array y lo recorre como un forEach
//ejemplo 1
const frutas = ["🍊","🍇","🍋"];

const nuevoArray = frutas.map((item)=> item);
console.log(nuevoArray);

//ejemplo 2
const users = [
    {name:"pepe",age:20},
    {name:"ramon",age:18},
    {name:"evelin",age:26}
];

const names = users.map((user)=> user.name);
console.log(names);

//ejemplo 3
const numeros = [1,2,3,4,5,6,7,8,9,10];

const numeroPorDos = numeros.map((num)=> num * 2);
console.log(numeroPorDos);

//Metodo FILTER crea un nuevo array y devuelve las coinsidencias que encuentre
//ejemplo 1
const usuarios = [
    {id:1,name:"pepe",age:20},
    {id:2,name:"ramon",age:18},
    {id:3,name:"evelin",age:26}
];

const mayores = usuarios.filter((user)=> user.age > 19);
console.log(mayores);

//ejemplo 2
const usuarioFiltrado = usuarios.filter((user)=> user.id === 1);
console.log(usuarioFiltrado);

//ejemplo 3
const usuarioNoFiltrado = usuarios.filter((user)=> user.id !== 1);
console.log(usuarioNoFiltrado);

/*Metodo FIND se utilia para buscar, devuelve el primer elemento que encuetra,
en caso de que no encuentre arroja error*/
//ejemplo 1
const evelin = usuarios.find((user)=> user.id === 3);
console.log(evelin);

/*Metodo SOME se utiliza para buscar,devuelve TRUE o FALSE,
comprueba si existe algun elemento con las condicion solicitada*/
//ejemplo 1
const existe = usuarios.some((user)=>user.id ===1);
console.log(existe);

//ejemplo 2
const noExiste = usuarios.some((user)=>user.id ===5);
console.log(noExiste);

/*Metodo FINDINDEX se utiliza para buscar,devuelve el primer indice que encuentra
en caso de no encontrarlo retorna -1*/
//ejemplo 1
const indice = usuarios.findIndex((user)=>user.id === 1);
console.log(indice);//usuarios[indice] de esta forma me devuelve el elemento

//ejemplo 2
const indiceNoExistente = usuarios.findIndex((user)=>user.id === 6);
console.log(indiceNoExistente);/*usuarios[indiceNoExistente] 
devuelve un undefined ya que dicho indice no existe*/

/*Metodo SLICE se utiliza para traer de un array el elemneto que se indique a
excepcion del ultimo a otro NUEVO array*/
//ejemplo 1
const arr = ["cero","uno","dos","tres"];
//              0    [1     2]    3
const arrayNuevo = arr.slice(1,3);
console.log(arrayNuevo);

/*Metodo CONCAT se utiliza para unir dos o mas arrays, devolviendo la union en un
array nuevo*/
//ejemplo 1
const a = ["a","b","c"];
const b = ["d","e","f"];

const union = a.concat(b);
console.log(union);

//ejemplo con mas arrays
const c = [1,2,3];
const union2 = union.concat(c);
console.log(union2);

//Metodo SPREAD SYNTAX es lo mismo que el concat
//ejemplo 1
const array3 = [...c,...a,...b];
console.log(array3);

/*Metodo REDUCE acumula y asigna los elementos de un array hasta encontrar
un unico valor en un NUEVO array*/
//ejemplo 1
const numeross = [1,2,3,4,5];

const sumarTodos = numeross.reduce((acumulador, valorActual)=> acumulador + valorActual);
console.log(sumarTodos);

//ejemplo 2
const multiplicarTodos = numeross.reduce((acumulador,valorActual)=>acumulador*valorActual);
console.log(multiplicarTodos);

//como aplanar un array usando reduce y concat
const arrayNumeros = [
    [0,1],
    [2,3],
    [4,5]
];

const soloNumeros = arrayNumeros.reduce((ac,valor)=>ac.concat(valor));
console.log(soloNumeros);

//otra forma sin reduce
const arrayPlano = [].concat(...arrayNumeros);
console.log(arrayPlano);

//otra forma utilizando FLAT (el motodo flat esta en etapa experimental)
const arrayPlano2 = arrayNumeros.flat();
console.log(arrayPlano2);

/*Metodo SPLIT se utiliza para dividir un objeto de tipo String en un array
mediante un separador*/
// ejemplo 1
const cadenaMeses = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";

const mes = cadenaMeses.split(",");
console.log(mes);

//Metodo JOIN se utiliza para unir los elementos de un array y devolverlo en una cadena
// ejemplo 1
const meses = mes.join("-");
console.log(meses);