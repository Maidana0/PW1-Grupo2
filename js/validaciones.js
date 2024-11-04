const regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
const regexContrasenia = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
const formulario = document.getElementById("formulario-aut");
const inputEmail = formulario.getElementById("email");
const inputContrasenia = formulario.getElementById("contrasenia");
const labelEmail = formulario.getElementById("mensaje-email");
const labelContrasenia = formulario.getElementById("mensaje-contrasenia");
const botonRegistrarse = formulario.getElementById("boton");
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
    if (!inputEmail.value.trim() == "" && !inputContrasenia.value.trim() == "") {
        botonRegistrarse.disabled = false;
    }
})

function validacionEmail() {
    if (inputEmail.value.trim() == "") {
        errors = true
        mensajesErrorEmail += "Este campo es obligatorio.-"
    }
    else if (!regexEmail.test(inputEmail.value)) {
        errors = true
        mensajesErrorEmail += "El Email no es valido.-"
    }

    const mensajes = mensajesErrorEmail.split("-");
    labelEmail.innerHTML = "";
    mensajes.forEach(mensaje => {
        const span = crearSpan(mensaje);
        labelEmail.appendChild(span);
    })
}

function validacionContrasenia() {

    if (inputContrasenia.value.trim() == "") {
        errors = true
        mensajesErrorContrasenia += "Este campo es obligatorio.-"

    }
    else if (!regexContrasenia.test(inputContrasenia.value)) {
        errors = true
        mensajesErrorContrasenia += "La contraseña no es valida.-"

    }

    const mensajes = mensajesErrorContrasenia.split("-");
    labelContrasenia.innerHTML = "";
    mensajes.forEach(mensaje => {
        const span = crearSpan(mensaje);
        labelContrasenia.appendChild(span);
    })

}

function crearSpan(mensaje) {
    const span = document.createElement("span");
    span.style.display = "block"
    span.style.textAlign = "left"
    span.style.color = "red"
    span.innerHTML = mensaje;

    return span;
}




