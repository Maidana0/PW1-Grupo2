
// SEPARAMOS LAS VALIDACIONES EN FUNCIONES PARA QUE SEA MAS FACIL DE LEER Y RESPONDER EL MENSAJE DE ERROR
const longitudRegex = /^.{8,12}$/; // Longitud entre 8 y 12 caracteres
const minusculaRegex = /[a-z]/; // Al menos una letra minúscula
const mayusculaRegex = /[A-Z]/; // Al menos una letra mayúscula
const numeroRegex = /\d/; // Al menos un número
const caracterEspecialRegex = /[#!%?$]/; // Al menos un carácter especial de los especificados

const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!%?$])[A-Za-z\d#!%?$]{8,12}$/;

const regexEmail = /^[a-zA-Z0-9._.]+\@[a-zA-Z0-9.-]+\.(com|net|org)$/;
const formulario = document.getElementById("formulario-aut");
const inputEmail = document.getElementById("email");
const inputContrasenia = document.getElementById("contrasenia");
const labelEmail = document.getElementById("mensaje-email");
const labelContrasenia = document.getElementById("mensaje-contrasenia");
const botonSubmit = document.getElementById("boton");
let errors;
let mensajesErrorEmail;
let mensajesErrorContrasenia;



formulario.addEventListener("submit", (e) => {

    e.preventDefault()
    errors = false;
    mensajesErrorEmail = "";
    mensajesErrorContrasenia = "";
    validacionEmail()
    validacionContrasenia()

    if (errors) return null;
    formulario.submit()
})



formulario.addEventListener("input", (e) => {
    const mensajeAnteriorErrorEmail = document.getElementById("mensajeErrorEmail");
    const mensajeAnteriorErrorContrasenia = document.getElementById("mensajeErrorContrasenia");


    if (inputEmail.value.trim() !== "" && inputContrasenia.value.trim() !== "") {
        botonSubmit.disabled = false;
    } else {
        botonSubmit.disabled = true;
    }

    if (inputEmail.value.trim() !== "") {
        inputEmail.style.borderColor = "";
    }
    if (inputContrasenia.value.trim() !== "") {
        inputContrasenia.style.borderColor = "";
    }

    else {
        if (inputEmail.value.trim() == "") {
            inputEmail.style.borderColor = "red";
            if (mensajeAnteriorErrorEmail) {
                mensajeAnteriorErrorEmail.remove();
            }
        }
        if (inputContrasenia.value.trim() == "") {
            inputContrasenia.style.borderColor = "red";
            if (mensajeAnteriorErrorContrasenia) {
                labelContrasenia.remove();
            }
        }
    }




    // const spanAnteriorAvertenciaContrasenia = document.getElementById("mensajeAdvertencia");

    // if (spanAnteriorAvertenciaContrasenia) {
    //     spanAnteriorAvertenciaContrasenia.remove();
    // }

    // if (inputContrasenia.value.trim() !== "" && document.getElementById("registrarse")) {


    //     const pElement = document.createElement("p");
    //     pElement.id = "mensajeAdvertencia"
    //     const mensajeAdvertenciaContrasenia = "La contraseña debe tener entre 8 y 12 caracteres, y contener al menos una mayúscula, una minúscula, un número, y cualquiera de los siguientes caracteres especiales: # ? ! % $.";
    //     pElement.innerHTML = mensajeAdvertenciaContrasenia;
    //     labelContrasenia.appendChild(pElement);
    //     pElement.style.display = "block"
    //     pElement.style.textAlign = "left"
    //     pElement.style.color = "rgb(219, 213, 211)";

    // }
})

function validacionEmail() {
    if (!regexEmail.test(inputEmail.value)) {
        errors = true
        mensajesErrorEmail += "El Email no es valido.-"

    }
    const mensajes = mensajesErrorEmail.split("-");
    mostrarMensajesEmail(mensajes);

}


function validacionContrasenia() {
    const valor = inputContrasenia.value

    if (document.getElementById("registrarse")) {
        if (!longitudRegex.test(valor)) {
            errors = true
            mensajesErrorContrasenia += "Su longitud debe estar entre 8 y 12 caracteres.-"
        }
        if (!minusculaRegex.test(valor)) {
            errors = true
            mensajesErrorContrasenia += "Debe contener al menos una letra minúscula.-"
        }
        if (!mayusculaRegex.test(valor)) {
            errors = true
            mensajesErrorContrasenia += "Debe contener al menos una letra mayúscula.-"
        }
        if (!numeroRegex.test(valor)) {
            errors = true
            mensajesErrorContrasenia += "Debe contener al menos un número.-"
        }
        if (!caracterEspecialRegex.test(valor)) {
            errors = true
            mensajesErrorContrasenia += "Debe contener al menos uno de los siguientes caracteres especiales: # ? ! % $.-"
        }
    } else {
        if (!regexContrasenia.test(valor)) {
            errors = true
            mensajesErrorContrasenia += "La contraseña no es valida.-"
        }
    }

    const mensajes = mensajesErrorContrasenia.split("-");
    mostrarMensajesContrasenia(mensajes);

}

function mostrarMensajesEmail(mensajes) {
    labelEmail.innerHTML = "";
    mensajes.forEach(mensaje => {
        if (mensaje.trim() == "") return;
        const span = crearSpan(mensaje);
        span.id = "mensajeErrorEmail"
        labelEmail.appendChild(span);

    })
}

function mostrarMensajesContrasenia(mensajes) {
    labelContrasenia.innerHTML = "";
    mensajes.forEach(mensaje => {
        if (mensaje.trim() == "") return;
        const span = crearSpan(mensaje);
        span.id = "mensajeErrorContrasenia"
        labelContrasenia.appendChild(span);
    })
}

function crearSpan(mensaje) {
    const span = document.createElement("span");
    span.style.display = "block"
    span.style.textAlign = "left"
    span.style.margin = "8px 0"
    span.style.color = "var(--light-color-acento-2)"
    span.innerHTML = "- " + mensaje;

    return span;
}




