const carrito = [
    {dato: "Cuaderno", precio: 400, unidades: 3},
    {dato: "Cuaderno", precio: 1200, unidades: 4}
];
function subtotal(carro) {
    let suma = 0;
    for(let i = 0; i < carro.length; i++) {
        suma += carro[i].precio * carro[i].unidades;
    }
    let envio = suma < 5000 ? 500 : 0;
    return suma + envio;
};

console.log(subtotal(carrito) / 100);