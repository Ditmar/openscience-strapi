# API api/images

### Endpoints

1. `GET api/images/`

### Description
1. This endpoint allows you to obtain all images.

### Endpoint api/images GET example

Response:
- {
    "data": []
    ...
}

### Requirements for publishing

- title: Text
- source: Text
- uri: Media
- description: Text
- legend: Text
- article: Article


### Relations with other collections

articles: Article

### Population examples

- ...

### Roles
- public
  - find
  - findOne
  - ...
