## Create Tag

Create a single tag.

**URL**: `/tag`

**Tag body example**
```json
{
    "label": "Driver"
}
```

**Method**: `POST`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If the tag body aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f04bd3d9c40d6cbcb63b9ca",
    "message": "Tag created!"
}
```

### Error Response

**Condition**: If such tag does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Tag not created!"
}
```

## Update Tag

Update a single tag.

**URL**: `/tag/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the tag

**Tag body example**
```json
{
    "label": "Bus Driver"
}
```

**Method**: `PUT`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such tag exists and aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f04bd3d9c40d6cbcb63b9ca",
    "message": "Tag updated!"
}
```

### Error Response

**Condition**: If such tag does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": {},
    "message": "Tag not updated!"
}
```

## Delete Tag

Delete a single tag.

**URL**: `/tag/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the tag

**Method**: `DELETE`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such tag exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "_id": "5f04a784073af3659c1b0963",
        "label": "Photographer"
    }
}
```

### Error Response

**Condition**: If such tag does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Tag not found"
}
```

## Get Tags

Get a list of tags

**URL**: `/tags`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If tag exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": [
        {
            "_id": "5f04a784073af3659c1b0960",
            "label": "Designer"
        },
        {
            "_id": "5f04a784073af3659c1b0961",
            "label": "Developer"
        },
        {
            "_id": "5f04a784073af3659c1b0962",
            "label": "Driver"
        },
        {
            "_id": "5f04a784073af3659c1b0963",
            "label": "Photographer"
        },
        {
            "_id": "5f04a784073af3659c1b0964",
            "label": "Translator"
        }
    ]
}
```

### Error Response

**Condition**: If no tag exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Tag not found"
}
```

## Get Tag by ID

Get a single tag's information details.

**URL**: `/tag/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the tag

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such tag exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "_id": "5f04a784073af3659c1b0963",
        "label": "Photographer"
    }
}
```

### Error Response

**Condition**: If such tag does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Tag not found"
}
```
