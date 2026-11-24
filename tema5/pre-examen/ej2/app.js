const contador = document.getElementById('total');
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');

let num = 0;
menos.disabled = true;

mas.addEventListener('click', () => {
    menos.disabled = false;
    num++;
    contador.textContent = num;
});

menos.addEventListener('click', () => {
    if(num <= 1) {
        menos.disabled = true;
    }
    num--;
    contador.textContent = num;
});