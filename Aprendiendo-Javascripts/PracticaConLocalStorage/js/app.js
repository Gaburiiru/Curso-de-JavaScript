const alert = document.querySelector('.alert')
const formulario = document.querySelector("#formulario");
const pintarTarea = document.querySelector("#pintarTarea");
const templateTarea = document.querySelector("#templateTarea").content;

let tareas = [];

const agregarTarea = (tarea) =>{
    const objetoTarea = {
        nombre:tarea,
        id: `${Date.now()}`
    }

    tareas.push(objetoTarea);
}

const pintarTareas = () =>{

    localStorage.setItem('tareas',JSON.stringify(tareas))

    pintarTarea.textContent = "";

    const fragment = document.createDocumentFragment();

    tareas.forEach((element) => {
        const clone = templateTarea.cloneNode(true);
        clone.querySelector('.lead').textContent = element.nombre;
        clone.querySelector('.btn').dataset.id = element.id;
        
        fragment.appendChild(clone);
        
    });

    pintarTarea.appendChild(fragment);
}

document.addEventListener('click', (e)=>{
    if(e.target.matches('.btn-danger')){
        tareas = tareas.filter(element => element.id !== e.target.dataset.id);
        pintarTareas();
    }
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert.classList.add("d-none");

    const data = new FormData(formulario);
    const [tarea] = [...data.values()];
    
    if(!tarea.trim()){
        alert.classList.remove("d-none");
        return;
    }

    agregarTarea(tarea);
    pintarTareas();
});

document.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('tareas')){
        tareas = JSON.parse(localStorage.getItem('tareas'));
        pintarTareas();
    }
})