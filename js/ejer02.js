const colores = [
    "rgb(173, 216, 230)", // lightblue
    "rgb(144, 238, 144)", // lightgreen
    "rgb(240, 128, 128)", // lightcoral
    "rgb(255, 182, 193)", // lightpink
    "rgb(255, 255, 224)", // lightyellow
    "rgb(230, 230, 250)", // lavender
    "rgb(255, 218, 185)", // peachpuff
    "rgb(255, 228, 196)"  // bisque
];

const boton = document.querySelector("#btnColor");

boton.addEventListener("click", function () {
    const indice = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[indice];
    console.log("El color de fondo cambió a: " + colores[indice]);
});

