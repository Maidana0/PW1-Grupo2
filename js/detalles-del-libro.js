import libros from "../data/libros.json" with { type: 'json' };

const titulo = document.getElementById("titulo-de-pagina")
const contenedor = document.getElementById("detalles-del-libro")
const idDelLibroBuscado = document.location.search.split("=")[1]

const svgEstrella = '<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#FFFF55"><path d="M333.33-259 480-347l146.67 89-39-166.67 129-112-170-15L480-709l-66.67 156.33-170 15 129 112.34-39 166.33ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-353.33Z"/></svg>'

const libro = buscandoElLibro(idDelLibroBuscado)

if (!libro) {
    titulo.innerText = "El libro que busca no existe en nuestra base de datos"
    contenedor.innerHTML = "<img src='../assets/img/page-not-found.webp' alt='not-found' width='390px' height='280px' style='border-radius: 18px; margin: 2rem auto;'/>"
} else {
    document.title = libro.Nombre;
    titulo.innerText = libro.Nombre;
    contenedor.innerHTML = crearArticulo(libro)
}



function buscandoElLibro(id) {
    const libroBuscado = libros.find(libro => libro.Id === id)
    return libroBuscado
}

function crearArticulo(libro) {
    const { Nombre, Categoria, Autor, Descripcion, Referencia, Portada, Rating, "personalizado_1.ISBN": ISBN, "personalizado_2.Fecha Publicacion": FechaPublicacion, "personalizado_3.Editorial": Editorial, "personalizado_4.Paginas": Paginas, "personalizado_5.Presentacion": Presentacion } = libro

    let parrafos = ""
    Descripcion.split(".").forEach((texto) => {
        if (texto.length > 0) {
            parrafos += `<p class="parrafo">${texto}.</p>`
        }
    })

    return `
            <div class="primer-col text-center">
                <img src="${Portada}"
                    alt="${Nombre}" class="imagen-portada"/>
                <h3 class="titulo-pequeño">${Autor}</h3>
                <a href="${Referencia}" target="_blank" class="ver-mas text-center">Ver más</a>
            </div>

            <div class="segunda-col">
                            
                <div class="d-flex flex-col parrafos-pequeños">
                    <div class="d-flex justify-between">
                        <p title="${FechaPublicacion}">
                            <strong class="rotulo">Fecha de Publicación:</strong>
                             ${FechaPublicacion}
                        </p>

                        <p title="${Categoria}">
                            <strong class="rotulo">Categoría:</strong> 
                            ${Categoria}
                        </p>
                    </div>

                    <div class="d-flex justify-between">
                        <p title="${Editorial}">
                            <strong class="rotulo">Editorial:</strong>
                            ${Editorial}
                        </p>

                        <p title="${Paginas}">
                            <strong class="rotulo">Páginas:</strong> 
                            ${Paginas}
                        </p>
                    </div>
                    <div class="d-flex justify-between">
                        <p title="${ISBN}">
                            <strong class="rotulo">ISBM:</strong> 
                            ${ISBN}
                        </p>
                        <p title="${Presentacion}">
                            <strong class="rotulo">Presentación:</strong> 
                            ${Presentacion}
                        </p>
                    </div>
                </div>

                <div class="descripcion" style="position:relative"> 
                    <div title="Calificación: ${Rating}" style="position:absolute; right:60px; top:29px"> 
                        ${svgEstrella.repeat(Rating)}
                    </div>
                    <p class="parrafo"> <strong class="rotulo">Descripción:</strong> 
                    ${parrafos}
                    </p>
                </div>

            </div>
    `
}
