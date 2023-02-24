const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
//otra forma de seleccionar es asi
// const userName = document.querySelector('input[name=userName]');
// const userEmail = document.querySelector('input[name=userEmail]');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(!regUserName.test(userName.value) || !regUserEmail.test(userEmail.value)){
        console.log('formato no valido');
        return;
    }
    console.log(userName.value);
    console.log(userEmail.value);
    console.log("formulario enviado");
});