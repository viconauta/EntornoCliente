import {tienda} from "./datos.js";

const grid = document.getElementById("grid");

for(const disco of tienda) {
    //creamos el contenedor que contiene toda la tarjeta con imagen y etiquetas del disco
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    grid.append(tarjeta);

    //creamos el contenedor de la imagen
    const imagen = document.createElement("div");
    imagen.classList.add("cont-img");
    tarjeta.append(imagen);

    //añadimos al imagen
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = disco.caratula;
    img.alt = disco.titulo;
    img.onerror = () => {
        img.src = "./img/imgDefecto.jpg"
        img.classList.add("img-defecto");
    };
    imagen.append(img);

    //creamos el contenedor de titulo y artista
    const dato = document.createElement("div");
    dato.classList.add("dato");
    tarjeta.append(dato);

    //metemos titulo y artista dentro de su contenedor
    const titulo = document.createElement("h2");
    const artista = document.createElement("p");
    titulo.textContent = disco.titulo;
    artista.textContent = disco.artista;
    dato.append(titulo, artista);

    //contenedor año y lugar
    const datoCreacion = document.createElement("div");
    datoCreacion.classList.add("datoCreacion");
    tarjeta.append(datoCreacion);

    //metemos pais y años en su contenedor
    const pais = document.createElement("p");
    pais.classList.add("pais");
    const anio = document.createElement("span");
    pais.textContent = disco.pais;
    anio.textContent = disco.publicacion;
    datoCreacion.append(pais, anio);

    //contenedor de copias y precio
    const contPrecio = document.createElement("div");
    contPrecio.classList.add("precio");
    tarjeta.append(contPrecio);

    //añadimos copias vendidas y precio
    const copias = document.createElement("span");
    const precio = document.createElement("p");
    const strong = document.createElement("strong");
    copias.textContent = `${disco.copias}K copias vendidas`;
    strong.textContent = `€${disco.precio}`;
    precio.append(strong);
    contPrecio.append(copias, strong);
};