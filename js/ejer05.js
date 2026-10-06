import { filtrarProductosEnStock, extraerPreciosProductos, sumarTotalPrecios } from "../services/services05.js";


const carrito = [

  { producto: "Notebook", precio: 800000, enStock: true },

  { producto: "Mouse", precio: 15000, enStock: false },

  { producto: "Teclado", precio: 30000, enStock: true },

  { producto: "Monitor", precio: 200000, enStock: true }

];


const boton = document.querySelector("#btnTotal");

boton.addEventListener("click", function () {
    const productosFiltrados = filtrarProductosEnStock(carrito);    
    
    const preciosProductos = extraerPreciosProductos(productosFiltrados);

    const totalCarrito = sumarTotalPrecios(preciosProductos);

    const resultadoTotal = document.querySelector("#total");
    resultadoTotal.textContent = `Total: ${totalCarrito}`;


    const detalleProductos = document.querySelector("#detalle");
    detalleProductos.textContent =  `Se compraron ${productosFiltrados.length} productos`;


});

