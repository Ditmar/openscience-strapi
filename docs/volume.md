# API api/volumes

## Endpoints

1. `GET api/volumes`

### Description

Obtiene una lista de todos los volúmenes.

### Endpoint api/volumes GET example
Response:
```json
{
  "data": [
    {
      "id": 1,
      "portrait": "/uploads/portrait1.jpg",
      "title": "Volume 1",
      "date": "2023-01-01",
      "articles": [
        {
          "id": 1,
          "title": "Article Title 1"
        },
        {
          "id": 2,
          "title": "Article Title 2"
        }
      ],
      "year_volume": {
        "id": 1,
        "year": 2023
      }
    },
    {
      "id": 2,
      "portrait": "/uploads/portrait2.jpg",
      "title": "Volume 2",
      "date": "2024-01-01",
      "articles": [
        {
          "id": 3,
          "title": "Article Title 3"
        },
        {
          "id": 4,
          "title": "Article Title 4"
        }
      ],
      "year_volume": {
        "id": 2,
        "year": 2024
      }
    }
  ]
}



### Roles 
- public
  - find
  - finOne
  - create
- Authenticated
  - find
  - findOne
  - create
  - update
  - delete
- Admin
  - find
  - findOne
  - create
  - update
  - delete