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
const inputFechaNac = document.getElementById("input-fecha-nacimiento");
const labelFechaNac = document.getElementById("label-fechaNacimiento");
const botonDatos = document.getElementById("boton-datos-personales");


error = false;
const mensajeErrorNombre = "El nombre no es válido";
const mensajeErrorApellido = "El apellido no es válido";
const mensajeErrorDocumento = "El documento no es válido";
const mensajeErrorTelefono = "El telefono no es válido";
const mensajeErrorEmailSecundario = "El email no es válido";
const mensajeErrorFechaNac = "La fecha no es válida";

formulario.addEventListener("submit", (e) => {
   e.preventDefault();
   error = false;
   validacionNombre();
   validacionApellido();
   validacionDocumento();
   validacionTelefono();
   validacionEmailSecundario();
   validacionFechaNacimiento();
   if (error) return null
   formulario.submit();
})

formulario.addEventListener("input", (e) => {

   const nombreValido = inputNombre.value.trim() !== "";
   const apellidoValido = inputApellido.value.trim() !== "";
   const documentoValido = inputDoc.value.trim() !== "";
   const telefonoValido = inputTelefono.value.trim() !== "";
   const fechaValida = inputFechaNac.value.trim() !== "";
   

   eliminarMensajeDeError("mensajeErrorNombre");
   eliminarMensajeDeError("mensajeErrorApellido");
   eliminarMensajeDeError("mensajeErrorDocumento");
   eliminarMensajeDeError("mensajeErrorTelefono");
   eliminarMensajeDeError("mensajeErrorEmailSecundario");
   eliminarMensajeDeError("mensajeErrorFechaNac");

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

   if (documentoValido){
      inputDoc.style.borderColor = "";
   }else{
      inputDoc.style.borderColor = "red";
      
   }

   if (telefonoValido){
      inputTelefono.style.borderColor = "";
   }else{
      inputTelefono.style.borderColor = "red";
      
   }

   if(fechaValida){
      inputFechaNac.style.borderColor = "";
   }else{
      inputFechaNac.style.borderColor = "red";
      
   }

   if (nombreValido && apellidoValido && documentoValido && telefonoValido && fechaValida) {
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
   if (inputNombre.value.trim() == "") {
      error = true;
   } else if (!regexNombreYApellido.test(inputNombre.value)) {
      error = true;
      mostrarMensajeError(mensajeErrorNombre, labelNombre);
   }
}

function validacionApellido() {

   if (inputApellido.value.trim() == "") {
      error = true;
   } else if (!regexNombreYApellido.test(inputApellido.value)) {
      error = true;
      mostrarMensajeError(mensajeErrorApellido, labelApellido);
   }

}

function validacionDocumento() {
   if (inputDoc.value.trim() == "") {
      error = true;
      
   }else if (!regexNumeros.test(inputDoc.value)) {
      error = true;
      mostrarMensajeError(mensajeErrorDocumento, labelDoc);
   }
}

function validacionTelefono() {
   if (inputTelefono.value.trim() == "") {
      error = true;
   } else if (!regexTelefono.test(inputTelefono.value)) {
      error = true;
      mostrarMensajeError(mensajeErrorTelefono, labelTelefono);
   }
}
function validacionEmailSecundario(){
 

   if (inputEmailSecundario.value.trim() !== "" && !regexEmail.test(inputEmailSecundario.value)){
      error = true;
      mostrarMensajeError(mensajeErrorEmailSecundario, labelEmailSecundario);
   }
}

function validacionFechaNacimiento(){

   const anioActual = new Date().getFullYear();
   const anioNacimiento = new Date(inputFechaNac.value).getFullYear();

if(anioNacimiento > anioActual - 16){
   error = true;
   mostrarMensajeError(mensajeErrorFechaNac, labelFechaNac);
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
   if(label == labelFechaNac){
      span.id = "mensajeErrorFechaNac"
   }
   span.innerHTML = mensajeError;
   label.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.fontSize = "12px";
   span.style.position = "absolute";
}