//creamos el objeto coche
const coche = {
    marca: "Toyota",
    modelo: "Yaris",
    anio: 2020,
    calcularAntiguedad() {
        const fecha = new Date();
        const anioActual = fecha.getFullYear();
        const antiguedad = anioActual - this.anio;
        if(this.anio % 2 !== 0 || this.anio < 1886 || this.anio > anioActual) {
            return null;
        } else {
            return antiguedad;
        }
    }
}

console.log(coche.calcularAntiguedad());