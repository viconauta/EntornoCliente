//creamos el objeto con el array y calculamos el precio con el metodo
const tienda = {
    productos: [
        {nombre: "Cuaderno", precio: 4},
        {nombre: "Boligrafo", precio: 2},
        {nombre: "Mochila", precio: 25},
        {nombre: "Estuche", precio: 6}
    ],
    calcularTotal() {
        let suma = 0;
        for(const prod of this.productos) {
            suma += prod.precio;
        }
        return suma.toFixed(2);
    }
}

//mostramos el resultado
console.log(`Total: ${tienda.calcularTotal()}.`);