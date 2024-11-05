const regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
// /^[a-zA-Z0-9._.]+\@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!%?$])[A-Za-z\d#!%?$]{8,12}$/;
const formulario = document.getElementById("formulario-aut");
const inputEmail = document.getElementById("email");
const inputContrasenia = document.getElementById("contrasenia");
const labelEmail = document.getElementById("mensaje-email");
const labelContrasenia = document.getElementById("mensaje-contrasenia");
const botonRegistrarse = document.getElementById("boton");
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

    if (inputEmail.value.trim() !== "" && inputContrasenia.value.trim() !== "") {
        botonRegistrarse.disabled = false;
        
    } if (inputEmail.value.trim() !== ""){
        inputEmail.style.borderColor = "";
    } if (inputContrasenia.value.trim() !== ""){
        inputContrasenia.style.borderColor = "";
    }
    
    else {
        if (inputEmail.value.trim() == "") {
            inputEmail.style.borderColor = "red";
            
        }
        if (inputContrasenia.value.trim() == "") {
            inputContrasenia.style.borderColor = "red";
            
        }
    }

    const spanViejo = document.getElementById("mensajeAdvertencia");
    if (spanViejo) {
        spanViejo.remove();

    }
    if (inputContrasenia.value.trim() !== "") {
        

            const span = document.createElement("span");
            span.id = "mensajeAdvertencia"
            const mensajeAdvertenciaContrasenia = "La contraseña debe tener entre 8 y 12 caracteres, y ademas contener al menos una mayúscula, una minúscula, un número, y cualquiera de los siguientes caracteres especiales: # ? ! % $.";
            span.innerHTML = mensajeAdvertenciaContrasenia;
            labelContrasenia.appendChild(span);
            span.style.display = "block"
            span.style.textAlign = "left"
            span.style.color = "black";

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
    mostrarMensajesEmail(mensajes);

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
    mostrarMensajesContrasenia(mensajes);

}

function mostrarMensajesEmail(mensajes) {
    labelEmail.innerHTML = "";
    mensajes.forEach(mensaje => {
        const span = crearSpan(mensaje);
        labelEmail.appendChild(span);

    })
}

function mostrarMensajesContrasenia(mensajes) {
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




