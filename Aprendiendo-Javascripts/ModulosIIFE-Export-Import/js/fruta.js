const fruta = "🍎";
console.log(fruta);

export const humano = "gabo";

export const frutilla = () =>{
    console.log("🍓");
}

export class Fruta{
    constructor (nombre){
        this.nombre = nombre;
    }
}

//otra forma de hacerlo
// export {humano, frutilla, Fruta };


//el export default solo se puede utilizar una vez por cada archivo
const pc = "🖥️";
export default pc;