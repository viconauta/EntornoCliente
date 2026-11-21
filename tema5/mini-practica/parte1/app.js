//OCULTAMOS Y MOSTRAMOS LOS FORMULARIOS
//=====================================

const btnSocios = document.querySelector('#socios');
btnSocios.addEventListener('click', () => {
    document.querySelector('.socios').classList.toggle('oculto');
});

const btnServicios = document.querySelector('#servicios');
btnServicios.addEventListener('click', () => {
    document.querySelector('.servicios').classList.toggle('oculto');
});

const btnTestimonios = document.querySelector('#testimonios');
btnTestimonios.addEventListener('click', () => {
    document.querySelector('.testimonios').classList.toggle('oculto');
});

const btnNoticias = document.querySelector('#noticias');
btnNoticias.addEventListener('click', () => {
    document.querySelector('.noticias').classList.toggle('oculto');
});

const btnCitas = document.querySelector('#citas');
btnCitas.addEventListener('click', () => {
    document.querySelector('.citas').classList.toggle('oculto');
});

//ENVIAMOS EL FORMULARIO AL PRESIONAR ENTER
//=========================================

document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        document.querySelector('.btn-enviar').click();
    }
});