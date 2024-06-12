# API api/author

## Endpoints

1. 'GET api/author'  

### Description

Obtiene una lista de autores.

### Endpoint api/author GET example
Response:
- {
    "id": 1,
    "fullName": "John Doe",
    "institutionalAffiliation": "University X",
    "email": "johndoe@example.com",
    "ORCID": "0000-0001-2345-6789",
    "copyrightRegistration": "12345",
    "articles": [
      {
        "id": 1,
        "title": "Article Title 1"
      },
      {
        "id": 2,
        "title": "Article Title 2"
      }
    ]
  }

### Requeriments for publish

    "id": 1,
    "fullName": "Rodrigo Slucka Zárate",
    "institutionalAffiliation": "Universidad Tomas Frias",
    "email": "rodrigoslucka@gnail.com",
    "ORCID": "0000-0001-2345-6789",
    "copyrightRegistration": "12345",
    "articles": [
      {
        "id": 1,
        "title": "Article Title 1"
      },
      {
        "id": 2,
        "title": "Article Title 2"
      }
    ]

2. GET api/authors/ 

### Description

Obtiene un autor por su ID.

### Endpoint api/authors/ GET example
Response:
- {
  "id": 2,
  "fullName": "Jane Smith",
  "institutionalAffiliation": "University Y",
  "email": "janesmith@example.com",
  "ORCID": "0000-0002-3456-7890",
  "copyrightRegistration": "67890",
  "articles": [
    {
      "id": 1,
      "title": "Article Title 1"
    },
    {
      "id": 2,
      "title": "Article Title 2"
    }
  ]
}


3. POST api/authors 

### Description

Crea un nuevo autor.

### Endpoint api/authors POST example
Response:
- {
  "id": 2,
  "fullName": "Jane Smith",
  "institutionalAffiliation": "University Y",
  "email": "janesmith@example.com",
  "ORCID": "0000-0002-3456-7890",
  "copyrightRegistration": "67890",
  "articles": [
    {
      "id": 1,
      "title": "Article Title 1"
    },
    {
      "id": 2,
      "title": "Article Title 2"
    }
  ]
}

### Requeriments for publish

  "fullName": "Jane Smith",
  "institutionalAffiliation": "University Y",
  "email": "janesmith@example.com",
  "ORCID": "0000-0002-3456-7890",
  "copyrightRegistration": "67890",
  "articles": [1, 2]


4. PUT api/authors/   

### Description

Actualiza un autor existente.

5. DELETE /authors/ 

### Description

Elimina un autor por su ID.

### Relations with others collection - types

    author : Articles 

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