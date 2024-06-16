# API api/dynamic-banners
---
## Endpoints

1. `GET /api/dynamic-banners`

**Description**
Este endpoint permite obtener la lista completa de banners dinámicos registrados en Strapi.


**Endpoint api/dynamic-banners GET example**
**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "redirect": "https://www.example.com/",
        "createdAt": "2024-06-16T07:09:30.793Z",
        "updatedAt": "2024-06-16T07:09:32.781Z",
        "publishedAt": "2024-06-16T07:09:32.777Z"
      },
      "id": 2,
      "attributes": {
        "redirect": "https://www.example.com/",
        "createdAt": "2024-06-16T07:09:30.793Z",
        "updatedAt": "2024-06-16T07:09:32.781Z",
        "publishedAt": "2024-06-16T07:09:32.777Z"
      }
    }
  ],
    "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

2. `GET /api/dynamic-banners/:id`

**Description**
Este endpoint permite obtener un banner dinámico por su ID.

**Endpoint api/dynamic-banners/:id GET example**
**Response:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "redirect": "https://www.example.com/",
      "createdAt": "2024-06-16T07:09:30.793Z",
      "updatedAt": "2024-06-16T07:09:32.781Z",
      "publishedAt": "2024-06-16T07:09:32.777Z"
    }
  },
  "meta": {

  }
}
```

3. `POST /api/dynamic-banners`

**Description**
Este endpoint permite crear un nuevo banner dinámico.

4. `PUT /api/dynamic-banners/:id`

**Description**
Este endpoint permite actualizar un banner dinámico existente por su ID.

5. `DELETE /api/dynamic-banners/:id`

**Description**
Este endpoint permite eliminar un banner dinámico por su ID.

---

## Requeriments for publish

#### - image: Media
- Para publicar un banner dinámico en Strapi la imagen debe tener dimensiones de 1200x400 para garantizar la calidad de la imagen. 
- Se recomienda el formato PNG.
- Este campo es obligatorio. 

#### - redirect: Text
- Para publicar un banner dinámico en Strapi, el campo redirect es obligatorio. 
- Debe usarse una URL válida, por lo que se ha implementado una expresión regular para asegurar el formato del enlace.

---

## Relations with others collection - types

Ninguna.

---

## Population examples
- example 1  
`http://localhost:1337/api/dynamic-banners`  
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "redirect": "https://www.example.com/",
        "createdAt": "2024-06-16T07:09:30.793Z",
        "updatedAt": "2024-06-16T07:09:32.781Z",
        "publishedAt": "2024-06-16T07:09:32.777Z"
      }
    }
  ]
}
```
- example 2  
`http://localhost:1337/api/dynamic-banners?populate=*`  
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "redirect": "https://www.example.com/",
        "createdAt": "2024-06-16T07:09:30.793Z",
        "updatedAt": "2024-06-16T07:09:32.781Z",
        "publishedAt": "2024-06-16T07:09:32.777Z",
        "image": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "prueba.png",
              "alternativeText": null,
              "caption": null,
              "width": 1200,
              "height": 400,
              "formats": {
                "thumbnail": {
                  "name": "thumbnail_prueba.png",
                  "hash": "thumbnail_prueba_bb49a20cec",
                  "ext": ".png",
                  "mime": "image/png",
                  "path": null,
                  "width": 245,
                  "height": 82,
                  "size": 4.59,
                  "sizeInBytes": 4589,
                  "url": "/uploads/thumbnail_prueba_bb49a20cec.png"
                },
                "small": {
                  "name": "small_prueba.png",
                  "hash": "small_prueba_bb49a20cec",
                  "ext": ".png",
                  "mime": "image/png",
                  "path": null,
                  "width": 500,
                  "height": 167,
                  "size": 13.21,
                  "sizeInBytes": 13206,
                  "url": "/uploads/small_prueba_bb49a20cec.png"
                },
                "medium": {
                  "name": "medium_prueba.png",
                  "hash": "medium_prueba_bb49a20cec",
                  "ext": ".png",
                  "mime": "image/png",
                  "path": null,
                  "width": 750,
                  "height": 250,
                  "size": 24.24,
                  "sizeInBytes": 24243,
                  "url": "/uploads/medium_prueba_bb49a20cec.png"
                },
                "large": {
                  "name": "large_prueba.png",
                  "hash": "large_prueba_bb49a20cec",
                  "ext": ".png",
                  "mime": "image/png",
                  "path": null,
                  "width": 1000,
                  "height": 333,
                  "size": 37.11,
                  "sizeInBytes": 37113,
                  "url": "/uploads/large_prueba_bb49a20cec.png"
                }
              },
              "hash": "prueba_bb49a20cec",
              "ext": ".png",
              "mime": "image/png",
              "size": 49,
              "url": "/uploads/prueba_bb49a20cec.png",
              "previewUrl": null,
              "provider": "local",
              "provider_metadata": null,
              "createdAt": "2024-06-16T07:09:19.773Z",
              "updatedAt": "2024-06-16T07:09:19.773Z"
            }
          }
        }
      }
    }
  ]
}
```
---

## Control of the image resolution
Para garantizar la calidad de la imagen, se ha implementado una función para validar las dimensiones de la imagen asociada al evento que se está creando o actualizando.
De no cumplir con estas dimensiones no se creara o actualizara el banner.
**La implementación se encuentra en el archivo lifecycles.js.**  
  `src\api\dynamic-banner\content-types\dynamic-banner\lifecycles.js`

---

## Test in the frontend
Para probar el banner en el frontend, asegúrese de que sea cliclable y redireccione correctamente al enlace especificado.
Cabe aclarar que se debe realizar previamente el tipado de los datos.  
- Prueba en astro:
```json
---
import Layout from "@layouts/Layout.astro";
import type { Banner } from "../../types/banner.dto";

const response = await fetch(
  `${import.meta.env.API_STRAPI_URL}/api/banners?populate=*` //http://127.0.0.1:1337
);
const data = await response.json();

let banners: Banner[] = [];

if (data && data.data) {
  banners = data.data.map((item: any) => {
    const attributes = item.attributes;
    return {
      id: item.id,
      attributes: {
        redirect: attributes.redirect,
        image: {
          data: {
            id: attributes.image.data.id,
            attributes: {
              name: attributes.image.data.attributes.name,
              url: attributes.image.data.attributes.url,
            }
          }
        }
      }
    } as Banner;
  });
}

---
<Layout title="">
  <div>
    {
      banners.map((item: Banner) => (
      <div>
        <div>
          <a href={item.attributes.redirect}>
            <img src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}>
          </a>
        </div>
      </div>
      ))
    }
  </div>
</Layout>
```
---

## Roles   
- Public  
  - find  
  - finOne  
- Authenticated  
  - find  
  - finOne  
  - create  
  - update  
  - delete  