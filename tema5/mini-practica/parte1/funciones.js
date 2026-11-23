//FUNCION PARA VALIDAR EL FORMULARIO DE SOCIOS |
//=============================================|

export function validarSocios(campo) {
    campo.setCustomValidity('');
    let mensaje = '';

    if(campo.id === 'nombre') {
        const longitud = campo.value.trim().length;
        if(longitud < 4 || longitud > 50) {
            mensaje = 'La longitud debe ser mayor que 4 y menor que 50 caracteres.';
        }
    }
    if(campo.id === 'usuario' || campo.id === 'email') {
        const longitud = campo.value.trim().length;
        if(longitud < 5 || longitud > 20) {
            mensaje = 'Usuario e email deben tener mas de 5 y menos de 20 caracteres.';
        }
    }
    if(campo.id === 'edad') {
        const numero = campo.valueAsNumber;
        if(!Number.isInteger(numero) || numero < 18 || numero > 100) {
            mensaje = 'Introduce un numero entero entre 18 y 100.';
        }
    }
    if(campo.id === 'modalidad') {
        const check = document.querySelector(`input[name=${campo.id}]:checked`);
        if(!check) {
            mensaje = 'Debe seleccionar una modalidad.';
        }
    }
    if(campo.id === 'contraseña') {
        const longitud = campo.value.length;
        if(longitud < 8 || longitud > 16) {
            mensaje = 'La contraseña debe tener entre 8 y 16 caracteres.';
        }
        else {
            const confirmacion = document.getElementById('confirmacion');
            if(confirmacion && confirmacion.value && campo.value !== confirmacion.value) {
                mensaje = 'La contraseña y la confirmacion no coinciden.';
            }
        }
    }
    if(campo.id === 'confirmacion') {
        const longitud = campo.value.length;
        if(longitud < 8 || longitud > 16) {
            mensaje = 'La confirmacion debe tener entre 8 y 16 caracteres.';
        }
        else {
            const contraseña = document.getElementById('contraseña');
            if(contraseña && campo.value !== contraseña.value) {
                mensaje = 'La contraseña y la confirmacion no coinciden.';
            }
        }
    }
    if(campo.id === 'telefono') {
        const numero = campo.valueAsNumber;
        if(!Number.isInteger(numero) || numero.length < 9 || numero.length > 12) {
            mensaje = 'El numero no puede ser menor de 9 digitos ni mayor de 12 incluyendo el prefijo.';
        }
    }
    if(campo.id === 'foto') {
        const archivo = campo.files[0];
        if(archivo && !['image/jpeg'].includes(archivo.type)) {
            mensaje = 'La imagen debe estar en formato .jpeg';
        }
        else if(archivo && archivo.size > 5_000_000) {
            mensaje = 'La imagen supera los 5MB';
        }
    }
    if(!mensaje && campo.validity.valueMissing) {
        mensaje = campo.id === 'condiciones'
            ? 'Debes aceptar las condiciones.' : 'Completa este campoooooooo.';
    }
    if(!mensaje && campo.validity.typeMismatch) {
        mensaje = 'Introduce un correo con un formato valido.';
    }
    if(!mensaje && !campo.validity.valid) {
        mensaje = 'Revisa en valor y las indicaciones de este campo.';
    }

    campo.setCustomValidity(mensaje);
    campo.setAttribute('aria-invalid', String(Boolean(mensaje)));
    const error = document.getElementById(`error-${campo.id}`);
    if(error) {
        error.textContent = mensaje;
    }
    return mensaje === "";
}