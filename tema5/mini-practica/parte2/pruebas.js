import {
    nombreValido,
    usuarioValido,
    passwordValido,
    telefonoValido,
    codigoServicioValido,
    referenciaValida,
    extraerCifras,
    separarEtiquetas,
    normalizarEspacios
} from "./funciones.js";

const casos = [
    ["nombre Ana Lopez", nombreValido(normalizarEspacios(" Ana   Lopez ")) === true],
    ["nombre limite 4", nombreValido("Ana A") === true],
    ["nombre limite 50", nombreValido("A".repeat(50)) === true],
    ["nombre sobre limite", nombreValido("A".repeat(51)) === false],
    ["nombre con cifra", nombreValido("Ana2 Lopez") === false],
    ["usuario valido", usuarioValido("ana77") === true],
    ["usuario limite 5", usuarioValido("Ana12") === true],
    ["usuario limite 20", usuarioValido("A" + "a".repeat(19)) === true],
    ["usuario sobre limite", usuarioValido("A" + "a".repeat(20)) === false],
    ["usuario empieza cifra", usuarioValido("7ana7") === false],
    ["usuario con guion bajo", usuarioValido("ana_7") === false],
    ["password valida", passwordValido("Clave_12") === true],
    ["password limite 8", passwordValido("Clave_12") === true],
    ["password limite 16", passwordValido("A" + "a".repeat(14) + "1") === true],
    ["password sobre limite", passwordValido("A" + "a".repeat(15) + "1") === false],
    ["password empieza cifra", passwordValido("1Clave_2") === false],
    ["password con guion", passwordValido("Clave-12") === false],
    ["telefono valido", telefonoValido("+34 612 345 678") === true],
    ["telefono 7 valido", telefonoValido("+34 712 345 678") === true],
    ["telefono sin mas", telefonoValido("612345678") === false],
    ["telefono sin espacios", telefonoValido("+34612345678") === false],
    ["telefono empieza 5", telefonoValido("+34 512 345 678") === false],
    ["codigo valido", codigoServicioValido("DEP-007") === true],
    ["codigo minuscula", codigoServicioValido("dep-007") === false],
    ["referencia CITA", referenciaValida("CITA-0001") === true],
    ["referencia RES", referenciaValida("RES-1234") === true],
    ["referencia corta", referenciaValida("RES-001") === false],
    ["extraer cifras", JSON.stringify(extraerCifras("Hay 12 clases y 3 pistas")) === JSON.stringify(["12", "3"])],
    ["sin cifras", JSON.stringify(extraerCifras("sin cifras")) === JSON.stringify([])],
    ["etiquetas", JSON.stringify(separarEtiquetas("club, salud, , verano")) === JSON.stringify(["club", "salud", "verano"])],
    ["normalizar espacios", normalizarEspacios(" Ana   Lopez ") === "Ana Lopez"]
];

casos.forEach(([nombre, pasa]) => {
    console.assert(pasa, "Falla la prueba: " + nombre);
});

console.table(casos.map(([nombre, pasa]) => ({ nombre, pasa })));
