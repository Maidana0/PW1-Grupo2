const regexEmail = /^[a-zA-Z0-9._.]+\@[a-zA-Z0-9.-]+\.(com|net|org)$/;

const formulario = document.getElementById("formulario");
const inputEmail = document.getElementById("input-email"); 
const labelEmail = document.getElementById("label-email");
const botonContinuar = document.getElementById("boton-continuar");
let error = false;
let mensajeError = "";


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    error= false;
    validacionEmail();
    if (error) return null;
    formulario.submit();
})

formulario.addEventListener("input", (e) => {
    const mensajeAnterior = document.getElementById("mensajeError");
    if (mensajeAnterior){
        mensajeAnterior.remove();
    }

    if (inputEmail.value.trim() !== ""){
        botonContinuar.disabled = false;
        inputEmail.style.borderColor = "";
        
    } else if (inputEmail.value.trim() == ""){
        inputEmail.style.borderColor = "red";
        botonContinuar.disabled = true;
    }
})


function validacionEmail(){
    const mensajeAnterior = document.getElementById("mensajeError");
    if (mensajeAnterior){
        mensajeAnterior.remove();
    }


    if (inputEmail.value.trim() == ""){
        error = true;
        mensajeError += ""
        mostrarMensaje(mensajeError);
    }

    else if (!regexEmail.test(inputEmail.value)){
        error = true;
        mensajeError += "El Email no es valido."
        mostrarMensaje(mensajeError);
    }
}

function mostrarMensaje(mensajeError){
    const span = document.createElement("span");
    span.id = "mensajeError";
    span.innerHTML = mensajeError;
    labelEmail.appendChild(span);
    span.style.display = "block";
    span.style.textAlign = "left";
    span.style.color = "red"
}