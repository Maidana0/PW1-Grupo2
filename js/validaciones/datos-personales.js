const regexNombreYApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'\-]+$/;
const regexNumeros = /^[0-9]+$/;
const regexTelefono = /^[0-9\-\+\(\)\s]+$/;
const formulario = document.getElementById("formulario-datos-personales");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputDoc = document.getElementById("input-doc");
const inputTelefono = document.getElementById("input-tel");
const labelNombre = document.getElementById("mensaje-nombre");
const labelApellido = document.getElementById("mensaje-apellido");
const labelDoc = document.getElementById("label-numeroDoc");
const labelTelefono = document.getElementById("label-tel");
const botonDatos = document.getElementById("boton-datos-personales");

error = false;
const mensajeErrorNombre = "El nombre no es válido";
const mensajeErrorApellido = "El apellido no es válido";
const mensajeErrorDocumento = "El documento no es válido";
const mensajeErrorTelefono = "El telefono no es válido"

formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   validacionNombre();
   validacionApellido();
   validacionDocumento();
   validacionTelefono();
   if (error) return null;
   formulario.submit();
})

formulario.addEventListener("input", (e) => {

   const nombreValido = inputNombre.value.trim() !== "";
   const apellidoValido = inputApellido.value.trim() !== "";
   const contraseniaValida = inputDoc.value.trim() !== "";
   const telefonoValido = inputTelefono.value.trim() !== "";

   eliminarMensajeDeError("mensajeErrorNombre");
   eliminarMensajeDeError("mensajeErrorApellido");
   eliminarMensajeDeError("mensajeErrorDocumento");
   eliminarMensajeDeError("mensajeErrorTelefono");

   if (nombreValido) {
      inputNombre.style.borderColor = "";
   } else {
      inputNombre.style.borderColor = "red";
   }

   if (apellidoValido) {
      inputApellido.style.borderColor = "";
   } else {
      inputApellido.style.borderColor = "red";
   }
   if (contraseniaValida){
      inputDoc.style.borderColor = "";
   }else{
      inputDoc.style.borderColor = "red";
      
   }

   if (telefonoValido){
      inputTelefono.style.borderColor = "";
   }else{
      inputTelefono.style.borderColor = "red";
      
   }



   if (nombreValido && apellidoValido) {
      botonDatos.disabled = false;
      botonDatos.style.cursor = "pointer";
   } else {
      botonDatos.disabled = true;
      botonDatos.style.cursor = "not-allowed";
   }


})

function eliminarMensajeDeError(id){
   const mensajeAnterior = document.getElementById(id);
   if (mensajeAnterior){
      mensajeAnterior.remove();
   }
}


function validacionNombre() {
   const mensajeAnterior = document.getElementById("mensajeErrorNombre");
   if (mensajeAnterior) {
      mensajeAnterior.remove();
   }

   if (inputNombre.value.trim() == "") {
      error = true;
   } else if (!regexNombreYApellido.test(inputNombre.value)) {
      error = true;
      mostrarMensajeNombre(mensajeErrorNombre);
   }
}

function validacionApellido() {
   const mensajeAnterior = document.getElementById("mensajeErrorApellido");
   if (mensajeAnterior) {
      mensajeAnterior.remove();
   }

   if (inputApellido.value.trim() == "") {
      error = true;
   } else if (!regexNombreYApellido.test(inputApellido.value)) {
      error = true;
      mostrarMensajeApellido(mensajeErrorApellido);
   }

}

function validacionDocumento() {
   const mensajeAnteriorDoc = document.getElementById("mensajeErrorDocumento");
   if (mensajeAnteriorDoc) {
      mensajeAnteriorDoc.remove();
   }
   if (inputDoc.value.trim() !== "") {
      error = true;
      
   }
   if (!regexNumeros.test(inputDoc.value)) {
      error = true;
      mostrarMensajeDocumento(mensajeErrorDocumento);
   }
}

function validacionTelefono() {
   const mensajeAnterior = document.getElementById("mensajeErrorTelefono");
   if (mensajeAnterior) {
      mensajeAnterior.remove();
   }

   if (inputTelefono.value.trim() == "") {
      error = true;
   } else if (!regexTelefono.test(inputTelefono.value)) {
      error = true;
      mostrarMensajeTelefono(mensajeErrorTelefono);
   }
}

function mostrarMensajeNombre(mensajeError) {
   const span = document.createElement("span");
   span.id = "mensajeErrorNombre";
   span.innerHTML = mensajeError;
   labelNombre.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.fontSize = "12px";
   span.style.position = "absolute";
}

function mostrarMensajeApellido(mensajeError) {
   const span = document.createElement("span");
   span.id = "mensajeErrorApellido";
   span.innerHTML = mensajeError;
   labelApellido.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.fontSize = "12px";
   span.style.position = "absolute";
}

function mostrarMensajeDocumento(mensajeError) {
   const span = document.createElement("span");
   span.id = "mensajeErrorDocumento";
   span.innerHTML = mensajeError;
   labelDoc.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.fontSize = "12px";
   span.style.position = "absolute";
}

function mostrarMensajeTelefono(mensajeError) {
   const span = document.createElement("span");
   span.id = "mensajeErrorTelefono";
   span.innerHTML = mensajeError;
   labelTelefono.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.fontSize = "12px";
   span.style.position = "absolute";
}