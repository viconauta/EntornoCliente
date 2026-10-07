const asignaturas = [
    {nombre: "Matematicas", horas: 60},
    {nombre: "Fisica", horas: 45},
    {nombre: "Quimica", horas: 53}
];

// Mostrar todas las asignaturas.
for(const asig of asignaturas) {
    console.log(`${asig.nombre}`);
};


// Suma de las horas de todas las asignaturas. 
let suma = 0;
for(const asig of asignaturas) {
    suma += asig.horas;
}
console.log(suma);


// Mostrar las asignaturas ordenadas alfabéticamente. 
const ordenada = [...asignaturas].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(ordenada);


// Mostrar las asignaturas junto con sus horas ordenadas por horas de menor a mayor. 
const ordenHoras = [...asignaturas].sort((a, b) => a.horas - b.horas);
console.log(ordenHoras);


// Nombre asignatura con más horas. 
const masHoras = Math.max(...asignaturas.map(a => a.horas));
const nombreMasHoras = asignaturas.find(a => a.horas === masHoras);
console.log(nombreMasHoras.nombre);


// Crear un objeto similar, pero con las horas aumentadas un 10%.
const aumento = asignaturas.map(a => ({
    ...a, horas: a.horas * 1.10
}));
console.log(aumento);