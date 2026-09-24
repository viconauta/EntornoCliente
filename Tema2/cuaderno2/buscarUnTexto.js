//declaramos el array
const colores = ["rojo", "azul", "verde", "amarillo"];

//pedimos al usuario el color
const color = prompt("Busca un color").trim().toLowerCase();

//mostramos en pantalla si el color esta o no
if(colores.includes(color)) {
    console.log("Encontrado");
} else {
    console.log("No encontrado.");
}