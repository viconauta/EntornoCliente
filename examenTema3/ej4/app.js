const notas = [4, 7, 5, 3, 9, 6];
const aprobados = notas.filter(n => n >= 5);
const suspensos = notas.filter(n => n < 5);
console.log(aprobados, suspensos);