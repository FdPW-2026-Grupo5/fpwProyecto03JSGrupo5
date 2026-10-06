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

export const mostrarPorPuntaje = (peliculas, puntaje) => {
  const ul = document.querySelector("#listaPeliculas");
  const resultados = document.createDocumentFragment();
  const peliculasFiltradas = peliculas.filter(
    (pelicula) => pelicula.puntaje === puntaje
  );

  if (peliculasFiltradas.length === 0) {
    const elemento = document.createElement("li");
    elemento.textContent = "No hay películas con ese puntaje";
    resultados.append(elemento);
  } else {
    peliculasFiltradas.forEach((pelicula) => {
      const elemento = document.createElement("li");
      elemento.textContent = pelicula.titulo;
      resultados.append(elemento);
    });
  }

  ul.replaceChildren(resultados);
};
