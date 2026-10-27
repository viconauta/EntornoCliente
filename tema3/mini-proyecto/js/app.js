import {musica} from "./datos.js";
import {calcularPuntuacionPromedio, calcularPrecioPromedio, mostrarCatalogoHTML, ordenarPorPuntuacion, ordenarPorPrecio, existeCategoria, todosCumplenPrecioMinimo, filtrarPorCategoria, filtrarPorPuntuacionMinima} from "./funciones.js";

//llamada a mostrar catalogo
mostrarCatalogoHTML(musica);

//llamada a precio promedio
calcularPrecioPromedio(musica);

//llamada a puntuacion promedio
calcularPuntuacionPromedio(musica);

//total de canciones
const tarjeta = document.querySelector(".tarjeta-analisis");
const totalCanciones = document.createElement("p");
totalCanciones.textContent = `Total de canciones: ${musica.length}`;
tarjeta.append(totalCanciones);

//llamada a top 5 de puntuacion
ordenarPorPuntuacion(musica);

//llamada a top 5 mas economicos
ordenarPorPrecio(musica);

//llamada a verificaciones del catalogo
let categoria = "Rock";
existeCategoria(musica, categoria);

categoria = "Regueton";
existeCategoria(musica, categoria);

let precio = 10;
todosCumplenPrecioMinimo(musica, precio);

precio = 7;
todosCumplenPrecioMinimo(musica, precio);

//llamada a filtrar por categoria
categoria = "Rock";
filtrarPorCategoria(musica, categoria);

//filtro premium
const puntuacionMinima = 9;
filtrarPorPuntuacionMinima(musica, puntuacionMinima);