const envio = document.getElementById('envio');
const socio = document.getElementById('socio');
const total = document.getElementById('precio');

const precioBase = 30;

function actualizar() {
    let precio = precioBase;

    if (socio.checked) {
        precio *= 0.90;
    }

    if(envio.value === 'domicilio') {
        precio += 4;
    }

    total.textContent = precio.toFixed(2);

}
actualizar();

envio.addEventListener('change', actualizar);
socio.addEventListener('change', actualizar);