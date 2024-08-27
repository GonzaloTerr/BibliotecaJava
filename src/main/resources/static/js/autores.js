async function listarAutores() {

    let json = await fetchAutores()

    let html = ""

    json.forEach(autor => {
        html += ` <tr>
            <td>${autor.nombre}</td>
            <td>${autor.pais}</td>
            <td><a href="#" onclick="onClickVerLibros (${autor.id})" class="btn btn-primary btn-icon-split">
                                                <span class="text">Ver libros</span>
                                            </a></td>
        </tr>`
    });

    document.getElementById("tablaAutor").outerHTML = html;


}
async function onClickVerLibros(id) {
    window.location.href = "tables.html?idAutor=" + id;
}

listarAutores()