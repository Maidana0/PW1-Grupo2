import libros from "../../data/libros.json" with { type: 'json' };

const titulo = document.getElementById("titulo-de-pagina")
const categoria = document.getElementById("categoria-del-libro")
const contenedor = document.getElementById("detalles-del-libro")
const idDelLibroBuscado = document.location.search.split("=")[1]

/*
    "Referencia": "https://www.planetadelibros.com/libro-cuaderno-de-campo/401070",

    "personalizado_1.ISBN": "978-84-08-29196-1",
    "personalizado_3.Editorial": "GeoPlaneta",
    "personalizado_4.Paginas": 184,
    "personalizado_5.Presentacion": "Tapa dura sin s/cub. (cartoné)"
*/
const libro = buscandoElLibro(idDelLibroBuscado)

if (!libro) {
    titulo.innerText = "El libro que busca no existe en nuestra base de datos"
    contenedor.innerHTML = "<img src='../assets/img/page-not-found.webp' alt='not-found' width='390px' height='280px' style='border-radius: 18px; margin: 2rem auto;'/>"
} else {
    document.title = libro.Nombre;
    titulo.innerText = libro.Nombre;
    categoria.innerText = libro.Categoria
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
            <div class="primer-col  text-center">
                <img src="${Portada}"
                    alt="${Nombre}" class="imagen-portada"/>
                <h3 class="titulo-pequeño">${Autor}</h3>
                <a href="${Referencia}" target="_blank" class="ver-mas text-center">Ver más</a>
            </div>

            <div class="segunda-col">
                            
                <div class="d-flex flex-col parrafos-pequeños">
                    <div class="d-flex justify-between">
                        <p><strong class="rotulo">Fecha de Publicación:</strong> ${FechaPublicacion}</p>
                        <p><strong class="rotulo">Clasificación:</strong> ${Rating}</p>
                    </div>
                    <div class="d-flex justify-between">
                        <p><strong class="rotulo">Editorial:</strong> ${Editorial}</p>
                        <p><strong class="rotulo">Páginas:</strong> ${Paginas}</p>
                    </div>
                    <div class="d-flex justify-between">
                        <p><strong class="rotulo">ISBM:</strong> ${ISBN}</p>
                        <p><strong class="rotulo">Presentación:</strong> ${Presentacion}</p>
                    </div>
                </div>

                <div class="descripcion"> 
                    <p class="parrafo"> <strong class="rotulo">Descripción:</strong> </p>
                    ${parrafos}
                </div>

            </div>
    `
}