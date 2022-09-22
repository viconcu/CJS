// function saludar() {
//     alert('Hola bienvenido a la pagina de Mercado no tan libre');
//     let nombre = prompt('Ingrese su nombre');
//     while(nombre === '') {
//         nombre = prompt('Ingrese su nombre');
//     }
// }
// //me encantaria agregarle la opcion de preguntarle de que pais esta ingresando a la pagina.

// // function elegirPais () {
// //     let Paises;

// //     do {
// //         paisProveniente = prompt('De que pais esta ingresando? : \n1)Argentina \n2)Brasil \n3)Chile');
// //     }
// // }
// function mostrarProductos(){
//     let productosId;

//     do{
// electrodomesticosId = prompt("Que articulo desea comprar? : \n1)heladera \n2)microondas \n3)licuadora");
//     }while(electrodomesticosId != 1 && electrodomesticosId !=2 && electrodomesticosId != 3);

//     switch(electrodomesticosId){
//         case '1':
//             return 'heladera';

//         case '2':
//             return 'microondas';

//         case '3':
//             return 'licuadora';
//     }
// }

// function validarPrecio(nombre) {
//     if (nombre === 'heladera'){
//         return 50000;
//     }else if(nombre === 'microondas'){
//         return 30000;
//     }else if(nombre === 'licuadora'){
//         return 18000;
//     }
// }

// function cobrarProducto (nombre, precio){
//     alert('Usted eligio: '+nombre.toUpperCase()+'.\nEl precio del producto es de $'+precio)
// let pago = prompt('Con cuanto abona?');
// if(precio < pago){
//     alert('Su vuelto es $'+(pago - precio))
// }
// }

// saludar();
// let nombreProducto = mostrarProductos();
// let precioProducto = validarPrecio(nombreProducto);

// cobrarProducto(nombreProducto, precioProducto);
// // elegirPais();