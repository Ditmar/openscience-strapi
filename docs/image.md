# Colección de Imágenes

La colección de imágenes en Strapi permite almacenar y gestionar imágenes relacionadas con artículos u otros contenidos. Cada entrada de imagen contiene información descriptiva y metadatos relevantes.

## Endpoints

1. `GET /api/images`: Este endpoint permite obtener todas las imágenes almacenadas en la colección.

## Descripción

Este endpoint brinda acceso a todas las imágenes almacenadas en la colección. Cada imagen contiene información descriptiva, como título, fuente, URL, descripción, leyenda y la relación con un artículo específico.

## Ejemplo de Respuesta

```json
{
 "data": [
   {
     "id": 1,
     "attributes": {
       "title": "Imagen de ejemplo",
       "source": "Unsplash",
       "uri": [
         {
           "url": "/uploads/example_image_1_e8f9b6a3c8.jpg"
         }
       ],
       "description": "Esta es una imagen de ejemplo para ilustrar la documentación.",
       "legend": "Imagen de ejemplo",
       "article": 1
     }
   }
 ]
}
```

## Campos Requeridos para Publicar

- title: Título de la imagen (string).
- source: Fuente u origen de la imagen (string).
- uri: La imagen en sí, almacenada como un archivo multimedia (media).
- description: Descripción de la imagen (texto).
- legend: Leyenda o texto explicativo de la imagen (string).
- article: Relación con un artículo específico (string).

## Relaciones con Otras Colecciones

articles: Relación de una imagen con un artículo específico.
