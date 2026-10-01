const discos = [
  { titulo: "Bad", pais: "Estados Unidos", copiasVendidas: 35000000, año: 1987 },
  { titulo: "Rumours", pais: "Estados Unidos", copiasVendidas: 40000000, año: 1977 },
  { titulo: "The Dark Side of the Moon", pais: "Reino Unido", copiasVendidas: 45000000, año: 1973 },
  { titulo: "Come On Over", pais: "Canada", copiasVendidas: 40000000, año: 1997 },
  { titulo: "Thriller", pais: "Estados Unidos", copiasVendidas: 70000000, año: 1982 },
  { titulo: "Led Zeppelin IV", pais: "Reino Unido", copiasVendidas: 37000000, año: 1971 },
  { titulo: "El Guardaespaldas", pais: "Estados Unidos", copiasVendidas: 42000000, año: 1992 },
  { titulo: "Saturday Night Fever", pais: "Estados Unidos", copiasVendidas: 40000000, año: 1977 },
  { titulo: "Back in Black", pais: "Australia", copiasVendidas: 50000000, año: 1980 },
  { titulo: "Their Greatest Hits", pais: "Estados Unidos", copiasVendidas: 44000000, año: 1976 }
];


/* A partir de una cadena de búsqueda filtra todos los discos que la incluyan en su título. */

//const texto = prompt("Inserta un titulo");
const texto = "Thriller";

const busquedaTitulo = discos.find(p => p.titulo.toLowerCase === texto.toLowerCase);
console.log(busquedaTitulo);

/* Filtrar los discos por país (suponemos que lo ha introducido el usuario en un variable) y después 
mostrarlos ordenados por copias vendidas*/

const nombrePais = "Reino Unido";

const ordenado = [...discos].sort((a, b) => b.copiasVendidas - a.copiasVendidas);
for(const orden of ordenado) {
  if(orden.pais === nombrePais) {
    console.log(orden);
  }
}

/* Mostrar los datos del álbum más reciente. */



/* Obtener el título que menos copias ha vendido */



/* Crear un array de países sin repetición que existen en la tienda de discos. */



/* Obtener la recaudación total organizada por países. */

