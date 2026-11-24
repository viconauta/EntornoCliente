# Proyecto Club Deportivo

Proyecto de formularios para la Unidad Didactica 5 de Desarrollo Web en Entorno Cliente.

## Contenido

- `parte1/`: formularios y validaciones del Tema 5A.
- `parte2/`: ampliacion con expresiones regulares del Tema 5B.

Ambas partes conservan cinco formularios separados: socios, servicios, testimonios, noticias y citas.

## Como ejecutar

Abre `parte1/index.html` o `parte2/index.html` mediante Live Server o cualquier servidor local.

No se envian datos a ningun servidor ni se guarda informacion real. Los resultados se muestran como operaciones simuladas.

## Parte 1

La primera entrega utiliza atributos HTML como `required`, `type`, `min`, `max`, `step`, `minlength` y `maxlength`.

Las reglas propias se realizan con JavaScript mediante `trim()`, `valueAsNumber`, `checked`, `files`, `setCustomValidity()` y `validity`.

Los errores aparecen junto al campo, actualizan `aria-invalid` y llevan el foco al primer campo incorrecto.

Las pruebas manuales de esta entrega estan documentadas en `parte1/pruebas.md`.

## Parte 2

La segunda entrega mantiene las validaciones de la parte 1 y añade formatos con expresiones regulares.

- Los nombre se normalizan con `trim()` y `replace()`.
- Los usuarios, contraseñas, teléfonos y referencias se comprueban con patrones anclados.
- Los códigos de servicio requieren `DEP-` y tres cifras.
- Las cifras del testimonio se extraen con `match()` y una expresion regular global.
- Las etiquetas de las noticias se separan con `split()`.
- La demostracion independiente utiliza `required` y `pattern` en el formulario HTML.

Las pruebas automaticas se encuentran en `parte2/pruebas.js`. Se ejecutan al abrir `parte2/index.html` y muestran su resultado en la consola del navegador.

Los patrones comprueban formato, pero no garantizan que el dato exista o que una persona pueda ser identificada por él.
