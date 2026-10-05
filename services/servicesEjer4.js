export const mostrarGenero = (peliculas, genero) => {
  const ul = document.querySelector("#listaPeliculas");
  const resultados = document.createDocumentFragment();

  peliculas.filter((pelicula) => {
    if (genero === "todos" || pelicula.genero === genero) {
      const elemento = document.createElement("li");
      elemento.textContent = pelicula.titulo;
      resultados.append(elemento);
    }
  });

  ul.replaceChildren(resultados);
};
