const colores = [
    "rgb(173, 216, 230)", 
    "rgb(144, 238, 144)", 
    "rgb(240, 128, 128)", 
    "rgb(255, 182, 193)", 
    "rgb(255, 255, 224)", 
    "rgb(230, 230, 250)", 
    "rgb(255, 218, 185)", 
    "rgb(255, 228, 196)"  
];

const boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
    const indice = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[indice];
    console.log("El color de fondo cambió a: " + colores[indice]);
});

