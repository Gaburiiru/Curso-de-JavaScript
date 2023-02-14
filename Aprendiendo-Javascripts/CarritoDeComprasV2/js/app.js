const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll('.card .btn')

const carritoArray = [];

const aregarAlCarrito = (e) =>{
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo:e.target.dataset.fruta,
        id:e.target.dataset.fruta,
        cantidad:1
    };

    const indice = carritoArray.findIndex((item)=>item.id === producto.id);
    
    if(indice === -1){
        carritoArray.push(producto);
    }else{
        carritoArray[indice].cantidad ++;
    }

    console.log(carritoArray)

    pintarCarrito(carritoArray);
};

const pintarCarrito = (array) =>{

    carrito.textContent = "";

    array.forEach((item)=>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);

}

btnBotones.forEach((btn) => btn.addEventListener("click",aregarAlCarrito));