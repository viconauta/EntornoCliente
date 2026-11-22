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
    let contraseña = "";
    if(campo.id === 'contraseña') {
        contraseña = campo.value;
        const longitud = campo.value.length;
        if(longitud < 8 || longitud > 16) {
            mensaje = 'La contraseña debe tener entre 8 y 16 caracteres.';
        }
    }
    let confirmacion = "";
    if(campo.id === 'contraseña') {
        confirmacion = campo.value;
        const longitud = campo.value.length;
        if(longitud < 8 || longitud > 16) {
            mensaje = 'La contraseña debe tener entre 8 y 16 caracteres.';
        }
    }
    if(contraseña !== confirmacion) {
        mensaje = 'La contraseña y la confirmacion no coinciden.';
    }
    if(campo.id === 'telefono') {
        const numero = campo.valueAsNumber;
        if(!Number.isInteger(numero) || numero < 9 || numero > 12) {
            mensaje = 'El numero no puede ser menor de 9 digitos ni mayor de 12 incluyendo el prefijo.';
        }
    }
}