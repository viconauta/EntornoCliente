const form = document.getElementById("reserva");
const aviso = document.getElementById("aviso");

const ids = ["nombre", "ciudad"];
const campos = ids.map(id => document.getElementById(id));

function validar(campo) {

    let mensaje = "";

    if (campo.id === "nombre") {

        if (campo.value.trim().length < 3) {
            mensaje = "El nombre debe tener al menos 3 caracteres";
        }

    }

    if (campo.id === "ciudad") {

        if (campo.value.trim() === "") {
            mensaje = "La ciudad es obligatoria";
        }

    }

    document.getElementById(`err-${campo.id}`).textContent = mensaje;

    return mensaje === "";
}

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let valido = true;

    campos.forEach(campo => {

        if (!validar(campo)) {
            valido = false;
        }

    });

    if (valido) {
        aviso.textContent = "Reserva válida";
    } else {
        aviso.textContent = "";
    }

});