//visualizacion
export function mostrarCatalogoHTML(array) {
    const tarjeta = document.getElementById("catalogo");
    const contenido = array.map((a, i) => `
        <div class="tarjeta">
            <div class="info">
                <h3>${i + 1}.- ${a.nombre} - ${a.artista}</h3>
                <p>ID: ${a.id} / Genero: ${a.genero}</p>
                <p>Precio: ${a.precio} / Puntuacion: ${a.puntuacion}/10</p>
            </div>
        </div>
        `).join("");
    tarjeta.innerHTML += contenido;
}

//calculos
export function calcularPrecioPromedio(array) {
    const analisis = document.querySelector(".tarjeta-analisis");
    let suma = 0;
    array.forEach(element => {
        suma += element.precio
    });
    const contenido = `<p>Precio promedio: ${(suma / array.length).toFixed(1)}€</p>`;
    analisis.innerHTML = contenido;
}

export function calcularPuntuacionPromedio(array) {
    const analisis = document.querySelector(".tarjeta-analisis");
    let suma = 0;
    array.forEach(element => {
        suma += element.puntuacion;
    });
    const contenido = `<p>Puntuacion promedio: ${(suma / array.length).toFixed(1)}/10</p>`;
    analisis.innerHTML += contenido;
}

//ordenamiento
export function ordenarPorPuntuacion(array) {
    const top = document.getElementById("top");
    const puntuacionOrdenado = [...array].sort((a, b) => b.puntuacion - a.puntuacion).slice(0, 5);
    const top5 = puntuacionOrdenado.map(a => `
        <div class="tarjeta">
            <div class="info">
                <h3>${a.nombre} - ${a.artista}</h3>
                <p>ID: ${a.id} / Genero: ${a.genero}</p>
                <p>Precio: ${a.precio} / Puntuacion: ${a.puntuacion}/10</p>
            </div>
        </div>
        `).join("");
        top.innerHTML += top5;
    }

export function ordenarPorPrecio(array) {
    const economicos = document.getElementById("economicos");
    const ordenPrecio = [...array].sort((a, b) => a.precio - b.precio).slice(0, 5);
    const top5 = ordenPrecio.map(a => `
        <div class="tarjeta">
            <div class="info">
                <h3>${a.nombre} - ${a.artista}</h3>
                <p>ID: ${a.id} / Genero: ${a.genero}</p>
                <p>Precio: ${a.precio} / Puntuacion: ${a.puntuacion}/10</p>
            </div>
        </div>
        `).join("");
        economicos.innerHTML += top5;
}

//verificacion
export function existeCategoria(array, categoria) {
    const verificaciones = document.getElementById("verificaciones");
    let contenido;
    const existe = array.some(a => a.genero === categoria);
    if(existe) {
        contenido = `
            <p>¿Hay canciones de ${categoria}? Si</p>
            `;
    } else {
        contenido = `
            <p>¿Hay canciones de ${categoria}? No</p>
            `;
    }
    verificaciones.innerHTML += contenido;
}

export function todosCumplenPrecioMinimo(array, precio) {
    const verificaciones = document.getElementById("verificaciones");
    let contenido;
    const todos = array.every(a => a.precio > precio);
    if(todos) {
        contenido = `
            <p>¿Todas las canciones cuestan mas de ${precio}€? Si</p>
        `;
    } else {
        contenido = `
            <p>¿Todas las canciones cuestan mas de ${precio}€? No</p>
        `;   
    }
    verificaciones.innerHTML += contenido;
}

//filtrado
export function filtrarPorCategoria(array, categoria) {
    const filtroCategoria = document.getElementById("filtro-categoria");
    const filtrado = array.filter(a => a.genero === categoria);
    const encontrados = filtrado.length;
    const texto = `
        <div class="titulo-seccion">
            <h2>Canciones ${categoria}</h2>
        </div>
        <div>
            <span>Encontrado: <b>${encontrados}</b></span>
        </div>`;
    const copiaFiltro = filtrado.map(a => `
        <div class="tarjeta">
            <p>${a.nombre} - ${a.artista} - ${a.precio}€ - (${a.puntuacion}/10)</p>
        </div>
        `).join("");
    filtroCategoria.innerHTML += texto + copiaFiltro;
}

export function filtrarPorPuntuacionMinima(array, puntuacion) {
    const filtroPuntuacion = document.getElementById("puntuacion");
    const filtro = array.filter(a => a.puntuacion > puntuacion);
    const encontrados = filtro.length;
    const html = `
        <div>
            <span>Canciones de maxima calidad: <b>${encontrados}</b></span>
        </div>
        `;
    const copiaFiltro = filtro.map(a => `
        <div>
            <p>${a.nombre} | ${a.artista}</p>
            <p>${a.genero} | <strong>${a.puntuacion}/10</strong> | ${a.precio}€</p>
        </div>
        `).join("");
    filtroPuntuacion.innerHTML += html + copiaFiltro;
}

//busqueda
function obtenerIndicePorId(array, id) {
    let indice;
    return indice = array.findIndex(a => a.id === id);
}

export function buscarPorId(array, id) {
    const busqueda = document.getElementById("busqueda");
    const buscarId = array.find(a => a.id === id);
    const texto = `
        <diV class="tarjeta"> 
            <p class="negrita">Busqueda por ID "${id}":</p>
    `;
    const contenido = `
            <p>Titulo: <strong>${buscarId.nombre} - ${buscarId.artista}</strong></p>
            <p>Posicion en el catalogo: <strong>#${obtenerIndicePorId(array, id) + 1}</strong></p>
            <p>Genero: ${buscarId.genero} | Precio: ${buscarId.precio}€ | Puntuacion: ${buscarId.puntuacion}/10</p>
        </div>
        `;
    busqueda.innerHTML += texto + contenido;
}

export function buscarPorNombre(array, nombre) {
    const busqueda = document.getElementById("busqueda");
    const buscarNombre = array.find(a => a.nombre === nombre);
    const contenido = `
        <div class="tarjeta">
            <p>Busqueda por titulo "${nombre}:</p>
            <p>ID: ${buscarNombre.id} | Artista: ${buscarNombre.artista}</p>
            <P>Genero: ${buscarNombre.genero} | Precio: ${buscarNombre.precio}€ | Puntuacion: ${buscarNombre.puntuacion}/10</p>
        </div>
    `;
    busqueda.innerHTML += contenido;
}

//manipulacion de objetos
export function obtenerPropiedades(objeto) {
    const propiedades = document.getElementById("propiedades");
    let texto = `
        <div class="tarjeta">
            <p>Propiedades de un objeto (Object.keys):</p>
            <p>
    `;
    Object.keys(objeto).forEach(clave => {
        texto += `
            <b>${clave}</b>
        `
    });
    texto += `
            </p>
        </div>
    `;
    propiedades.innerHTML += texto;
}

export function objetoAEntradas(objeto) {
    const propiedades = document.getElementById("propiedades");
    let texto = `
        <div class="tarjeta">
            <p>Objeto convertido a entradas (Object.entries):</p>
    `;
    for(const[clave, valor] of Object.entries(objeto)) {
        texto += `
            <p>${clave}: <strong>${valor}</strong></p>
        `;
    }
    texto += `
        </div>
    `;
    propiedades.innerHTML += texto;
}