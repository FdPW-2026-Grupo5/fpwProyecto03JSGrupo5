export const calcularPreciosConIVA = (productos) => {

    return productos.map(({ nombre, precio }) => {

        return {
            nombre: nombre,
            precioFinal: precio * 1.21
        };

    });

};