//creamos el array
const numeros = [-4, -2, -8, -1, -3, -6];

//variables y bucle for
let producto = 0;
let mayor = numeros[0];
let media = 0;

for(const numero of numeros) {
    if(producto === 0) {
        producto = numero;
    } else {
        producto *= numero;
    }
    media += numero;
    if(numero > mayor) {
        mayor = numero;
    }
}
media /= numeros.length;

//mostramos en pantalla
console.log(`Producto: ${producto} · Mayor: ${mayor} · Media ${media}.`);