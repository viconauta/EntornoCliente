import { validarCampo } from "./funciones.js";

const botones = document.querySelectorAll(".btn-formulario");
const paneles = document.querySelectorAll(".panel");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        paneles.forEach((panel) => {
            panel.classList.add("oculto");
        });
        const destino = document.getElementById(boton.dataset.target);
        if (destino) {
            destino.classList.remove("oculto");
        }
    });
});

function configurarFormulario(idForm, idEstado, alValidar) {
    const form = document.querySelector("#" + idForm);
    const estado = document.querySelector("#" + idEstado);
    let intentado = false;

    const campos = form.querySelectorAll("input, select, textarea");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        intentado = true;
        estado.textContent = "";

        let primeroInvalido = null;
        for (const campo of campos) {
            const ok = validarCampo(campo);
            if (!ok && primeroInvalido === null) {
                primeroInvalido = campo;
            }
        }

        if (primeroInvalido) {
            estado.textContent = "Hay errores. Revisa los campos indicados.";
            primeroInvalido.focus();
            return;
        }

        const datos = new FormData(form);
        alValidar(datos, estado);
    });

    for (const campo of campos) {
        const tipoEvento = (campo.type === "checkbox" || campo.type === "radio" || campo.type === "file" || campo.tagName === "SELECT")
            ? "change"
            : "input";

        campo.addEventListener(tipoEvento, () => {
            estado.textContent = "";
            if (!intentado) return;

            validarCampo(campo);
            if (campo.id === "password-socio" || campo.id === "confirmacion-socio") {
                const confirmacion = document.querySelector("#confirmacion-socio");
                if (confirmacion) validarCampo(confirmacion);
            }
        });
    }
}

configurarFormulario("form-socios", "estado-socios", (datos, estado) => {
    const nombre = (datos.get("nombre") || "").trim();
    const usuario = (datos.get("usuario") || "").trim();
    const modalidad = datos.get("modalidad") || "";
    console.log({ nombre, usuario, modalidad });
    estado.textContent = "Datos validos. Socio " + nombre + ", usuario " + usuario + ", modalidad " + modalidad + ". Alta simulada.";
});

configurarFormulario("form-servicios", "estado-servicios", (datos, estado) => {
    const nombre = (datos.get("nombre") || "").trim();
    console.log(nombre, datos.get("duracion"), datos.get("precio"));
    estado.textContent = "Datos validos. Servicio " + nombre + " registrado de forma simulada.";
});

configurarFormulario("form-testimonios", "estado-testimonios", (datos, estado) => {
    const autorizado = datos.has("autorizacion");
    console.log(autorizado);
    if (autorizado) {
        estado.textContent = "Datos validos. Testimonio autorizado para publicacion; operacion simulada.";
    } else {
        estado.textContent = "Datos validos. Testimonio valido y quedara privado; operacion simulada.";
    }
});

configurarFormulario("form-noticias", "estado-noticias", (datos, estado) => {
    const titulo = (datos.get("titulo") || "").trim();
    console.log(titulo, datos.get("fecha"));
    estado.textContent = 'Datos validos. Noticia "' + titulo + '" programada de forma simulada.';
});

configurarFormulario("form-citas", "estado-citas", (datos, estado) => {
    console.log(datos.get("socio"), datos.get("servicio"), datos.get("fecha-hora"));
    estado.textContent = "Datos validos. Cita para " + datos.get("socio") + " con " + datos.get("servicio") + " el " + datos.get("fecha-hora") + ". Operacion simulada.";
});

const testimonio = document.querySelector("#texto-testimonio");
const contador = document.querySelector("#contador-testimonio");
if (testimonio && contador) {
    testimonio.addEventListener("input", () => {
        contador.textContent = testimonio.value.length + " / 500 caracteres";
    });
}