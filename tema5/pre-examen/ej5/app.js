const lista = document.getElementById('lista');
const botonBorrar = document.querySelector('.borrar');
const total = document.getElementById('total');

function actualizarTotal() {
    total.textContent = lista.querySelectorAll('li').length;
}

actualizarTotal();

lista.addEventListener('click', (e) => {
    const boton = e.target.closest('.borrar');

    boton.closest('li').remove();
    actualizarTotal();
});