# Modelo de Contenido "Static Banner"

Este modelo en Strapi permite gestionar banners estáticos que se mostrarán en el sitio web.

## Campos

- **image:** Archivo multimedia que representa visualmente el banner estático. Se recomienda formato PNG y dimensiones de 1200x400 para asegurar la calidad.
- **url:** Enlace al que se dirigirá el usuario al hacer clic en el banner.
- **service:** Texto opcional para especificar el área o servicio promocionado por el banner.

## Validations

- Todos los campos (`image`, `url`, `service`) son obligatorios.
- La imagen debe tener dimensiones de 1200x400 píxeles para asegurar la calidad.
- La URL debe ser válida.

## Endpoints de la API
1. `GET /api/static-banners`
2. **Response:**
- **GET /api/static-banners:** Obtiene todos los banners estáticos registrados.
   **Endpoint api/dynamic-banners GET example**

 ```json
{
  "data": {
    "id": 1,
    "attributes": {
      "image": {
        "url": "/uploads/banner_image.png",
        "width": 1200,
        "height": 400
      },
      "url": "https://www.example.com/",
      "service": "Promoción de Servicios",
      "createdAt": "2024-06-16T07:09:30.793Z",
      "updatedAt": "2024-06-16T07:09:32.781Z",
      "publishedAt": "2024-06-16T07:09:32.777Z"
    }
  }
},

  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
}
```

2. `POST /api/static-banners`
**POST /api/static-banners POST EXAMPLE:** Crea un nuevo banner estático.
 ```json

```
3. `PUT /api/static-banners`
**PUT /api/static-banners/:id:** Actualiza un banner estático existente por su ID.
```json

```
4. `DELETE /api/static-banners`
No se requiere un cuerpo en la solicitud.

## Population examples
- example 1  
`http://localhost:1337/api/static-banners` 
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "image": {
          "url": "/uploads/banner_image_1.png",
          "width": 1200,
          "height": 400
        },
        "url": "https://www.example1.com/",
        "service": "Servicio 1",
        "createdAt": "2024-06-16T07:09:30.793Z",
        "updatedAt": "2024-06-16T07:09:32.781Z",
        "publishedAt": "2024-06-16T07:09:32.777Z"
      }
    }
  ]
}
```
- Example 2
 `http://localhost:1337/api/static-banners?populate=`
 - Request:
 ```json
  {
  "data": {
    "image": 2,
    "url": "https://www.example.com/sale",
    "service": "Venta de Invierno"
  }
}
```
- Response:
  ```json
  {
  "data": {
    "id": 2,
    "attributes": {
      "image": {
        "id": 2,
        "name": "banner_invierno.png",
        "alternativeText": null,
        "caption": null,
        "width": 1200,
        "height": 400,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_banner_invierno.png",
            "hash": "thumbnail_banner_invierno_cd56a20dbc",
            "ext": ".png",
            "mime": "image/png",
            "width": 245,
            "height": 82,
            "size": 4.59,
            "url": "/uploads/thumbnail_banner_invierno_cd56a20dbc.png"
          },
          "small": {
            "name": "small_banner_invierno.png",
            "hash": "small_banner_invierno_cd56a20dbc",
            "ext": ".png",
            "mime": "image/png",
            "width": 500,
            "height": 167,
            "size": 13.21,
            "url": "/uploads/small_banner_invierno_cd56a20dbc.png"
          },
          "medium": {
            "name": "medium_banner_invierno.png",
            "hash": "medium_banner_invierno_cd56a20dbc",
            "ext": ".png",
            "mime": "image/png",
            "width": 750,
            "height": 250,
            "size": 24.24,
            "url": "/uploads/medium_banner_invierno_cd56a20dbc.png"
          },
          "large": {
            "name": "large_banner_invierno.png",
            "hash": "large_banner_invierno_cd56a20dbc",
            "ext": ".png",
            "mime": "image/png",
            "width": 1000,
            "height": 333,
            "size": 37.11,
            "url": "/uploads/large_banner_invierno_cd56a20dbc.png"
          }
        },
        "hash": "banner_invierno_cd56a20dbc",
        "ext": ".png",
        "mime": "image/png",
        "size": 49,
        "url": "/uploads/banner_invierno_cd56a20dbc.png",
        "createdAt": "2024-06-16T07:10:19.773Z",
        "updatedAt": "2024-06-16T07:10:19.773Z"
      },
      "url": "https://www.example.com/sale",
      "service": "Venta de Invierno",
      "createdAt": "2024-06-16T07:10:30.793Z",
      "updatedAt": "2024-06-16T07:10:32.781Z",
      "publishedAt": "2024-06-16T07:10:32.777Z"
    }
  }
}```

## Requirements to Publish

- **image:** El archivo de imagen debe tener dimensiones de 1200x400 para asegurar la calidad del banner.
- **redirect:** El campo de URL debe ser una dirección válida y debe incluirse para poder publicar el banner.

## Image Resolution Control

Se implementa una función en `lifecycles.js` para validar las dimensiones de la imagen asociada al evento de creación o actualización del banner estático. Esto asegura que solo se publiquen banners con imágenes de alta calidad.


## Test in the frontend
Para probar el banner en el frontend, asegúrese de que sea cliclable y redireccione correctamente al enlace especificado.
Cabe aclarar que se debe realizar previamente el tipado de los datos.  
- Prueba en astro:
```json
---
---
import Layout from "@layouts/Layout.astro";
import type { Banner } from "../../types/banner.dto";

const response = await fetch(
  `${import.meta.env.API_STRAPI_URL}/api/static-banners?populate=*`
);
const data = await response.json();

let banners: Banner[] = [];

if (data && data.data) {
  banners = data.data.map((item: any) => {
    const attributes = item.attributes;
    return {
      id: item.id,
      attributes: {
        url: attributes.url,
        image: {
          url: attributes.image.url
        },
        service: attributes.service
      }
    } as Banner;
  });
}

---
<Layout title="">
  <div>
    {
      banners.map((item: Banner) => (
      <div key={item.id}>
        <div>
          <a href={item.attributes.url}>
            <img src={`${import.meta.env.API_STRAPI_URL}${item.attributes.image.url}`} alt={item.attributes.service} />
          </a>
        </div>
        <p>{item.attributes.service}</p>
      </div>
      ))
    }
  </div>
</Layout>
```
---


## Roles y Permisos
- public
    - find: Puede listar los banners estáticos.
    - findOne: Puede obtener detalles de un banner estático.
- Autenticados
    - find: Puede listar los banners estáticos.
    - findOne: Puede obtener detalles de un banner estático.
    - create: Puede crear un nuevo banner estático.
    - update: Puede actualizar un banner estático existente.
    - delete: Puede eliminar un banner estático.