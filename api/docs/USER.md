## Create User

Create a single user.

**URL**: `/user`

**Request body example**
```json
{
    "givenName": "Alice",
    "familyName": "Kim",
    "email": "akim@mail.io",
    "password": "1718",
    "imageUrl": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
    "description": "I'm a developer.",
    "tags": ["Developer"],
    "available": true
}
```

**Method**: `POST`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If the request body aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f04b9a59351aacb6b949e03",
    "message": "User created!"
}
```

### Error Response

**Condition**: If such user does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "User not created!"
}
```

## Update User

Update a single user.

**URL**: `/user/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the user

**Request body example**
```json
{
    "email": "alice@mail.io"
}
```

**Method**: `PUT`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such user exists and aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f04b9a59351aacb6b949e03",
    "message": "User updated!"
}
```

### Error Response

**Condition**: If such user does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": {},
    "message": "User not updated!"
}
```

## Delete User

Delete a single user.

**URL**: `/user/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the user

**Method**: `DELETE`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such user exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "owns": [],
        "tags": [
            "Developer"
        ],
        "available": true,
        "_id": "5f04ba889c40d6cbcb63b9c7",
        "givenName": "Alice",
        "familyName": "Kim",
        "email": "alice@mail.io",
        "imageUrl": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
        "description": "I'm a developer.",
        "createdAt": "2020-07-07T18:10:16.039Z",
        "updatedAt": "2020-07-07T18:10:43.025Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such user does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "User not found"
}
```

## Get Users

Get a list of users

**URL**: `/users`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If user exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": [
        {
            "owns": [],
            "tags": [],
            "available": false,
            "_id": "5f04a784073af3659c1b0965",
            "givenName": "John",
            "familyName": "Doe",
            "email": "jdoe@mail.io",
            "imageUrl": "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!"
        },
        {
            "owns": [],
            "tags": [],
            "available": true,
            "_id": "5f04a784073af3659c1b0966",
            "givenName": "Jane",
            "familyName": "Doe",
            "email": "jdoe@mail.io",
            "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
            "supplementaryUrl": "https://unsplash.com/photos/6W4F62sN_yI",
            "description": "Hi everyone! I'm a photographer :)"
        }
    ]
}
```

### Error Response

**Condition**: If no user exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "User not found"
}
```

## Get User by ID

Get a single user's information details.

**URL**: `/user/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the user

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such user exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "owns": [],
        "tags": [
            "Photographer"
        ],
        "available": true,
        "_id": "5f04a784073af3659c1b0966",
        "givenName": "Jane",
        "familyName": "Doe",
        "email": "jdoe@mail.io",
        "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        "supplementaryUrl": "https://unsplash.com/photos/6W4F62sN_yI",
        "description": "Hi everyone! I'm a photographer :)"
    }
}
```

### Error Response

**Condition**: If such user does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "User not found"
}
```
