
const regexEmail = /^[a-zA-Z0-9._.]+\@[a-zA-Z0-9.-]+\.(com|net|org)$/;
const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!%?$])[A-Za-z\d#!%?$]{8,12}$/;
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
        botonSubmit.style.cursor ="pointer";
        
        
    } else {
        botonSubmit.disabled = true;
        botonSubmit.style.cursor ="not-allowed";
    }

    if (inputEmail.value.trim() !== ""){
        inputEmail.style.borderColor = "";
    } 
    if (inputContrasenia.value.trim() !== ""){
        inputContrasenia.style.borderColor = "";

    }
    
    else {
        if (inputEmail.value.trim() == "") {
            inputEmail.style.borderColor = "red";
            if (mensajeAnteriorErrorEmail){
                mensajeAnteriorErrorEmail.remove();
            }
        }
        if (inputContrasenia.value.trim() == "") {
            inputContrasenia.style.borderColor = "red";
            if (mensajeAnteriorErrorContrasenia){
                mensajeAnteriorErrorContrasenia.remove();
            }
        }
    }
    



    const spanAnteriorAvertenciaContrasenia = document.getElementById("mensajeAdvertencia");
    
    if (spanAnteriorAvertenciaContrasenia) {
        spanAnteriorAvertenciaContrasenia.remove();
    }
    
    if (inputContrasenia.value.trim() !== "" && document.getElementById("registrarse")) {
        
           
            const span = document.createElement("span");
            span.id = "mensajeAdvertencia"
            const mensajeAdvertenciaContrasenia = "La contraseña debe tener entre 8 y 12 caracteres, y contener al menos una mayúscula, una minúscula, un número, y cualquiera de los siguientes caracteres especiales: # ? ! % $.";
            span.innerHTML = mensajeAdvertenciaContrasenia;
            labelContrasenia.appendChild(span);
            span.style.display = "block"
            span.style.textAlign = "left"
            span.style.color = "rgb(219, 213, 211)";
            
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
        span.id = "mensajeErrorEmail"
        labelEmail.appendChild(span);

    })
}

function mostrarMensajesContrasenia(mensajes) {
    labelContrasenia.innerHTML = "";
    mensajes.forEach(mensaje => {
        const span = crearSpan(mensaje);
        span.id = "mensajeErrorContrasenia"
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




