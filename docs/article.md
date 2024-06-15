# Modelo de Contenido: Article

## Descripción
El modelo de contenido "Article" en Strapi está diseñado para gestionar información estructurada sobre artículos, proporcionando campos específicos para manejar datos como título, fecha, autores, texto completo, archivos PDF, resumen, imágenes, tablas, bibliografías, volumen y menús asociados.

## Campos del Modelo

- **Title (Texto)**: Título del artículo. (Obligatorio)
- **Date (Fecha)**: Fecha de publicación del artículo. (Obligatorio)
- **Authors (Relación)**: Autores del artículo. (Obligatorio, muchos a muchos)
- **Complete Text (Texto enriquecido)**: Texto completo del artículo. (Obligatorio)
- **PDF (Archivo multimedia)**: Archivo PDF del artículo. (Obligatorio, solo PDF)
- **Brief (Texto enriquecido)**: Resumen del artículo. (Obligatorio)
- **Images (Relación)**: Imágenes asociadas al artículo. (Muchos a muchos)
- **Tables (Relación)**: Tablas asociadas al artículo. (Muchos a muchos)
- **Bibliographies (Relación)**: Bibliografías citadas en el artículo. (Muchos a muchos)
- **Volume (Relación)**: Volumen al que pertenece el artículo. (Uno a uno)
- **Menus (Relación)**: Menús asociados al artículo. (Muchos a muchos)  

## Endpoints de la API

### Obtener un artículo por ID

```http
GET /articles/:id
```

### Crear un artículo

POST /articles

### Body:
```json
{
  "title": "Título del artículo",
  "date": "2024-06-14",
  "authors": [1, 2],
  "complete_text": "Texto completo del artículo...",
  "pdf": 1,
  "brief": "Resumen del artículo...",
  "images": [1, 2],
  "tables": [1],
  "bibliographies": [1, 2],
  "volume": 1,
  "menus": [1, 2]
}
```
### Actualizar un artículo
PUT /articles/:id

### Body:
```json
{
  "title": "Nuevo título del artículo"
}
```

### Eliminar un artículo
DELETE /articles/:id

### Ejemplos de Datos de Prueba
```json
{
  "title": "Artículo de ejemplo",
  "date": "2024-06-14",
  "authors": [1],
  "complete_text": "Este es un ejemplo de texto completo del artículo...",
  "pdf": 1,
  "brief": "Resumen del artículo de ejemplo...",
  "images": [1, 2],
  "tables": [1],
  "bibliographies": [1],
  "volume": 1,
  "menus": [1, 2]
}
```

## Populación

## Ejemplo 1

```json
{
  "title": "Artículo de ejemplo 1",
  "date": "2024-06-14",
  "authors": [1, 2],
  "complete_text": "Este es un ejemplo de texto completo del artículo...",
  "pdf": 1,
  "brief": "Resumen del artículo de ejemplo 1...",
  "images": [1, 2],
  "tables": [1],
  "bibliographies": [1, 2],
  "volume": 1,
  "menus": [1, 2]
}
```

## Ejemplo 2


```json
{
  "title": "Artículo de ejemplo 2",
  "date": "2024-06-15",
  "authors": [3],
  "complete_text": "Otro ejemplo de texto completo del artículo...",
  "pdf": 2,
  "brief": "Resumen del artículo de ejemplo 2...",
  "images": [3],
  "tables": [2],
  "bibliographies": [3],
  "volume": 2,
  "menus": [3, 4]
}
```

### Roles 
- public
  - find
  - finOne
  - create
  - update
  - delete