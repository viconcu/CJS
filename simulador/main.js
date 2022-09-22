class Producto {
    constructor (id, nombre, precio) {
        this.id = id,
        this.nombre = nombre,
        this.precio = Number(precio)
    }
};

const arrayProductos = [];

const producto1 = new Producto(1, 'remera', 2000);
const producto2 = new Producto(2, 'buzo', 3500);
const producto3 = new Producto(3, 'ambos', 5000);

arrayProductos.push(producto1, producto2, producto3);
// console.log(arrayProductos)

const ordenarMenorMayor = () => {
    arrayProductos.sort((a,b) => a.precio - b.precio);
    mostrarListaOrdenada();
}

const ordenarMayorMenor = () => {
    arrayProductos.sort((a,b) => b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios: '+'\n'+array.join('\n'));
};

const agregarProductos = () => {
    let otroProducto = false;
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;

    do {
        productoNombre = prompt('Queres comprar remera, buzo o ambos?');
        productoCantidad = parseInt(prompt('Cuantos queres comprar?'));

        while (Number.isNaN(productoCantidad)) {
            productoCantidad = parseInt(prompt('Cuantos queres comprar?'));
        };

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto) {
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no se encuentra en el catálogo.')
        }

        otroProducto = confirm('Desea seguir comprando?');
    } while (otroProducto);

    obtenerDescuento(total);

};

const obtenerDescuento = (total) => {
    if (total >= 8000) {
        total = total * 0.80;
        alert('Tenes un descuento del 20%!');
    }
    obtenerPrecioDeEnvio(total);
};

const obtenerPrecioDeEnvio = (total) => {
    let confirmacion = confirm('Queres envio a domicilio?');
    if (confirmacion && total >= 4000) {
        alert('Tenes envío gratis. El total de la compra es: '+total);
    } else if (confirmacion && total < 2000 && total !== 0) {
        total = total + 800;
        alert('El envío cuesta $800. El total de tu compra es: $'+total);
    } else {
        alert('El total de la compra es: $'+total);
    }
}

const comprar = () => {
    if (confirm('Queres ordenar la lista de productos del mas barato al más caro?')) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    agregarProductos();
};

const abonar = () => {
    (prompt('Como desea pagar?: \n1)Efectivo \n2)Tarjeta \n3)Transferencia'))

}

comprar();
abonar();