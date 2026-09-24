//creamos el array
const productos = [];
let nombre;

//hacemos un bucle para pedir productos hasta pulsar cancelar
do {   
    do {
        nombre = prompt("Introduce un producto.");
        if(nombre === null) break;
        if(nombre.trim() === "") {
            alert("Entrada vacia, intentelo de nuevo");
        }
    } while (nombre.trim() === "");
    if(nombre !== null) {
        productos.push(nombre.trim());
    }
} while(nombre !== null);

let imprimir = "";
for (const producto of productos) {
    imprimir += `${producto}, `;
}
if(productos.length > 0) {
    console.log(`Lista final: ${imprimir} Numero de productos: ${productos.length}.`);
} else {
    console.log("Lista vacia.")
}
