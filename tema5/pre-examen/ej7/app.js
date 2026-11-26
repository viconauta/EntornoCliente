const form = document.getElementById('reserva');
const btn = document.getElementById('comprobar');
const error = document.getElementById('error');

const cantidad = document.getElementById('cantidad');
const socio = document.getElementById('socio');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let mensaje = '';
    let valido = true;
    const num = Number(cantidad.value);

    if(socio.checked) {
        if(num < 1 || num > 6) {
            mensaje = 'Introduce una cantidad entre 1 y 6.';
            valido = false;
        }
    }
    else {
        if(num < 1 || num > 3) {
            mensaje = 'Introduce una cantidad entre 1 y 3.';
            valido = false;
        }
    }

    if (!valido) {
        error.textContent = mensaje;
    }
    else {
        error.textContent = '';
    }
});