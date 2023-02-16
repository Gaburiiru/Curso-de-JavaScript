//El metodo PREVENTDEFAULT se utiliza pra evitar el conmportamiento por default del navegador
const formulario = document.querySelector('form');

formulario.addEventListener('submit',(e)=>{
    console.log('me diste click');
    e.preventDefault();
});