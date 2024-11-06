import libros from "../../data/libros.json" with { type: 'json' };

const titulo = document.getElementById("titulo-de-pagina")
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
    const { Nombre, Categoria, Autor, Descripcion, Referencia, Portada, Rating, "personalizado_1.ISBN": ISBN, "personalizado_2.Fecha Publicacion": FechaPublicacion, "personalizado_3.Editorial": Editorial, "personalizado_4.Paginas": Paginas, "personalizado_5.Presentacion": Presentacion } = libro

    document.title = Nombre;
    titulo.innerText = Nombre;
    contenedor.innerHTML = `
            <div>
                <img src="${Portada}"
                    alt="${Nombre}" />
                <h3 class="titulo-pequeño">${Autor}</h3>
            </div>

            <div>
                <h2 class="sub-titulo text-right">${Categoria}</h2>
                <p>${Descripcion}</p>

                <div class="d-flex flex-cool">
                    <div class="d-flex justify-between">
                        <p>Fecha de Publicación: ${FechaPublicacion}</p>
                        <p>(Rating)</p>
                    </div>
                    <div class="d-flex justify-between">
                        <p>Editorial: ${Editorial}</p>
                        <p>Páginas: ${Paginas}</p>
                    </div>
                    <div class="d-flex justify-between">
                        <p>ISBM: ${ISBN}</p>
                        <p>Presentación: ${Presentacion}</p>
                    </div>
                </div>
            </div>
    `

}



function buscandoElLibro(id) {
    const libroBuscado = libros.find(libro => libro.Id === id)
    return libroBuscado
}