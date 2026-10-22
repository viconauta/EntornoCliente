const cliente = {nombre: "Ana", descuento: 0};
cliente.descuento ??= 10;
const desestructuracion = Object.entries(cliente);
for(const des of desestructuracion) {
    console.log(des);
}