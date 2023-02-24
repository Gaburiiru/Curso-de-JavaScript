//El "FORMDATA" se utiliza para capturar la informacion y la guarda en un array con clave y valor

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const inputs = new FormData(formulario);

    for(let item of inputs){
        console.log(item);
    }

    console.log(inputs.get('userName'));
    console.log(inputs.get('userEmail'));

    console.log("formulario procesado");

});