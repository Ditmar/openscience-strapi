# API api/volumes

## Endpoints

1. `GET api/volumes`

### Description

1. Gets a list of volumes.

### Endpoint GET api/volumes Example

**Response:**

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
```
### Requeriments for publish

- portrait: Media
- title: Text
- date: Date

### Relations with others collection - types
- year_volume: volume

### Population examples
example 1
``` json
{
    "title": "Volume 1",
    "date": "2024-06-01",
    "portrait": {
        "id": 1
    },
    "articles": [1, 2],
    "year_volume": 1
}
```
example 2
``` json
{
    "title": "Volume 2",
    "date": "2024-07-01",
    "portrait": {
        "id": 2
    },
    "articles": [3, 4],
    "year_volume": 2
}
```

### Roles 
- public
  - find
  - finOne
  - create
  - update
  - delete