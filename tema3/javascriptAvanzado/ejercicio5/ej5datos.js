const frutas = [
    {fruta: "Platano", precio: 1.35},
    {fruta: "Manzana", precio: 0.80},
    {fruta: "Pera", precio: 0.85},
    {fruta: "Naraja", precio: 0.70}
];

// Dado un número de kilos X mostrar el precio total de llevarse X kilos de cada fruta.
const kilos = 10;
const precioTotalKilos = frutas.map(f => ({
    ...f, precio: f.precio * kilos
}));
console.log(precioTotalKilos);


// Mostrar las frutas junto con su precio ordenadas de mayor a menor precio.
const ordenadasPrecio = [...frutas].sort((a, b) => b.precio - a.precio);
console.log(ordenadasPrecio);


// Mostrar la fruta con menor precio.
const menorPrecio = [...frutas].sort((a, b) => a.precio - b.precio);
console.log(menorPrecio[0]);


// Mostrar las frutas junto con su precio ordenadas alfabéticamente.
const ordenAlfa = [...frutas].sort((a, b) => a.fruta.localeCompare(b.fruta));
console.log(ordenAlfa);


// Crear un objeto nuevo con solo las frutas que empiecen por “P”.
const filtroP = frutas.filter(f => f.fruta.toLowerCase().startsWith("p"));
console.log(filtroP);


// Crear un objeto nuevo subiendo el precio un 15% a las frutas que valgan menos de 1€/kg y bajar
// un 5% las que valgan más de un 1€/Kg.
const ajustePrecio = frutas.map(f => {
    let precio = 0;
    if(f.precio < 1) {
        precio = f.precio * 1.15;
    } else {
        precio = f.precio * 0.95;
    }
    return {...f}, precio;
});
console.log(ajustePrecio);