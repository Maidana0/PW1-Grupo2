import libros from "../../data/libros.json" with { type: 'json' };
import configuracion from "../../config/configuracion.json" with { type: 'json' };

// Input donde se buscará un libro
const buscador = document.getElementById("buscador-de-libro")

const tabCategoriaPorDefecto = document.getElementById("tab-categoria-5"); // Seleccionando categoria por defecto

// Contenedor de los libros y el de las categorias disponibles
const contenedor = document.getElementById("seccion-categoria")
const linksCategorias = document.querySelectorAll("button.tab-categoria");

let categoriaElegida = ""
let librosPorMostrar = []

linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      contenedor.innerHTML = ""
      buscador.value = ""
      // Remover la clase "active" de todos los links de categoría (para que no aparezcan muchos en blanco)
      linksCategorias.forEach((link) => link.classList.remove("active"))

      // Agregar la clase active para la categoria activa
      linkCategoria.classList.add("active")

      // Obtenemos los libros filtrados por categoria
      librosPorMostrar = libros.filter((libro) => {
         // Si la categoria es "Todas las Categorías" devolvemos todos los libros
         if (linkCategoria.innerText === "Todas las Categorías") return true
         // Si no, devolvemos los libros que coincidan con la categoria seleccionada
         return libro.Categoria === linkCategoria.innerText
      })

      // Agregamos contenido al contenedor por cada elemento (libro) de la categoría seleccionada
      librosPorMostrar.forEach((item) => crearArticulo(item));
   });
});

buscador.addEventListener("keyup", (e) => {
   e.preventDefault()
   let librosQueCoinciden = librosPorMostrar.filter(
      (libro) => libro.Nombre.toLowerCase().includes(e.target.value.toLowerCase())
   )
   if (librosQueCoinciden.length > 0) {
      contenedor.innerHTML = ""
      librosQueCoinciden.forEach((item) => crearArticulo(item));
   } else {
      librosPorMostrar.forEach((item) => crearArticulo(item));
   }
})





function crearArticulo(item) {
   const { Id, Nombre, Autor, Portada } = item;
   contenedor.innerHTML += `
   <article
       id="categoria00-item01" 
      class="articulo-categoria item01" 
      onClick="window.location.href='/html/detalles-del-libro.html?libro=${Id}'"
   >
      <header class="header-articulo">
         <img class="item-valor-portada" width="249px" height="355px" loading="lazy"
            src="${Portada}" alt="${Nombre}">
         <p class="item-valor-autor">${Autor}</p>
      </header>
      <p class="item-valor-nombre">${Nombre}</p>

   </article>
   `
}




// Por defecto, vamos a mostrar la categoria de Fantasia y Ciencia Ficción
if (configuracion["modo-test-prod"] === "prod") {
   tabCategoriaPorDefecto.click();
};