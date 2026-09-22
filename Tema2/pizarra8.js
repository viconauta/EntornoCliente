/* Crea un objeto cesta con una propiedad productos: un array de objetos con nombre
y precio.
Productos: Pan (2 €), Leche (3 €) y Fruta (5 €).
1. Añade el método calcularTotal().
2. Recorre this.productos con un bucle y suma los precios.
3. Devuelve el total y muéstralo fuera del método.
Cuenta una unidad por producto. */

const cesta = {
    productos: [
        {articulo: "Pan", precio: 2},
        {articulo: "Leche", precio: 3},
        {articulo: "Fruta", precio: 5} 
    ],
    calcularTotal() {
        let suma = 0;
        for(const p of this.productos) {
            suma += p.precio;
        }
        return suma;
    } 
}
console.log(cesta.calcularTotal());