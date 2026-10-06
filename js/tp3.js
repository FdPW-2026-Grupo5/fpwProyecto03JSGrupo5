import { datosDelAlumno } from "../services/servicios1.js";

const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputLibreta = document.querySelector('#libreta');
const listaDatos = document.querySelector('#listaDatos');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const libreta = inputLibreta.value;

    const htmlItems = datosDelAlumno(nombre, apellido, libreta);
    listaDatos.innerHTML += htmlItems;
    
    formulario.reset();
});