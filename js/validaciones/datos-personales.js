const regexNombreYApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'\-]+$/;
const regexNumeros = /^[0-9]+$/;
const regexTelefono = /^[0-9\-\+\(\)\s]+$/;
const formulario = document.getElementById("formulario-datos-personales");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const inputDoc = document.getElementById("input-doc");
const inputTelefono = document.getElementById("input-tel");
const inputEmailSecundario = document.getElementById("input-emailSecundario");
const labelNombre = document.getElementById("mensaje-nombre");
const labelApellido = document.getElementById("mensaje-apellido");
const labelDoc = document.getElementById("label-numeroDoc");
const labelTelefono = document.getElementById("label-tel");
const labelEmailSecundario = document.getElementById("label-emailSecundario");
const botonDatos = document.getElementById("boton-datos-personales");

error = false;
const mensajeErrorNombre = "El nombre no es válido";
const mensajeErrorApellido = "El apellido no es válido";
const mensajeErrorDocumento = "El documento no es válido";
const mensajeErrorTelefono = "El telefono no es válido"
const mensajeErrorEmail = "El email no es válido"

formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   validacionNombre();
   validacionApellido();
   validacionDocumento();
   validacionTelefono();
   valid
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
      mostrarMensajeError(mensajeErrorNombre, labelNombre);
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
      mostrarMensajeError(mensajeErrorApellido, labelApellido);
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
      mostrarMensajeError(mensajeErrorDocumento, labelDoc);
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
      mostrarMensajeError(mensajeErrorTelefono, labelTelefono);
   }
}
function validacionEmailSecundario(){
   if (!regexEmail.test(inputEmailSecundario.value)){
      mostrarMensajeError(mensajeErrorEmail, labelEmailSecundario);
   }
}


function mostrarMensajeError(mensajeError, label){
   const span = document.createElement("span");
   if (label == labelNombre){
      span.id = "mensajeErrorNombre"
   } 
   if (label == labelApellido){
      span.id = "mensajeErrorApellido"
   } 
   if (label == labelDoc){
      span.id = "mensajeErrorDocumento"
   } 
   if (label == labelTelefono){
      span.id = "mensajeErrorTelefono"
   } 
   if (label == labelEmailSecundario){
      span.id = "mensajeErrorEmailSecundario"
   } 
   span.innerHTML = mensajeError;
   label.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.fontSize = "12px";
   span.style.position = "absolute";
}