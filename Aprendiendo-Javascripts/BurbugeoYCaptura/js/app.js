//El metodo de "burbujeo" se utiliza para recorrer elementos anidados
const cajitas = document.querySelectorAll('.border');

cajitas.forEach((caja)=>{
    caja.addEventListener('click',(e)=>{
        e.stopPropagation();// "stopPropagation" se utiliza para detenerse en el elemento que esta anidado
        console.log('me diste click');
    });
});
