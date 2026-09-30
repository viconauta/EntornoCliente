//importamos el array de productos
import {productos} from "./productos.js";

//lo ordenamos
export const ordenPrecio = [...productos].sort((a, b) => a.precio - b.precio);

//lo sumamos
export function sumar(productos) {
    let total = 0;
    for(const producto of productos) {
        total += producto.precio * producto.stock;
    }
    return total;
}

//export const total = sumar(productos);
