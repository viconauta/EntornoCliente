const lista = document.querySelectorAll('#lista li');
const input = document.getElementById('busqueda');

busqueda.addEventListener('input', () => {
    let busqueda = input.value.trim().toLocaleLowerCase();

    lista.forEach(l => {
        let texto = l.textContent.toLocaleLowerCase();
        if(texto.includes(busqueda)) {
            l.hidden = false;
        }
        else {
            l.hidden = true;
        }
    });
});