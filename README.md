# API BIBLIOTECA

Esta API permite gestionar una colección de libros. A continuación se describen los endpoints disponibles.

## Endpoints

### Obtener todos los Libros

#### GET `/api/libros`

**Descripción:** Devuelve una lista de todos los libros.

**Respuesta Exitosa:**
- **Código:** 200 OK.
- **Cuerpo:** Array de Objetos Libro

- Ejemplo de Respuesta:
    ```json
  [
     {
        "id": 1,
        "titulo": "Cien años de soledad",
        "categoria": "novela",
        "disponible": true,
        "autor": {
            "id": 1,
            "nombre": "Gabriel García Márquez",
            "pais": "Colombia"
         }
      }
  ]
    ```

### Obtener un Libro por ID

#### GET `/api/libros/{id}`

**Descripción:** Devuelve un libro específico basado en el ID proporcionado.

**Parámetros:**

- **Path Variable:** `id` (Long) - ID del libro

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto Libro

**Respuesta en caso de no encontrar el libro:**

- **Código:** 404 Not Found

### Crear un Nuevo Libro

#### POST `/api/libros`

**Descripción:** Guarda un libro en la base de datos.

**Cuerpo de la Solicitud:**

- **Tipo:** JSON
- **Ejemplo:**
    ```json
    {
        "titulo": "Cien años de soledad",
        "categoria": "novela",
        "disponible": true,
        "autor": {
            "id": 1
        }
    }
    ```

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto Libro

### Eliminar un Libro

#### DELETE `/api/libros/{id}`

**Descripción:** Elimina un libro basado en el ID proporcionado.

**Parámetros:**

- **Path Variable:** `id` (Long) - ID del libro

**Respuesta Exitosa:**

- **Código:** 204 No Content

### Actualizar un Libro

#### PUT `/api/libros/{id}`

**Descripción:** Actualiza un libro existente basado en el ID proporcionado.

**Parámetros:**

- **Path Variable:** `id` (Long) - ID del libro

**Cuerpo de la Solicitud:**

- **Tipo:** JSON
- **Ejemplo:**
    ```json
    {
        "titulo": "Cien años de soledad",
        "categoria": "novela",
        "disponible": true,
        "autor": {
            "id": 1
        }
    }
    ```

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto Libro

**Respuesta en caso de no encontrar el libro:**

- **Código:** 404 Not Found

### Obtener Libros por Autor

#### GET `/api/libros/autor/{idAutor}`

**Descripción:** Devuelve una lista de libros basados en el ID del autor proporcionado.

**Parámetros:**

- **Path Variable:** `idAutor` (Long) - ID del autor

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Array de Objetos Libro

- Ejemplo de Respuesta:
    ```json
    [
        {
            "id": 1,
            "titulo": "Cien años de soledad",
            "categoria": "novela",
            "disponible": true,
            "autor": {
                "id": 1,
                "nombre": "Gabriel García Márquez",
                "pais": "Colombia"
            }
        }
    ]
    ```

### Obtener todas las Categorías

#### GET `/api/libros/categorias`

**Descripción:** Devuelve una lista de todas las categorías de libros disponibles.

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Array de Strings

- Ejemplo de Respuesta:
    ```json
    [
        "novela",
        "poesía",
        "ciencia ficción"
    ]
    ```

### Obtener Libros por Categoría

#### GET `/api/libros/categorias/{categoria}`

**Descripción:** Devuelve una lista de libros basados en la categoría proporcionada.

**Parámetros:**

- **Path Variable:** `categoria` (String) - Categoría del libro

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Array de Objetos Libro

- Ejemplo de Respuesta:
    ```json
    [
        {
            "id": 1,
            "titulo": "Cien años de soledad",
            "categoria": "novela",
            "disponible": true,
            "autor": {
                "id": 1,
                "nombre": "Gabriel García Márquez",
                "pais": "Colombia"
            }
        }
    ]
    ```

### Obtener todos los Autores

#### GET `/api/autores`

**Descripción:** Devuelve una lista de todos los autores.

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Array de Objetos Autor

- Ejemplo de Respuesta:
    ```json
    [
        {
            "id": 1,
            "nombre": "Gabriel García Márquez",
            "pais": "Colombia"
        }
    ]
    ```
