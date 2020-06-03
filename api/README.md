Below are the list of available API endpoints.

- [Get List of Businesses](#get-list-of-businesses)
  * [Success Response](#success-response)
- [Get List of Volunteers](#get-list-of-volunteers)
  * [Success Response](#success-response-1)
- [Get Single Business](#get-single-business)
  * [Success Response](#success-response-2)
  * [Error Response](#error-response)
- [Get Single Volunteer](#get-single-volunteer)
  * [Success Response](#success-response-3)
  * [Error Response](#error-response-1)
- [Create Business Owner's Account](#create-business-owners-account)
- [Create Volunteer's Account](#create-volunteers-account)
- [Create Request](#create-request)
- [Update Business Owner's Account Details](#update-business-owners-account-details)
- [Update Volunteer's Account Details](#update-volunteers-account-details)

## Get List of Businesses

Get the complete list of small businesses with details.

**URL**: `/businesses`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Code**: `200 OK`

**Content examples**
```
{ 
    "data": [
    {
        "id": 0,
        "name": "Hunter & Hare",
        "location": "334 W Pender St, Vancouver, BC V6B 3K2",
        "description": "Boutique for women's clothing & accessories on consignment, plus jewelry, stationery & beauty items.",
        "details": "We need a logo for our website",
        "tags": ["consignment", "clothing", "call for designer"]
    },
    ...
    ]
}
```

## Get List of Volunteers

Get the complete list of volunteers with details.

**URL**: `/volunteers`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Code**: `200 OK`

**Content examples**
```
{ 
    "data": [
    {
        "id": 0,
        "name": "Jane Doe",
        "email": "jane.doe@mail.com",
        "description": "An undergraduate student at the Emily Carr University of Art and Design",
        "tags": ["designer", "student"]
    },
    ...
    ]
}
```

## Get Single Business

Get a single business information details.

**URL**: `/businesses/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the small business on the server

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business exists

**Code**: `200 OK`

**Content example**
```json
{
    "data": {
        "id": 0,
        "name": "Hunter & Hare",
        "location": "334 W Pender St, Vancouver, BC V6B 3K2",
        "description": "Boutique for women's clothing & accessories on consignment, plus jewelry, stationery & beauty items.",
        "details": "We need a logo for our website",
        "tags": ["consignment", "clothing", "call for designer"]
    }
}
```

### Error Response

**Condition**: If such business does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "A business with requested ID does not exist."
}
```

## Get Single Volunteer

Get a single volunteer information details.

**URL**: `/volunteers/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the volunteer on the server

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such volunteer exists

**Code**: `200 OK`

**Content example**
```json
{
    "data": {
        "id": 0,
        "name": "Jane Doe",
        "email": "jane.doe@mail.com",
        "description": "An undergraduate student at the Emily Carr University of Art and Design",
        "tags": ["designer", "student"]
    }
}
```

### Error Response

**Condition**: If such volunteer does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "A volunteer with requested ID does not exist."
}
```

## Create Business Owner's Account

## Create Volunteer's Account

## Create Request

## Update Business Owner's Account Details

## Update Volunteer's Account Details
