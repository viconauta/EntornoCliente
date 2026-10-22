let importe = 100;
if(importe < 0) {
    importe = 0;
}
switch(true) {
    case importe >= 100:
        importe *= 0.90;
        break;
}
console.log(importe);