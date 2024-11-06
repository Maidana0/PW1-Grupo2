const regexEmail = /^[a-zA-Z0-9._.]+\@[a-zA-Z0-9.-]+\.(com|net|org)$/;
const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#!%?$])[A-Za-z\d#!%?$]{8,12}$/;
const formularioEmail = document.getElementById("fomulario-email");
const formularioContrasenia = document.getElementById("formulario-contrasenia");
const inputEmail = document.getElementById("input-Email");
const labelEmail = document.getElementById("label-Email");
const inputContrasenia = document.getElementById("input-contrasenia");
const labelContrasenia = document.getElementById("label-contrasenia");
const botonSubmitEmail = document.getElementById("boton-email");
const botonSubmitContrasenia = document.getElementById("boton-contrasenia");

let error= false;
let mensajeDeError = "";

formularioEmail.addEventListener("submit", (e) =>{
    e.preventDefault();
    validacionEmail();
    if (error) return null
    formularioEmail.submit()
})

formularioContrasenia.addEventListener("submit", (e) =>{
    e.preventDefault();
    error = false;
    validacionContrasenia();
    if (error) return null;
    formularioContrasenia.submit();
    
})

formularioEmail.addEventListener("input", (e) =>{
    
    if (inputEmail.value !== ""){
        botonSubmitEmail.disabled = false;
        inputEmail.style.borderColor = "";
    } 
    else if (inputEmail.value == ""){
        inputEmail.style.borderColor = "red";
        mensajeDeError += "Ingrese un email";
        botonSubmitEmail.disabled = true;
        mostrarMensaje(mensajeDeError);

    }

})

function validacionEmail (){
    const mensajeAnterior = document.getElementById("mensajeDeErrorEmail");
    if (mensajeAnterior){
        mensajeAnterior.remove();
    }


    if (inputEmail.value.trim() == ""){
        
        //botonSubmitEmail.style.backgroundColor = "rgb(235, 182, 212)";

    } else if (!regexEmail.test(inputEmail.value)){
        error= true;
        mensajeDeError = "El Email no es valido"
        mostrarMensajeEmail(mensajeDeError);
    }
}

function validacionContrasenia(){
    const mensajeAnterior = document.getElementById("mensajeDeErrorContrasenia");
    if (mensajeAnterior){
        mensajeAnterior.remove();
    }

    if (inputContrasenia.value.trim() == ""){

    } else if (!regexContrasenia.test(inputContrasenia.value)){
        error= true;
        mensajeDeError = "La contrasenia no es valida"
        mostrarMensajesContrasenia(mensajeDeError);
    }
}

function mostrarMensajeEmail(mensajeDeError){
    const span =document.createElement("span");
    span.id = "mensajeDeErrorEmail"
    span.style.color = "red";
    labelEmail.appendChild(span);
    span.innerHTML = mensajeDeError;
    
}

// function mostrarMensajeEmail(mensajeDeError){
//     const span =document.createElement("span");
//     span.id = "mensajeDeErrorContrasenia"
//     span.style.color = "red";
//     labelContrasenia.appendChild(span);
//     span.innerHTML = mensajeDeError;
// }
