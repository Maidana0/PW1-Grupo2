import libros from "../../data/libros.json" with { type: 'json' };
import configuracion from "../../config/configuracion.json" with { type: 'json' };

const tabCategoria1 = document.getElementById("tab-categoria-1");
const contenedor = document.getElementById("seccion-categoria")

let linksCategorias = document.querySelectorAll("a.tab-categoria");

linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      contenedor.innerHTML = ""

      const elementosFiltrados = libros.filter((libro) => libro.Categoria === linkCategoria.innerText)

      elementosFiltrados.forEach((item) => {
         const { Id, Nombre, Autor, Portada } = item;
         contenedor.innerHTML += `
         <article
             id="categoria00-item01" 
            class="articulo-categoria item01" 
            onClick="window.location.href='/html/detalles-del-libro.html?id=${Id}'"
         >
            <header class="header-articulo">
               <img class="item-valor-portada" width="249px" height="355px" loading="lazy"
                  src="${Portada}" alt="${Nombre}">
               <p class="item-valor-autor">${Autor}</p>
            </header>
            <p class="item-valor-nombre">${Nombre}</p>

         </article>
         `
      });
   });
});

if (configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();
};