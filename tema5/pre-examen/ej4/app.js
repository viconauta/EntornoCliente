import { discos } from './datos.js';

const filtroDiscos = [...discos].filter(d => d.precio <= 20);

const contenedorLista = document.getElementById('discos');

filtroDiscos.forEach((disco) => {
    const lista = document.createElement('li');
    lista.textContent = `${disco.titulo} - ${disco.precio}`;
    contenedorLista.append(lista);
});