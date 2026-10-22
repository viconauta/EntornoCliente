export function nombresDisponibles(productos, precioMaximo) {
    const rangoPrecio = [...productos].filter(p => p.precio < precioMaximo);
}