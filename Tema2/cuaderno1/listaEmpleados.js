//array de empleados
const listaEmpleados = ["ana", "luis", "marta", "pedro", "lucia", "carlos", "elena"];
 
//pedimos nombre
let nombre = prompt("Introduce tu nombre");

//comprobamos si esta en el array
if(nombre === null) {
    console.log("Consulta cancelada.");
} else if (nombre !== null && nombre.trim() !== "") {
    nombre = nombre.trim().toLowerCase();
    if(listaEmpleados.includes(nombre)) {
        console.log(`Hola ${nombre}.`);
    } else {
        console.log(`El nombre ${nombre} no esta en la lista.`);
    }
} else {
    console.log("Nombre vacio.");
}