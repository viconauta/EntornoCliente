//visualizacion
export function mostrarCatalogoHTML(array) {
    const tarjeta = document.getElementById("catalogo");
    const contenido = array.map(m =>
        `<div class="tarjeta">
            <div class="titulo">
                <h3>${m.nombre}</h3>
                <p>${m.artista}</p>
            </div>
            <div class="info">
                <p>ID: ${m.id} / Genero: ${m.genero}</p>
                <p>Precio: ${m.precio} / Puntuacion: ${m.puntuacion}</p>
            </div>
        </div>`
    ).join("");
    tarjeta.innerHTML = contenido;
}