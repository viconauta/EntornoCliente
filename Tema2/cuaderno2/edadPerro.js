//pedimos la edad
let edad;
do {
    edad = prompt("Introduce la edad del perro.");
    if(edad === null) {
        break;
    }
    var n = Number(edad);
} while(edad <=0 || edad >= 30 || edad.trim() === "" || !Number.isInteger(n));

//hacemos el calculo en la funcion
function calcularEdad(numero) {
    return numero * 7;
}

//validamos que no sea null y llamamos al metodo y lo mostramos
if(edad !== null) {
    alert(calcularEdad(edad));
}
