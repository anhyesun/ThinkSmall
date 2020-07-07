## Create Request

Create a single request.

**URL**: `/request`

**Request body example**
```json
{
    "business": "Kosoo",
    "details": "We're looking for someone who can translate our menus in Cantonese.",
    "tags": ["Translator"]
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
    "id": "5f04bc689c40d6cbcb63b9c8",
    "message": "Request created!"
}
```

### Error Response

**Condition**: If such request does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Request not created!"
}
```

## Update Request

Update a single request.

**URL**: `/request/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the request

**Request body example**
```json
{
    "tags": ["Translator", "Speaks Cantonese"]
}
```

**Method**: `PUT`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such request exists and aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f04bc689c40d6cbcb63b9c8",
    "message": "Request updated!"
}
```

### Error Response

**Condition**: If such request does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": {},
    "message": "Request not updated!"
}
```

## Delete Request

Delete a single request.

**URL**: `/request/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the request

**Method**: `DELETE`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such request exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "tags": [
            "Translator"
        ],
        "_id": "5f04bcb39c40d6cbcb63b9c9",
        "business": "Kosoo",
        "details": "We're looking for someone who can translate our menus in Cantonese.",
        "createdAt": "2020-07-07T18:19:31.179Z",
        "updatedAt": "2020-07-07T18:19:31.179Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such request does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Request not found"
}
```

## Get Requests

Get a list of requests

**URL**: `/requests`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If request exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": [
        {
            "tags": [
                "Designer"
            ],
            "_id": "5f04a784073af3659c1b095f",
            "business": "Hunter & Hare",
            "details": "We need a logo for our website!"
        }
    ]
}
```

### Error Response

**Condition**: If no request exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Request not found"
}
```

## Get Request by ID

Get a single request's information details.

**URL**: `/request/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the request

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such request exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "tags": [
            "Designer"
        ],
        "_id": "5f04a784073af3659c1b095f",
        "business": "Hunter & Hare",
        "details": "We need a logo for our website!"
    }
}
```

### Error Response

**Condition**: If such request does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Request not found"
}
```
