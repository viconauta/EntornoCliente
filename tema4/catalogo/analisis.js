import {productos} from "./productos.js";

export const ordenPrecio = [...productos].sort((a, b) => a.precio - b.precio);
