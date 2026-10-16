import {tienda} from "./datos.js";

//llamamos al div con la clase grid
const grid = document.getElementsByClassName("grid");
for(const disco of tienda) {
    //creamos el contenedor que contiene toda la tarjeta con imagen y etiquetas del disco
    const contenedor = document.createElement("div");
    contenedor.classList.add("contenedor");
    grid.append(contenedor);

    
}