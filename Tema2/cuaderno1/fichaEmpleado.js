//variables
const nombre = "Ana Lopez";
const profesion = "Administrativa";
let antiguedadAnios = 3;
const sueldoBase = 1200;

//mostramos los datos
console.log(`Empleado: ${nombre} \nProfesion: ${profesion} \nAntiguedad: ${antiguedadAnios} años \nSueldo base: ${sueldoBase}€`);

//calculamos plus y total
const plus =  ((sueldoBase * 0.10) * antiguedadAnios);
const total = (sueldoBase + plus);

//mostramos plus y total
console.log(`Plus: ${plus.toFixed(2)}€. Total: ${total.toFixed(2)}€.`);