// IMPORTS |
//=========|
import { validarSocios } from './funciones.js';

// OCULTAMOS Y MOSTRAMOS LOS FORMULARIOS |
//=======================================|

const btnSocios = document.querySelector('.btn-socios');
btnSocios.addEventListener('click', () => {
    document.querySelector('.socios').classList.toggle('oculto');
});

const btnServicios = document.querySelector('.btn-servicios');
btnServicios.addEventListener('click', () => {
    document.querySelector('.servicios').classList.toggle('oculto');
});

const btnTestimonios = document.querySelector('.btn-testimonios');
btnTestimonios.addEventListener('click', () => {
    document.querySelector('.testimonios').classList.toggle('oculto');
});

const btnNoticias = document.querySelector('.btn-noticias');
btnNoticias.addEventListener('click', () => {
    document.querySelector('.noticias').classList.toggle('oculto');
});

const btnCitas = document.querySelector('.btn-citas');
btnCitas.addEventListener('click', () => {
    document.querySelector('.citas').classList.toggle('oculto');
});

// ENVIAMOS EL FORMULARIO AL PRESIONAR ENTER |
//===========================================|

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        document.querySelector('.btn-enviar').click();
    }
});

// VALIDAMOS EL FORMULARIO DE SOCIOS |
//===================================|

const formSocios = document.querySelector('#socios');
const estadoSocios = document.querySelector('.estado-socios');
const idSocios = ['nombre', 'usuario', 'email', 'edad', 'modalidad', 'contraseña', 'confirmacion', 'telefono', 'foto', 'condiciones'];
const campoSocios = idSocios.map(id => document.getElementById(id));

formSocios.addEventListener('submit', event => {
    event.preventDefault();
    estadoSocios.textContent = '';
    let primerInvalido = null;

    for(const campo of campoSocios) {
        const correcto = validarSocios(campoSocios);
        if(!correcto  && primerInvalido === null) {
            primerInvalido = campo;
        }
    }
    if(primerInvalido) {
        estadoSocios.textContent = 'Hay errores. Revisa los campos indicados.';
        primerInvalido.focus();
        return;
    }
    estadoSocios.textContent = 'Datos validos.';
    //formSocios.submit();
});