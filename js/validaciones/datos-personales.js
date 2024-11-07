const regexNombreYApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'\-]+$/;
const formulario = document.getElementById("formulario-datos-personales");
const inputNombre = document.getElementById("input-nombre");
const inputApellido = document.getElementById("input-apellido");
const labelNombre = document.getElementById("mensaje-nombre");
const labelApellido = document.getElementById("mensaje-apellido");
const botonDatos = document.getElementById("boton-datos-personales");

error = false;
const mensajeErrorNombre = "El nombre no es valido";
const mensajeErrorApellido = "El apellido no es valido";

formulario.addEventListener("submit", (e) =>{
     e.preventDefault();
      validacionNombre();
      validacionApellido();
   if (error) return null;
      formulario.submit();
 })


formulario.addEventListener("input", (e)=>{

   const nombreValido = inputNombre.value.trim() !== "";
   const apellidoValido = inputApellido.value.trim() !== "";
 
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
 
   
   if (nombreValido && apellidoValido) {
     botonDatos.disabled = false;
     botonDatos.style.cursor = "pointer"; 
   } else {
     botonDatos.disabled = true;
     botonDatos.style.cursor = "not-allowed"; 
   }


})

function validacionNombre(){
   const mensajeAnterior = document.getElementById("mensajeErrorNombre");
   if (mensajeAnterior){
       mensajeAnterior.remove();
   }

   if (inputNombre.value.trim() == ""){
      error = true;
   } else if(!regexNombreYApellido.test(inputNombre.value)){
   error = true;
   mostrarMensajeNombre(mensajeErrorNombre);
   }
}

function validacionApellido(){
   const mensajeAnterior = document.getElementById("mensajeErrorApellido");
   if (mensajeAnterior){
       mensajeAnterior.remove();
   }

   if (inputApellido.value.trim() == ""){
      error = true;
   } else if(!regexNombreYApellido.test(inputApellido.value)){
   error = true;
   mostrarMensajeApellido(mensajeErrorApellido);
   }


}


function mostrarMensajeNombre(mensajeError){
   const span = document.createElement("span");
   span.id = "mensajeErrorNombre";
   span.innerHTML = mensajeError;
   labelNombre.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.position = "absolute";
}

function mostrarMensajeApellido(mensajeError){
   const span = document.createElement("span");
   span.id = "mensajeErrorApellido";
   span.innerHTML = mensajeError;
   labelApellido.appendChild(span);
   span.style.display = "block";
   span.style.textAlign = "left";
   span.style.color = "red";
   span.style.position = "absolute";
}