const formulario = document.querySelector('#formulario');
const cardsEstudiante = document.querySelector('#cardsEstudiante');
const cardsProfesor = document.querySelector('#cardsProfesor');
const templateEstudiante = document.querySelector('#templateEstudiante').content
const templateProfesor = document.querySelector('#templateProfesor').content
const alert = document.querySelector('.alert');

//arrays de estudiantes y profesores
const estudiantes = [];
const profesores = [];

document.addEventListener('click', (e)=>{
    if(e.target.dataset.uid){
        if(e.target.matches('.btn-success')){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = true;
                }
                return item
            });
        }
        if(e.target.matches('.btn-danger')){
            estudiantes.map(item => {
                if(item.uid === e.target.dataset.uid){
                    item.setEstado = false;
                }
                return item
            });
        }
        Persona.pintarPersonaUI(estudiantes,'Estudiante')
    }
})

//CLASE PADRE "Persona"
class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        this.uid = `${Date.now()}`;
    }
    
    //METODO ESTATICO
    static pintarPersonaUI(personas,tipo){
        if(tipo === 'Estudiante'){
            cardsEstudiante.textContent = "";
            const fragment = document.createDocumentFragment();
        
            personas.forEach(element => {
                fragment.appendChild(element.agregarNuevoEstudiante());
            });
            cardsEstudiante.appendChild(fragment);
        }

        if (tipo === 'Profesor') {
            cardsProfesor.textContent = "";
            const fragment = document.createDocumentFragment();
            
            personas.forEach(element => {
                fragment.appendChild(element.agregarNuevoProfesor());
            });
            cardsProfesor.appendChild(fragment)
        }

    }
};

//HERENCIA de la clase Persona a Estudiante
class Estudiante extends Persona{
    #estado = false;

    set setEstado(estado){
        this.#estado = estado;
    }

    agregarNuevoEstudiante(){
        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector('h5 .text-primary').textContent = this.nombre;
        clone.querySelector('.lead').textContent = this.edad;

        if(this.#estado){
            clone.querySelector('.badge').className = 'badge bg-success';
            clone.querySelector('.btn-success').disabled = true;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('.badge').className = 'badge bg-danger';
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false;
        }
        clone.querySelector('.badge').textContent = this.#estado ? 'Aprobado':'Reprobado';
        clone.querySelector('.btn-success').dataset.uid = this.uid;
        clone.querySelector('.btn-danger').dataset.uid = this.uid;

        return clone;
    }

};

//HERENCIA de la clase Persona a Profesor
class Profesor extends Persona{

    agregarNuevoProfesor(){
        const clone = templateProfesor.cloneNode(true);
        clone.querySelector('h5').textContent = this.nombre;
        clone.querySelector('.lead').textContent = this.edad;
        
        return clone;
    }

};

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    alert.classList.add('d-none')

    const datos = new FormData(formulario);
    const [nombre,edad,opcion] = [...datos.values()]
    // console.log(nombre,edad,opcion);

    if(!nombre.trim() || !edad.trim()){
        console.log('algun dato en blanco')
        alert.classList.remove('d-none')
        return;
    }

    if (opcion === "Estudiante") {
        const estudiante = new Estudiante(nombre,edad);
        estudiantes.push(estudiante);
        Persona.pintarPersonaUI(estudiantes,opcion);
    }
    
    if (opcion === "Profesor") {
        const profesor = new Profesor(nombre,edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI(profesores,opcion);
    }
});
