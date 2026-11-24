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

export function normalizarEspacios(texto) {
    return texto.trim().replace(/ +/g, " ");
}

export function nombreValido(texto) {
    const nombre = normalizarEspacios(texto);
    return nombre.length >= 4 && nombre.length <= 50 &&
        /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ]+(?: [A-Za-zÁÉÍÓÚÜáéíóúüÑñ]+)*$/.test(nombre);
}

export function usuarioValido(texto) {
    return /^[A-Za-z][A-Za-z0-9]{4,19}$/.test(texto.trim());
}

export function passwordValido(texto) {
    return /^[A-Za-z][A-Za-z0-9_]{7,15}$/.test(texto);
}

export function telefonoValido(texto) {
    return /^\+34 [6789][0-9]{2} [0-9]{3} [0-9]{3}$/.test(texto.trim());
}

export function codigoServicioValido(texto) {
    return /^DEP-[0-9]{3}$/.test(texto);
}

export function referenciaValida(texto) {
    return /^(?:CITA|RES)-[0-9]{4}$/.test(texto);
}

export function extraerCifras(texto) {
    return texto.match(/[0-9]+/g) || [];
}

export function separarEtiquetas(texto) {
    return texto.split(/\s*,\s*/)
        .map(etiqueta => etiqueta.trim())
        .filter(etiqueta => etiqueta !== "");
}

export function validarCampo(campo) {
    campo.setCustomValidity("");
    let mensaje = "";

    if (campo.id === "nombre-socio") {
        if (!nombreValido(campo.value)) {
            mensaje = "Usa 4 a 50 letras validas y palabras separadas por un espacio.";
        } else {
            campo.value = normalizarEspacios(campo.value);
        }
    }
    if (campo.id === "usuario-socio") {
        if (!usuarioValido(campo.value)) {
            mensaje = "El usuario debe empezar por letra y tener 5 a 20 letras o cifras.";
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
        if (!passwordValido(campo.value)) {
            mensaje = "La contraseña debe empezar por letra y tener 8 a 16 letras, cifras o guiones bajos.";
        }
    }
    if (campo.id === "confirmacion-socio") {
        const password = document.querySelector("#password-socio");
        if (campo.value !== password.value) {
            mensaje = "La confirmación no coincide con la contraseña.";
        }
    }
    if (campo.id === "telefono-socio") {
        if (!telefonoValido(campo.value)) {
            mensaje = "Usa el formato +34 612 345 678.";
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
        if (!Number.isFinite(numero) || numero < 0 || numero > 9999.99 || campo.validity.stepMismatch) {
            mensaje = "Introduce un precio entre 0 y 9999.99 con dos decimales como máximo.";
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
    if (campo.id === "codigo-servicio") {
        if (!codigoServicioValido(campo.value)) {
            mensaje = "Usa el formato DEP- seguido de tres cifras.";
        }
    }
    if (campo.id === "referencia-cita") {
        if (!referenciaValida(campo.value)) {
            mensaje = "Usa CITA- o RES- seguido de cuatro cifras.";
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