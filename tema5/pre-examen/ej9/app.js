const form = document.getElementById('reserva');
const codigo = document.getElementById('codigo');
const aviso = document.getElementById('aviso');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let mensaje = "";
    if (codigoValido(codigo.value)) {
        mensaje = 'Valido';
    }
    else {
        mensaje = 'Codigo no valido';
    }
    aviso.textContent = mensaje;
    mensaje = "";
})

function codigoValido(texto) {
    return /^(VIN|CD)-\d{3}[A-Z]?$/.test(texto);
}

// Válidas
console.log("VIN-456", codigoValido("VIN-456"));
console.log("CD-001Z", codigoValido("CD-001Z"));

// Inválidas
console.log("VIN-12", codigoValido("VIN-12"));
console.log("CD -123", codigoValido("CD -123"));