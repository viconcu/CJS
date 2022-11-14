import { validarProductoRepetido } from "./src/accionesCarrito.js";
import { obtenerProductos } from "./src/obtenerProductos.js";

const mostrarProductos = async () => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  const productos = await obtenerProductos();

  productos.forEach(producto => { //recorre el array con el forEach
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Talle: ${producto.talle}</p>
                          <p>${producto.precio}</p>
                      </div>
                      `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: 'Felicidades',
        text: 'Su producto ha sido agregado al carrito',
      });
      validarProductoRepetido(producto.id);
    })
  });
};

export { mostrarProductos };