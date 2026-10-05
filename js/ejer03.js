

import { calcularPreciosConIVA } from "../services/servicios03.js";

const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

const productos = [

    { nombre: "Coca", precio: 1000 },

    { nombre: "Pan", precio: 500 },

    { nombre: "Leche", precio: 1200 }

];

btnCalcular.addEventListener("click", () => {

    const productosConIVA = calcularPreciosConIVA(productos);

    resultado.innerHTML = productosConIVA
        .map(({ nombre, precioFinal }) => {
            return `<li>${nombre}: $${precioFinal}</li>`;
        })
        .join("");

    console.log(productosConIVA);
});