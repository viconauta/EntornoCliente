const numeros = [-8, -3, -12, -1, -6];
let mayor = numeros[0];
for(const num of numeros) {
    if(num > mayor) {
        mayor = num;
    }
}
console.log(mayor);