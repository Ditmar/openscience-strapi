# API api/bibliography

## Endpoints

1. 'GET api/bibliography'  

### Description

Gets a list of bibliographies.

### Endpoint api/bibliography GET example
Response:
- {
    "id": 1,
    "publicType": "Book",
    "autorLastName": "Doe",
    "authorInititals": "J.",
    "publicationTitle": "The Example Book",
    "volume": "1",
    "editionNumber": "1",
    "Pages": "1-200",
    "editonInitials": "E.",
    "editorLastName": "Smith",
    "publicationPlace": "New York",
    "Editor": "Publisher X",
    "electronicAddress": "www.example.com",
    "publicationYear": 2020
  }

### Requirements for publish

    "id": 1,
    "publicType": "Book",
    "autorLastName": "Doe",
    "authorInititals": "J.",
    "publicationTitle": "The Example Book",
    "volume": "1",
    "editionNumber": "1",
    "Pages": "1-200",
    "editonInitials": "E.",
    "editorLastName": "Smith",
    "publicationPlace": "New York",
    "Editor": "Publisher X",
    "electronicAddress": "www.example.com",
    "publicationYear": 2020

2. GET api/bibliographies/ 

### Description

Gets a bibliography by its ID.

### Endpoint api/bibliographies/ GET example
Response:
- {
  "id": 2,
  "publicType": "Journal",
  "autorLastName": "Smith",
  "authorInititals": "J.",
  "publicationTitle": "The Example Journal",
  "volume": "1",
  "editionNumber": "1",
  "Pages": "1-100",
  "editonInitials": "E.",
  "editorLastName": "Doe",
  "publicationPlace": "London",
  "Editor": "Publisher Y",
  "electronicAddress": "www.examplejournal.com",
  "publicationYear": 2021
}

3. POST api/bibliographies 

### Description

Creates a new bibliography.

### Endpoint api/bibliographies POST example
Response:
- {
  "id": 2,
  "publicType": "Journal",
  "autorLastName": "Smith",
  "authorInititals": "J.",
  "publicationTitle": "The Example Journal",
  "volume": "1",
  "editionNumber": "1",
  "Pages": "1-100",
  "editonInitials": "E.",
  "editorLastName": "Doe",
  "publicationPlace": "London",
  "Editor": "Publisher Y",
  "electronicAddress": "www.examplejournal.com",
  "publicationYear": 2021
}

### Requirements for publish

  "publicType": "Journal",
  "autorLastName": "Smith",
  "authorInititals": "J.",
  "publicationTitle": "The Example Journal",
  "volume": "1",
  "editionNumber": "1",
  "Pages": "1-100",
  "editonInitials": "E.",
  "editorLastName": "Doe",
  "publicationPlace": "London",
  "Editor": "Publisher Y",
  "electronicAddress": "www.examplejournal.com",
  "publicationYear": 2021

4. PUT api/bibliographies/   

### Description

Updates an existing bibliography.

5. DELETE /bibliographies/ 

### Description

Deletes a bibliography by its ID.

### Relations with others collection - types

    bibliography : Articles 

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