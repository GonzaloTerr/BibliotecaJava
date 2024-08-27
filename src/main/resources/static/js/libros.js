async function listarLibros() {

    let json = await fetchLibros();

    let html = ""

    json.forEach(libro => {
        html += `<tr>
        <td>${libro.titulo}</td>
        <td>${libro.categoria}</td>
        <td>${libro.autor.nombre}</td>
        <td>${libro.disponible ? "si" : "no"}</td>
        <td>
            <a href="#" onclick="editLibro(${libro.id})" class="btn btn-primary btn-icon-split">
                <span class="text">Editar</span>
            </a>
            <a href="#" onclick="deleteLibro(${libro.id})" class="btn btn-danger btn-icon-split">
                <span class="text">Eliminar</span>
            </a>
        </td>
    </tr>
        ` });

    document.getElementById("tablaLibros").outerHTML = html;


}
async function deleteLibro(id) {
    let confimaEliminar = confirm("Desea eliminar el libro?")
    if (confimaEliminar) {
        await deleteLibroFromBD(id);
        listarLibros();
    }
    
}

async function editLibro(id) {
    window.location.href = "gestionar-libro.html?" + id
}

async function listarCategorias() {
    let categoria = await getCategorias();
    let container = document.getElementById("categoria-container");
    container.innerHTML = "";

    categoria.forEach(categoria => {
        let buttonHtml =
            ` <div class="text-right" style="display: inline-block;">
                    <a href="tables.html?categoria=${categoria}" class="btn btn-primary btn-icon-split d-flex btn-margin">                            
                    </span>
                        <span class="text">${categoria}</span>
                    </a>
                </div>`;
        container.innerHTML += buttonHtml
    })
}

document.addEventListener("DOMContentLoaded", listarCategorias);

async function listarLibrosPorAutor(idAutor) {

    let json = await getLibrosByAutor(idAutor);
    let html = "";
    json.forEach(libro => {
        html += ` <tr>
            <td>${libro.titulo}</td>
            <td>${libro.categoria}</td>
            <td>${libro.autor.nombre}</td>
            <td>${libro.disponible ? "si" : "no"}</td>
            <td>
                <a href="#" onclick="editLibro(${libro.id})" class="btn btn-primary btn-icon-split">
                    <span class="text">Editar</span>
                </a>
                <a href="#" onclick="deleteLibro(${libro.id})" class="btn btn-danger btn-icon-split">
                    <span class="text">Eliminar</span>
                </a>
            </td>
        </tr>`;
    });
    document.getElementById("tablaLibros").innerHTML = html;
}

async function listarLibrosPorCategoria(categoria) {

    let json = await getLibrosPorCategoria(categoria);
    let html = "";
    json.forEach(libro => {
        html += ` <tr>
            <td>${libro.titulo}</td>
            <td>${libro.categoria}</td>
            <td>${libro.autor.nombre}</td>
            <td>${libro.disponible ? "si" : "no"}</td>
            <td>
                <a href="#" onclick="editLibro(${libro.id})" class="btn btn-primary btn-icon-split">
                    <span class="text">Editar</span>
                </a>
                <a href="#" onclick="deleteLibro(${libro.id})" class="btn btn-danger btn-icon-split">
                    <span class="text">Eliminar</span>
                </a>
            </td>
        </tr>`;
    });
    document.getElementById("tablaLibros").innerHTML = html;
}

function getIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const idAutor = urlParams.get('idAutor');
    return idAutor;
}
function verLibrosPorAutor(idAutor) {
    window.location.href = "tables.html?idAutor=" + idAutor;
}
function getCategoriaFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    return categoria;
}

const categoria = getCategoriaFromUrl()
const idAutor = getIdFromUrl();

if (idAutor) {
    listarLibrosPorAutor(idAutor);
} else if (categoria) {
    listarLibrosPorCategoria(categoria);
} else { listarLibros() }

