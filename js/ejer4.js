import { mostrarGenero } from "../services/servicesEjer4.js";

const peliculas = [
  { titulo: "Rápidos y Furiosos", genero: "Acción", puntaje: 8 },
  { titulo: "Son como niños", genero: "Comedia", puntaje: 6 },
  { titulo: "El Padrino", genero: "Drama", puntaje: 10 },
  { titulo: "Jhon Wick", genero: "Acción", puntaje: 9 },
];
const FiltroGenero = document.querySelector("#filtroGenero");

document.getElementById("btnFiltrar").onclick = () => {
  const genero = FiltroGenero.value;
  mostrarGenero(peliculas, genero);
};
