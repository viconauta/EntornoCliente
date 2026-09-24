//variables
const producto = 100;
const impuesto = 21;

//calculamos el importe del impuesto y el precio final
const costeImpuesto = producto * impuesto / 100;
const costeTotal = producto + costeImpuesto;

//mostramos por consola
console.log("Precio base: " + producto);
console.log("Impuestos: " + costeImpuesto);
console.log("Total: " + costeTotal);

