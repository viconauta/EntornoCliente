//declaramos las constantes
const jamones = 23;
const empleados = 10;

//hacemos los calculos
const recibe = Math.floor(jamones / empleados);
const sobran = jamones % empleados;

//mostramos en pantalla
console.log("Cada empleado recibe " + recibe + " jamones. Sobran " + sobran);