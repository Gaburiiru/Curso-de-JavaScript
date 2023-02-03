let numero = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numero);

let vidas = 3;

let numeroUsuario = parseInt(prompt("Ingrese un nunmero del 1 al 10: "));

while(numero !== numeroUsuario && vidas > 1){

    let mensaje = (numero > numeroUsuario) ? 'el numero es mayor ⬆' : 'el numero es menor ⬇';

    console.log("te equivocaste 😢" + mensaje);
    vidas --;
    numeroUsuario = parseInt(prompt("Ingrese un nunmero del 1 al 10: "));
}

if(numero === numeroUsuario){
    console.log("ganaste uwu 😎");
}else{
    console.log("mamaguevo 😒");
}