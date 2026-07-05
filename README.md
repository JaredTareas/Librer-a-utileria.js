**Nombre del alumno:** Luis Jared García García  

**Nombre del proyecto:** Librería JS de Validaciones  

**Problema que resuelve:**  
Esta librería ayuda a validar datos comunes en formularios web, como correos electrónicos, nombres, fechas de nacimiento, contraseñas, longitud de números y códigos postales.

El objetivo es evitar que el usuario escriba datos incorrectos antes de enviar un formulario o iniciar sesión.

---

## Descripción del proyecto

Este proyecto consiste en una librería de JavaScript llamada `utileria.js`.

La librería no utiliza frameworks, no tiene componentes visuales y puede integrarse fácilmente en páginas HTML.

Se usa en:

- Un formulario de registro.
- Una ventana modal que muestra la edad calculada.
- Un login que valida correo y contraseña.


## Instalación

Para utilizar la librería en un archivo HTML, se debe enlazar el archivo JavaScript antes de cerrar la etiqueta `body`.

Ejemplo si el archivo `utileria.js` está en la misma carpeta:

```html
<script src="utileria.js"></script>
```

En este proyecto, como la librería está dentro de la carpeta `js`, se usa así:

```html
<script src="./js/utileria.js"></script>
```
<img width="451" height="57" alt="image" src="https://github.com/user-attachments/assets/7b3b441b-7afd-4282-adde-32ee1a19e7c4" />




---


## 1. validarCorreo(correo)

Valida que un correo electrónico tenga un formato correcto.

function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}


## 2. soloLetras(texto)

Valida que un texto contenga solo letras mayúsculas, minúsculas y vocales acentuadas.

function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto);
}

## 3. validarLongitud(numero, maxLongitud)

Valida que un número no exceda una longitud máxima.

 * Valida que un número no exceda una longitud máxima.
 * @param {number|string} numero - Número a validar.
 * @param {number} maxLongitud - Cantidad máxima de dígitos permitidos.
 * @returns {boolean} Retorna true si la longitud es válida, false si se pasa.
 */
function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}

## 4. calcularEdad(fechaNacimiento)

Calcula la edad de una persona a partir de su fecha de nacimiento.

function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

   return edad;
}

## 5. esMayorDeEdad(fechaNacimiento)

Valida si una persona tiene 18 años o más.
 * Valida si una persona es mayor de edad.
 * @param {string} fechaNacimiento - Fecha de nacimiento en formato YYYY-MM-DD.
 * @returns {boolean} Retorna true si tiene 18 años o más, false si es menor.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

## 6. validarPassword(password)

Valida que una contraseña sea segura.

La contraseña debe tener:

- Mínimo 8 caracteres
- Una letra mayúscula
- Una letra minúscula
- Un número
- Un carácter especial

/**
 * Valida que una contraseña sea segura.
 * Debe contener al menos una mayúscula, una minúscula, un número,
 * un carácter especial y mínimo 8 caracteres.
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} Retorna true si la contraseña es válida, false si no cumple.
 */
function validarPassword(password) {
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return expresion.test(password);
}

## Funciones adicionales

Además de las funciones obligatorias, se agregaron dos funciones extra.

## 7. generarUsuario(nombre, apellido)

Genera un nombre de usuario usando el nombre y el apellido de una persona.

/**
 * Genera un nombre de usuario usando el nombre y el apellido de una persona.
 * Convierte el texto a minúsculas y une ambos datos con un punto.
 * @param {string} nombre - Nombre de la persona.
 * @param {string} apellido - Apellido de la persona.
 * @returns {string} Retorna un nombre de usuario generado.
 */
function generarUsuario(nombre, apellido) {
    const usuario = nombre.trim().toLowerCase() + "." + apellido.trim().toLowerCase();
    return usuario;
}

## 8. validarCodigoPostal(codigoPostal)

Valida que un código postal tenga exactamente 5 dígitos numéricos.

/**
 * Valida que un código postal tenga exactamente 5 dígitos numéricos.
 * @param {string|number} codigoPostal - Código postal a validar.
 * @returns {boolean} Retorna true si el código postal tiene 5 dígitos, false si no cumple.
 */
function validarCodigoPostal(codigoPostal) {
    const expresion = /^[0-9]{5}$/;
    return expresion.test(codigoPostal);
}
