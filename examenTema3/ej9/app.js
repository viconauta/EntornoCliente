const notas = [6, 8, 4, 10];
const numeros = [];

function calcularMedia(nota) {
    if(nota.length === 0) {
        return null;
    }
    const suma = nota.reduce((suma, valor) => {
        return suma + valor;
    }, 0);
    return suma;
}
console.log(calcularMedia(notas));
console.log(calcularMedia(numeros));