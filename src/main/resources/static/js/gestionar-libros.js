async function cargarAutores() {
    let json = await fetchAutores();
    let select = document.getElementById("listaAutores");
    select.innerHTML = "";

    json.forEach(autor => {
        let opcion = document.createElement("option");
        opcion.value = autor.id;
        opcion.text = autor.nombre;
        select.appendChild(opcion);

    });

}

function clickCreate() {
    let libro = {
        "titulo": document.getElementById("txtTitulo").value,
        "categoria": document.getElementById("txtCategoria").value,
        "disponible": document.getElementById("txtDisponibilidad").value == "si",
        "autor": {
            "id": parseInt(document.getElementById("listaAutores").value, 10)
        }

    }
    saveLibro(libro);
}

function getLibroId() {
    let auxSplit = window.location.href.split("?");
    let id = auxSplit[1];
    return id
}

async function cargarLibro() {
    if (isNew()) {
        alert("Este es un libro nuevo")
        return;
    }
    let id = getLibroId();
    let libro = await getLibroById(id);
    document.getElementById("txtTitulo").value = libro.titulo;
    document.getElementById("txtCategoria").value = libro.categoria;
    document.getElementById("txtDisponibilidad").value = libro.disponible ? "si" : "no";
    let autorId = libro.autor.id;
    let opciones = document.getElementById("listaAutores").options;
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].value === autorId.toString()) {
            opciones[i].selected = true;
            break;
        }
    }
}

function isNew() {
    let hasIdInUrl = window.location.href.includes("?");
    return !hasIdInUrl
}


cargarAutores();
cargarLibro()
