 const formulario = document.getElementById("formulario");
        const mensaje = document.getElementById("mensaje");
        const modal = document.getElementById("modal");
        const edadTexto = document.getElementById("edadTexto");
        const cerrarModal = document.getElementById("cerrarModal");

        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const codigoPostal = document.getElementById("codigoPostal").value.trim();
            const fechaNacimiento = document.getElementById("fechaNacimiento").value;

            if (!soloLetras(nombre)) {
                mensaje.textContent = "El nombre solo debe contener letras.";
                mensaje.className = "error";
                return;
            }

            if (!soloLetras(apellido)) {
                mensaje.textContent = "El apellido solo debe contener letras.";
                mensaje.className = "error";
                return;
            }

            if (!validarCorreo(correo)) {
                mensaje.textContent = "El correo electrónico no es válido.";
                mensaje.className = "error";
                return;
            }

            if (!validarLongitud(telefono, 10) || telefono.length < 10 || !/^[0-9]+$/.test(telefono)) {
                mensaje.textContent = "El teléfono debe tener exactamente 10 dígitos numéricos.";
                mensaje.className = "error";
                return;
            }

            if (!validarCodigoPostal(codigoPostal)) {
                mensaje.textContent = "El código postal debe tener exactamente 5 dígitos.";
                mensaje.className = "error";
                return;
            }

            if (fechaNacimiento === "") {
                mensaje.textContent = "Debes seleccionar una fecha de nacimiento.";
                mensaje.className = "error";
                return;
            }

            if (!esMayorDeEdad(fechaNacimiento)) {
                mensaje.textContent = "Debes ser mayor de edad para registrarte.";
                mensaje.className = "error";
                return;
            }

            const edad = calcularEdad(fechaNacimiento);
            const usuario = generarUsuario(nombre, apellido);

            mensaje.textContent = "Formulario validado correctamente.";
            mensaje.className = "correcto";

            edadTexto.innerHTML = "Tu edad es: " + edad + " años.<br>Usuario generado: " + usuario;
            modal.style.display = "flex";
        });

        cerrarModal.addEventListener("click", function() {
            modal.style.display = "none";
        });