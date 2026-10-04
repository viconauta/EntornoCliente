const discos = [
  { titulo: "Bad", pais: "Estados Unidos", copiasVendidas: 35000000, anio: 1987 },
  { titulo: "Rumours", pais: "Estados Unidos", copiasVendidas: 40000000, anio: 1977 },
  { titulo: "The Dark Side of the Moon", pais: "Reino Unido", copiasVendidas: 45000000, anio: 1973 },
  { titulo: "Come On Over", pais: "Canada", copiasVendidas: 40000000, anio: 1997 },
  { titulo: "Thriller", pais: "Estados Unidos", copiasVendidas: 70000000, anio: 1982 },
  { titulo: "Led Zeppelin IV", pais: "Reino Unido", copiasVendidas: 37000000, anio: 1971 },
  { titulo: "El Guardaespaldas", pais: "Estados Unidos", copiasVendidas: 42000000, anio: 1992 },
  { titulo: "Saturday Night Fever", pais: "Estados Unidos", copiasVendidas: 40000000, anio: 1977 },
  { titulo: "Back in Black", pais: "Australia", copiasVendidas: 50000000, anio: 1980 },
  { titulo: "Their Greatest Hits", pais: "Estados Unidos", copiasVendidas: 44000000, anio: 1976 },
];


// A partir de una cadena de búsqueda filtra todos los discos que la incluyan en su título.
const texto = "Come on over";
const busquedaTitulo = discos.find(p => p.titulo.toLowerCase() === texto.toLowerCase());
console.log(`Titulo: ${busquedaTitulo.titulo} \n Pais: ${busquedaTitulo.pais} \n Copias: ${busquedaTitulo.copiasVendidas} \n Año: ${busquedaTitulo.anio}`);


// Filtrar los discos por país (suponemos que lo ha introducido el usuario en un variable) y después 
// mostrarlos ordenados por copias vendidas
const nombrePais = "Reino Unido";
const ordenado = [...discos].sort((a, b) => b.copiasVendidas - a.copiasVendidas);
for(const orden of ordenado) {
  if(orden.pais === nombrePais) {
    console.log(`Pais: ${nombrePais}: \nTitulo: ${orden.titulo} \n Copias: ${orden.copiasVendidas}`);
  }
}


// Mostrar los datos del álbum más reciente. 
const reciente = Math.max(...discos.map(d => d.anio));
const imprimir = discos.find(p => p.anio === reciente);
console.log(`Titulo: ${imprimir.titulo} \nPais: ${imprimir.pais} \nCopias: ${imprimir.copiasVendidas} \nAño: ${imprimir.anio}`);


// Obtener el título que menos copias ha vendido 
const menosCopia = Math.min(...discos.map(d => d.copiasVendidas));
const tituloMenosCopias = discos.find(d => d.copiasVendidas === menosCopia);
console.log(tituloMenosCopias.titulo);


// Crear un array de países sin repetición que existen en la tienda de discos. 
const paisUnico = discos.filter((disco, indice, array) => {
  return array.findIndex(d => d.pais === disco.pais) === indice;
});
for(const pais of paisUnico) {
  console.log(pais.pais);
}


// Obtener la recaudación total organizada por países. 
const totalPaises = discos.reduce((suma, disco) => {
  const lugar = disco.pais;
  if(!suma[lugar]) {
    suma[lugar] = 0;
  }
  suma[lugar] += disco.copiasVendidas;
  return suma;
}, {});
for(const pais in totalPaises) {
  console.log(`${pais}: ${totalPaises[pais]}`);
}