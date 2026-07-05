# Librería JS de Validaciones

## Portada

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
- La consola del navegador para probar los resultados de las funciones.

---

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

Evidencia de instalación de la librería:

<img width="451" height="57" alt="Instalación de utileria.js" src="https://github.com/user-attachments/assets/7b3b441b-7afd-4282-adde-32ee1a19e7c4" />

---

## Uso con ejemplos de código embebido

A continuación se muestran ejemplos reales del código de la librería y cómo se puede utilizar.

---

## 1. validarCorreo(correo)

Valida que un correo electrónico tenga un formato correcto.

```js
function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
}
```

Ejemplo de uso:

```js
console.log(validarCorreo("jared@gmail.com"));
console.log(validarCorreo("jaredgmail.com"));
```

Resultado esperado:

```text
true
false
```

---

## 2. soloLetras(texto)

Valida que un texto contenga solo letras mayúsculas, minúsculas y vocales acentuadas.

```js
function soloLetras(texto) {
    const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expresion.test(texto);
}
```

Ejemplo de uso:

```js
console.log(soloLetras("Jared García"));
console.log(soloLetras("Jared123"));
```

Resultado esperado:

```text
true
false
```

---

## 3. validarLongitud(numero, maxLongitud)

Valida que un número no exceda una longitud máxima.

```js
function validarLongitud(numero, maxLongitud) {
    return numero.toString().length <= maxLongitud;
}
```

Ejemplo de uso:

```js
console.log(validarLongitud("9513571146", 10));
console.log(validarLongitud("951357114633", 10));
```

Resultado esperado:

```text
true
false
```

---

## 4. calcularEdad(fechaNacimiento)

Calcula la edad de una persona a partir de su fecha de nacimiento.

```js
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
```

Ejemplo de uso:

```js
console.log(calcularEdad("2004-05-03"));
```

Resultado esperado:

```text
Edad calculada según la fecha actual
```

---

## 5. esMayorDeEdad(fechaNacimiento)

Valida si una persona tiene 18 años o más.

```js
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}
```

Ejemplo de uso:

```js
console.log(esMayorDeEdad("2004-05-03"));
console.log(esMayorDeEdad("2010-05-03"));
```

Resultado esperado:

```text
true
false
```

---

## 6. validarPassword(password)

Valida que una contraseña sea segura.

La contraseña debe tener:

- Mínimo 8 caracteres.
- Una letra mayúscula.
- Una letra minúscula.
- Un número.
- Un carácter especial.

```js
function validarPassword(password) {
    const expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return expresion.test(password);
}
```

Ejemplo de uso:

```js
console.log(validarPassword("Jared2026#"));
console.log(validarPassword("jared123"));
```

Resultado esperado:

```text
true
false
```

---

## Funciones adicionales

Además de las funciones obligatorias, se agregaron dos funciones extra.

---

## 7. generarUsuario(nombre, apellido)

Genera un nombre de usuario usando el nombre y el apellido de una persona.

```js
function generarUsuario(nombre, apellido) {
    const usuario = nombre.trim().toLowerCase() + "." + apellido.trim().toLowerCase();
    return usuario;
}
```

Ejemplo de uso:

```js
console.log(generarUsuario("Jared", "Garcia"));
```

Resultado esperado:

```text
jared.garcia
```

---

## 8. validarCodigoPostal(codigoPostal)

Valida que un código postal tenga exactamente 5 dígitos numéricos.

```js
function validarCodigoPostal(codigoPostal) {
    const expresion = /^[0-9]{5}$/;
    return expresion.test(codigoPostal);
}
```

Ejemplo de uso:

```js
console.log(validarCodigoPostal("68000"));
console.log(validarCodigoPostal("6800"));
```

Resultado esperado:

```text
true
false
```

---

## Ejemplo de integración en HTML

Este es un ejemplo de cómo se puede usar la librería dentro de una página HTML.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Prueba de utileria.js</title>
</head>
<body>

    <input type="text" id="correo" placeholder="Escribe tu correo">
    <button onclick="validar()">Validar correo</button>

    <p id="resultado"></p>

    <script src="./js/utileria.js"></script>

    <script>
        function validar() {
            const correo = document.getElementById("correo").value;
            const resultado = document.getElementById("resultado");

            if (validarCorreo(correo)) {
                resultado.textContent = "Correo válido";
                console.log("Correo válido");
            } else {
                resultado.textContent = "Correo inválido";
                console.log("Correo inválido");
            }
        }
    </script>

</body>
</html>
```

---

## Integración en el formulario principal

En el archivo `index.html` se usa la librería para validar los datos del formulario de registro.

Datos que se validan:

- Nombre.
- Apellido.
- Correo electrónico.
- Teléfono.
- Código postal.
- Fecha de nacimiento.

Código usado para calcular la edad y generar usuario:

```js
const edad = calcularEdad(fechaNacimiento);
const usuario = generarUsuario(nombre, apellido);

edadTexto.innerHTML = "Tu edad es: " + edad + " años.<br>Usuario generado: " + usuario;
modal.style.display = "flex";
```

---

## Integración en login.html

En el archivo `login.html` se utilizan las funciones `validarCorreo()` y `validarPassword()`.

```js
if (!validarCorreo(correo)) {
    mensajeLogin.textContent = "El correo electrónico no es válido.";
    mensajeLogin.className = "error";
    return;
}

if (!validarPassword(password)) {
    mensajeLogin.textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
    mensajeLogin.className = "error";
    return;
}

mensajeLogin.textContent = "Inicio de sesión validado correctamente.";
mensajeLogin.className = "correcto";
```

---

## Capturas de pantalla

### Evidencia del funcionamiento de la librería en consola

En esta captura se muestran los resultados de las funciones ejecutadas directamente en la consola del navegador.

<img width="1919" height="1013" alt="Consola mostrando resultados de la librería" src="https://github.com/user-attachments/assets/57bea45b-8850-47aa-a3f8-78e73840c34c" />

---

### Cálculo de edad y generación de usuario exitoso

En esta captura se muestra el modal con la edad calculada y el usuario generado automáticamente.

<img width="1838" height="926" alt="Cálculo de edad y usuario generado" src="https://github.com/user-attachments/assets/1ee16a71-f373-4c8d-84b1-7d544cb0f79e" />

---

## Video demo


[Ver video demo en YouTube](https://youtu.be/DfasdUjv6JQ)

---


## Autor

Luis Jared García García
