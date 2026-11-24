export function mostrarError(campo, mensaje) {
    const idError = campo.id === "modalidad-mensual" || campo.id === "modalidad-anual"
        ? "modalidad"
        : campo.id;
    const salida = document.getElementById("error-" + idError);
    if (salida) {
        salida.textContent = mensaje;
    }
    campo.setAttribute("aria-invalid", String(mensaje !== ""));
}

function validarImagen(campo) {
    const archivo = campo.files[0];
    if (!archivo) {
        return "Selecciona una imagen.";
    }
    if (archivo.type !== "image/jpeg") {
        return "Solo se admiten archivos JPEG.";
    }
    if (archivo.size > 5_000_000) {
        return "La imagen supera los 5.000.000 bytes.";
    }
    return "";
}

export function validarCampo(campo) {
    campo.setCustomValidity("");
    let mensaje = "";

    if (campo.id === "nombre-socio") {
        const longitud = campo.value.trim().length;
        if (longitud < 4 || longitud > 50) {
            mensaje = "Escribe un nombre de 4 a 50 caracteres.";
        }
    }
    if (campo.id === "usuario-socio") {
        const longitud = campo.value.trim().length;
        if (longitud < 5 || longitud > 20) {
            mensaje = "El usuario debe tener entre 5 y 20 caracteres.";
        }
    }
    if (campo.id === "edad-socio") {
        const numero = campo.valueAsNumber;
        if (!Number.isInteger(numero) || numero < 18 || numero > 100) {
            mensaje = "Introduce una edad entera entre 18 y 100.";
        }
    }
    if (campo.id === "modalidad-mensual" || campo.id === "modalidad-anual") {
        const elegida = campo.form.querySelector('input[name="modalidad"]:checked');
        if (!elegida) {
            mensaje = "Selecciona una modalidad mensual o anual.";
        }
    }
    if (campo.id === "password-socio") {
        const longitud = campo.value.length;
        if (longitud < 8 || longitud > 16) {
            mensaje = "La contraseña debe tener entre 8 y 16 caracteres.";
        }
    }
    if (campo.id === "confirmacion-socio") {
        const password = document.querySelector("#password-socio");
        if (campo.value !== password.value) {
            mensaje = "La confirmación no coincide con la contraseña.";
        }
    }
    if (campo.id === "duracion-servicio") {
        const numero = campo.valueAsNumber;
        if (!Number.isInteger(numero) || numero < 15 || numero % 15 !== 0) {
            mensaje = "Introduce un entero mínimo de 15 y múltiplo de 15.";
        }
    }
    if (campo.id === "precio-servicio") {
        const numero = campo.valueAsNumber;
        if (Number.isNaN(numero) || numero < 0 || numero > 9999.99) {
            mensaje = "Introduce un número entre 0 y 9999.99.";
        }
    }
    if (campo.id === "nombre-servicio") {
        const longitud = campo.value.trim().length;
        if (longitud < 3 || longitud > 50) {
            mensaje = "Escribe un nombre de 3 a 50 caracteres.";
        }
    }
    if (campo.id === "autor-testimonio") {
        const longitud = campo.value.trim().length;
        if (longitud < 2 || longitud > 50) {
            mensaje = "El autor debe tener entre 2 y 50 caracteres.";
        }
    }
    if (campo.id === "texto-testimonio") {
        const longitud = campo.value.trim().length;
        if (longitud < 10 || longitud > 500) {
            mensaje = "El testimonio debe tener entre 10 y 500 caracteres.";
        }
    }
    if (campo.id === "titulo-noticia") {
        const longitud = campo.value.trim().length;
        if (longitud < 3 || longitud > 100) {
            mensaje = "El título debe tener entre 3 y 100 caracteres.";
        }
    }
    if (campo.id === "contenido-noticia") {
        const longitud = campo.value.trim().length;
        if (longitud < 20 || longitud > 2000) {
            mensaje = "El contenido debe tener entre 20 y 2000 caracteres.";
        }
    }
    if (campo.id === "fecha-noticia" && campo.value) {
        const hoy = new Date();
        const anio = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, "0");
        const dia = String(hoy.getDate()).padStart(2, "0");
        const hoyLocal = anio + "-" + mes + "-" + dia;
        if (campo.value <= hoyLocal) {
            mensaje = "La fecha debe ser posterior al día actual.";
        }
    }
    if (campo.id === "fecha-cita" && campo.value) {
        const elegida = new Date(campo.value);
        if (Number.isNaN(elegida.getTime()) || elegida.getTime() <= Date.now()) {
            mensaje = "La cita debe ser posterior al momento actual.";
        }
    }
    if (campo.id === "foto-socio" || campo.id === "imagen-noticia") {
        mensaje = validarImagen(campo);
    }

    if (!mensaje && campo.validity.valueMissing) {
        if (campo.id === "condiciones-socio") {
            mensaje = "Debes aceptar las condiciones.";
        } else if (campo.id === "confirmacion-cita") {
            mensaje = "Debes confirmar que has revisado los datos.";
        } else {
            mensaje = "Completa este campo.";
        }
    }
    if (!mensaje && campo.validity.typeMismatch) {
        mensaje = "Introduce un correo con un formato válido.";
    }
    if (!mensaje && !campo.validity.valid) {
        mensaje = "Revisa el valor y las indicaciones de este campo.";
    }

    campo.setCustomValidity(mensaje);
    mostrarError(campo, mensaje);
    return mensaje === "";
}