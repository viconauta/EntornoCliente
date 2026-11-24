# Pruebas de la Parte 1

## Como abrir

Abre `index.html` mediante un servidor local, por ejemplo con la extension Live Server de VS Code. Los formularios no se envian al servidor y no se guardan datos reales.

## Casos comprobados

| Formulario | Entrada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| Socios | Formulario vacio | Todos los errores visibles y foco en nombre | Se muestran los errores de nombre, usuario, correo, edad, modalidad, contraseña, confirmación, teléfono, foto y condiciones; el foco queda en nombre |
| Socios | Nombre con espacios | Error de longitud tras trim() | Se obtiene el error «Escribe un nombre de 4 a 50 caracteres.» |
| Socios | Edad 17, 18.5, 101 | Errores; 18 valido | Las edades 17, 18.5 y 101 muestran el error; 18 permite continuar |
| Socios | Contraseñas distintas | Error de confirmacion | La confirmación muestra «La confirmación no coincide con la contraseña.» |
| Socios | Foto PNG / JPEG sin superar limite | PNG rechazado; JPEG valido | PNG muestra el error de tipo JPEG; JPEG válido permite continuar |
| Socios | JPEG de 5.000.001 bytes | Error de tamaño; 5.000.000 valido | El archivo de 5.000.001 bytes muestra el error de tamaño; el de 5.000.000 bytes permite continuar |
| Servicios | Duracion 14, 20, 30 | 14 y 20 errores; 30 valido | 14 y 20 muestran el error de múltiplo de 15; 30 permite continuar |
| Servicios | Precio vacio, negativo, 0, 1.234 | Errores segun regla; 0 y dos decimales validos | Vacío y negativo muestran error; 0 es válido; 1.234 muestra el error del paso 0.01 |
| Testimonios | Autor o texto con espacios | Errores tras trim() | Se muestran los errores correspondientes porque trim() reduce el texto antes de comprobar la longitud |
| Testimonios | Testimonio sin marcar autorizacion | Valido y estado privado | Se permite el envío y el estado indica que el testimonio quedará privado |
| Noticias | Ayer, hoy, manana | Ayer y hoy invalidos; manana valida | Ayer y hoy muestran el error de fecha; mañana permite continuar |
| Noticias | Sin imagen, PNG, JPEG grande | Solo JPEG valido hasta 5.000.000 bytes | Sin archivo y PNG muestran error; JPEG válido solo permite continuar hasta el límite incluido |
| Citas | Fecha pasada y futura | Pasada invalida; futura valida | La fecha pasada muestra el error; una fecha futura permite continuar |
| Citas | Opciones iniciales o confirmacion sin marcar | Errores visibles | Se muestran los errores de socio, servicio y confirmación; el foco queda en el primer campo incorrecto |

Cada prueba debe repetirse tras corregir el campo para comprobar que el error desaparece y que el estado vuelve a quedar limpio.
