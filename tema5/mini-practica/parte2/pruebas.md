# Pruebas de la Parte 2

## Abrir

Abre `index.html` mediante Live Server o un servidor local. Las pruebas automaticas se ejecutan al abrir la pagina y escriben sus resultados en la consola.

## Expresiones regulares

| Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|
| Nombre ` Ana   Lopez ` | Se convierte en `Ana Lopez` y es valido | Comprobado por `pruebas.js` |
| Nombre `Ana2 Lopez` | Invalido | Comprobado por `pruebas.js` |
| Usuario `ana77` | Valido | Comprobado por `pruebas.js` |
| Usuario `7ana7` | Invalido | Comprobado por `pruebas.js` |
| Usuario `ana_7` | Invalido | Comprobado por `pruebas.js` |
| Contraseña `Clave_12` | Valida | Comprobada por `pruebas.js` |
| Contraseña `1Clave_2` | Invalida | Comprobada por `pruebas.js` |
| Contraseña `Clave-12` | Invalida | Comprobada por `pruebas.js` |
| Telefono `+34 612 345 678` | Valido | Comprobado por `pruebas.js` |
| Telefono `+34 712 345 678` | Valido | Comprobado por `pruebas.js` |
| Telefono sin prefijo | Invalido | Comprobado por `pruebas.js` |
| Codigo `DEP-007` | Valido | Comprobado por `pruebas.js` |
| Codigo `dep-007` | Invalido | Comprobado por `pruebas.js` |
| Referencia `CITA-0001` y `RES-1234` | Validas | Comprobadas por `pruebas.js` |
| Referencia `RES-001` | Invalida | Comprobada por `pruebas.js` |
| `"Hay 12 clases y 3 pistas"` | `["12", "3"]` | Comprobado por `pruebas.js` |
| Texto sin cifras | `[]` | Comprobado por `pruebas.js` |
| `"club, salud, , verano"` | `["club", "salud", "verano"]` | Comprobado por `pruebas.js` |

## Integracion manual

| Entrada | Resultado esperado |
|---|---|
| Formulario de socios con nombre, usuario, telefono o contraseña invalidos | Mensaje junto a cada campo |
| Corregir un campo tras el primer envio | El mensaje desaparece al volver a ser valido |
| Testimonio con cifras | El boton muestra todas las secuencias numericas |
| Testimonio sin cifras | El resultado es una lista vacia |
| Noticias con etiquetas vacias y sobrantes | Solo aparecen las etiquetas con texto |
| Referencia con texto antes o despues | Invalida por las anclas |
| `pattern="DEP-[0-9]{3}"` con vacio | Error de obligatoriedad |
| Demo con `DEP-007` | Valido |
| Demo con `XDEP-007` | Invalido |
