export const filtrarProductosEnStock = (productos) => {

  const productosEnStock = productos.filter(producto => producto.enStock === true );
  return productosEnStock;
};

export const extraerPreciosProductos = (productos) => {
    const preciosProductos = productos.map(producto => producto.precio);
    return preciosProductos;
}

export const sumarTotalPrecios = (preciosProductos) =>{
    const total = preciosProductos.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
    return total;
}
