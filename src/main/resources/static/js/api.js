const API_BASE_URL = "http://localhost:8080/api";

async function fetchFromAPI(endpoint, method = "GET", body = null) {
    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    return await response.json();
}

async function fetchAutores() {
    return await fetchFromAPI("/autores");
}

async function fetchLibros() {
    return await fetchFromAPI("/libros");
}

async function deleteLibroFromBD(id) {
    await fetchFromAPI(`/libros/${id}`, "DELETE");
}

async function saveLibro(libro) {
    const url = isNew() ? "/libros" : `/libros/${getLibroId()}`;
    const metodoType = isNew() ? "POST" : "PUT";

    await fetchFromAPI(url, metodoType, libro);

    alert("Libro Guardado con ÉXITO");
    window.location.href = "tables.html";
}

async function getLibroById(id) {
    return await fetchFromAPI(`/libros/${id}`);
}

async function getCategorias() {
    return await fetchFromAPI("/libros/categorias");
}

async function getLibrosByAutor(idAutor) {
    return await fetchFromAPI(`/libros/autor/${idAutor}`);
}

async function getLibrosPorCategoria(categoria) {
    return await fetchFromAPI(`/libros/categorias/${categoria}`);
}
