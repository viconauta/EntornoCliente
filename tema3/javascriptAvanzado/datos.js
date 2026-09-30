const discos = [
  { titulo: "Thriller", pais: "Estados Unidos", copiasVendidas: 70000000 },
  { titulo: "Back in Black", pais: "Australia", copiasVendidas: 50000000 },
  { titulo: "The Dark Side of the Moon", pais: "Reino Unido", copiasVendidas: 45000000 },
  { titulo: "Their Greatest Hits (1971–1975)", pais: "Estados Unidos", copiasVendidas: 44000000 },
  { titulo: "El Guardaespaldas (Banda Sonora)", pais: "Estados Unidos", copiasVendidas: 42000000 },
  { titulo: "Rumours", pais: "Reino Unido / Estados Unidos", copiasVendidas: 40000000 },
  { titulo: "Saturday Night Fever", pais: "Estados Unidos", copiasVendidas: 40000000 },
  { titulo: "Come On Over", pais: "Canada", copiasVendidas: 40000000 },
  { titulo: "Led Zeppelin IV", pais: "Reino Unido", copiasVendidas: 37000000 },
  { titulo: "Bad", pais: "Estados Unidos", copiasVendidas: 35000000 }
];

//const texto = prompt("Inserta un titulo");
const texto = "Thriller";

const busquedaTitulo = discos.find(p => p.titulo.toLowerCase === texto.toLowerCase);
console.log(busquedaTitulo);

const pais = "Canada";