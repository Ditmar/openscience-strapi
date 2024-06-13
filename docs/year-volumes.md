# API api/year-volume

## Endpoints

1. 'GET api/year-volume'  

### Description

Gets a list of year-volumes.

### Endpoint api/year-volume GET example
Response:
- {
    "id": 1,
    "Year": 2020,
    "Volumes": 2
  }

### Requirements for publish

    "id": 1,
    "Year": 2020,
    "Volumes": 2

2. GET api/year-volumes/ 

### Description

Gets a year-volume by its ID.

### Endpoint api/year-volumes/ GET example
Response:
- {
  "id": 2,
  "Year": 2021,
  "Volumes": 3
}

3. POST api/year-volumes 

### Description

Creates a new year-volume.

### Endpoint api/year-volumes POST example
Response:
- {
  "id": 2,
  "Year": 2021,
  "Volumes": 3
}

### Requirements for publish

  "Year": 2021,
  "Volumes": 3

4. PUT api/year-volumes/   

### Description

Updates an existing year-volume.

5. DELETE /year-volumes/ 

### Description

Deletes  a year-volume by its ID.

### Relations with others collection - types

    year-volume : Volumes 

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

