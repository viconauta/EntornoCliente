const valores = [2, 5, 3];
const sumando = [...valores].reduce((suma, valor) => {
    return suma + valor;
}, 0);
console.log(sumando);

const numeros = [];
const sumandoNum = [...numeros].reduce((suma, valor) => {
    return suma + valor;
}, 0);
console.log(sumandoNum);