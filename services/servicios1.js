export const datosDelAlumno = (nombre, apellido, libreta) => {
    const datos = [nombre, apellido, libreta];

    const itemsHtml = datos.map(item => {
        return `<td>${item}</td>`;
    });

    // Retorna una fila de tabla (<tr>) con las celdas mapeadas
    return `<tr>${itemsHtml.join('')}</tr>`;
};