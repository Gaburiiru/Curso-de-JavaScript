//funcion constructora = Clase
function Persona(nombre,edad){
    //atributos
    this.nombre = nombre;
    this.edad = edad;

    //metodo
    this.saludar = function(){
        return `${this.nombre} dice hola`
    }
}

/*creamos el prototipo para no meter el metodo en la clase
 y lo llamamos cuando queremos mostrar*/
Persona.prototype.saludarIngles = function(){
    return `${this.nombre} says hi!`
}

//crear un nuevo objeto en base a la clase Persona
const juanito = new Persona("juanito",20);
const pedrito = new Persona("pedrito",15);

//llamar objeto
console.log(juanito);
console.log(pedrito);

//llamar metodo
console.log(juanito.saludar());
console.log(pedrito.saludar());

//llamamos al metodo desde el prototipo
console.log(juanito.saludarIngles())

// funcion constructora = class
class Animal {
    constructor(nombre,tipo,comida){
        //atributos
        this.nombre = nombre;
        this.tipo = tipo;
        this.comida = comida;
    }
    
    //GET
    get getNombre(){
        return this.nombre;
    }

    //SET
    set setNombre(nombre){
        this.nombre = nombre;
    }

    //static
    static Movilidad(nombre){
        return `la ${nombre} esta nadando`
    }

    //metodo anidado en el prototipo
    Comiendo(){
        return `${this.nombre} esta comiendo`
    }
};
//crear objeto
const ballena = new Animal('ballena','mamifero','planton');

//llamar objeto
console.log(ballena);

//llamar el metodo
console.log(ballena.Comiendo());

//llamar objeto usando GET
console.log(ballena.getNombre);

//modificar objeto usando SET y llamar usuando GET
ballena.setNombre = "leon";
console.log(ballena.getNombre);

//llamar metodo sin instanciar el objeto usando static
console.log(Animal.Movilidad('ballena'));

//HERENCIA y POLIMORFISMO
//porque heredo los atributos de Persona
class Estudiante extends Persona {

    // constructor(nombre,edad,notas = []){
    //     super(nombre,edad);
    //     this.notas=notas;
    // }
    
    //poniendo el "#" indico que es un atributo privado
    #notas = []

    set setNotas(nota){
        this.#notas.push(nota)
    }

    get getNotas(){
        return this.#notas
    }

    // Comiendo() {
    //     return `${this.nombre} es un estudiante, su nota es ${this.notas}`;
    // }
}
const alex = new Estudiante("alex",19,);
// console.log(alex.Comiendo());

alex.setNotas = 7;
alex.setNotas = 9;
alex.setNotas = 4;

console.log(alex.getNotas);