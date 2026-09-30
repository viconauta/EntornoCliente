//importamos el array ordenado
import {ordenPrecio} from "./analisis.js";
import {productos} from "./productos.js";
import {sumar} from "./analisis.js";

//imprimimos en consola el array ya ordenado
console.log(ordenPrecio.map(o => o.precio));

//mostramos en consola la el total
console.log(sumar(productos));