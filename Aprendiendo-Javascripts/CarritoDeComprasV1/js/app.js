const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const btnBotones = document.querySelectorAll('.card .btn')

const carritoObjeto = {};

const aregarAlCarrito = (e) =>{
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo:e.target.dataset.fruta,
        id:e.target.dataset.fruta,
        cantidad:1
    };

    if(carritoObjeto.hasOwnProperty(producto.id)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;
    
    pintarCarrito();
};

const pintarCarrito = () =>{

    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item)=>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);

}

btnBotones.forEach((btn) => btn.addEventListener("click",aregarAlCarrito));