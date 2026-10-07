const platos = [
    // DESAYUNOS
    {nombre: "Tostadas con tomate", calorias: 180, precio: 4, tipo: "Desayuno"},
    {nombre: "Cafe con leche y croissant", calorias: 320, precio: 3.5, tipo: "Desayuno"},
    {nombre: "Avena con frutas", calorias: 250, precio: 5, tipo: "Desayuno"},
    {nombre: "Tortilla francesa", calorias: 210, precio: 4.5, tipo: "Desayuno"},

    // ALMUERZOS
    {nombre: "Bocadillo", calorias: 250, precio: 7, tipo: "Almuerzo"},
    {nombre: "Ensalada mixta", calorias: 300, precio: 6.5, tipo: "Almuerzo"},
    {nombre: "Pasta boloñesa", calorias: 650, precio: 9, tipo: "Almuerzo"},
    {nombre: "Pollo a la plancha con arroz", calorias: 580, precio: 8.5, tipo: "Almuerzo"},
    {nombre: "Hamburguesa clásica", calorias: 720, precio: 10, tipo: "Almuerzo"},

    // CENAS
    {nombre: "Sopa de verduras", calorias: 180, precio: 5.5, tipo: "Cena"},
    {nombre: "Salmon al horno", calorias: 520, precio: 12, tipo: "Cena"},
    {nombre: "Pizza margarita", calorias: 800, precio: 11, tipo: "Cena"},
    {nombre: "Tortilla de patatas", calorias: 450, precio: 7.5, tipo: "Cena"},
    {nombre: "Revuelto de champiñones", calorias: 260, precio: 6.5, tipo: "Cena"}
];

// Buscar un plato a partir del nombre (suponemos que el usuario lo ha escrito en una variable).
const nombrePlato = "Sopa";
const buscarPlato = platos.find(p => p.nombre.toLowerCase().includes(nombrePlato.toLowerCase()));
console.log(buscarPlato);


// Filtrar los platos que con mayor número de calorías que el usuario indique. 
const numCalorias = 500;
const filtroCalorias = platos.filter(p => p.calorias > numCalorias);
console.log(filtroCalorias);


// Mostrar el plato del menú con menor número de calorías. 
const minCalorias = Math.min(...platos.map(p => p.calorias));
const platoMinCalorias = platos.find(p => p.calorias === minCalorias);
console.log(platoMinCalorias);


// Obtener el nombre y el precio del plato más caro. 
const masCaro = Math.max(...platos.map(p => p.precio));
const platoMasCaro = platos.find(p => p.precio === masCaro);
console.log(`Nombre: ${platoMasCaro.nombre} \n Precio: ${platoMasCaro.precio}`);


// Obtener la suma de calorías según el tipo de plato de la carta (desayuno, almuerzo, cena), 
// vuestro tiene que funcionar si se añaden o quitan tipos de platos de la carta.
const sumaCalorias = platos.reduce((suma, plato) => {
    const tipoAlmuerzo = plato.tipo;
    if(!suma[tipoAlmuerzo]) {
        suma[tipoAlmuerzo] = 0;
    }
    suma[tipoAlmuerzo] += plato.calorias;
    return suma;
}, {});
for(const suma in sumaCalorias) {
    console.log(`${suma} : ${sumaCalorias[suma]}`);
}