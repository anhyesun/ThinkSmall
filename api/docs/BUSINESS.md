## Create Business

Create a single business.

**URL**: `/business`

**Request body example**
```json
{
    "storeName": "3rd Viet House",
    "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    "storeOwner": "Lily Tran",
    "location": "3420 Cambie St, Vancouver",
    "lat": 49.25469,
    "lng": -123.11492,
    "description": "Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details."
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
    "id": "5f04b31518a8fcca3a63a194",
    "message": "Business created!"
}
```

### Error Response

**Condition**: If such business does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Business not created!"
}
```

## Update Business

Update a single business.

**URL**: `/business/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business

**Request body example**
```json
{
    "storeOwner": "Alice Kim"
}
```

**Method**: `PUT`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business exists and aligns with schema

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "id": "5f04a784073af3659c1b0951",
    "message": "Business updated!"
}
```

### Error Response

**Condition**: If such business does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "",
    "message": "Business not updated!"
}
```

## Delete Business

Delete a single business.

**URL**: `/business/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business

**Method**: `DELETE`

**Auth required**: `YES`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "requests": [],
        "tags": [
            {
                "label": "Call for Translators"
            },
            {
                "label": "Food"
            }
        ],
        "_id": "5f04a784073af3659c1b095c",
        "storeName": "3rd Viet House",
        "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
        "storeOwner": "Lily Tran",
        "location": "3420 Cambie St, Vancouver",
        "lat": 49.25469,
        "lng": -123.11492,
        "description": "Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details."
    }
}
```

### Error Response

**Condition**: If such business does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Business not found"
}
```

## Get Businesss

Get a list of businesses

**URL**: `/businesses`

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If business exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": [
        {
            "requests": [
                0
            ],
            "tags": [
                {
                    "label": "Call for Designers"
                },
                {
                    "label": "Clothing"
                }
            ],
            "_id": "5f04a784073af3659c1b0950",
            "storeName": "Tenth and Proper",
            "storeOwner": "Marion Fudge",
            "location": "4483 W 10th Ave, Vancouver",
            "lat": 49.2641,
            "lng": -123.209,
            "description": "Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women."
        },
        {
            "requests": [
                1,
                2
            ],
            "tags": [
                {
                    "label": "Call for Logo Design"
                },
                {
                    "label": "Clothing"
                }
            ],
            "_id": "5f04a784073af3659c1b0951",
            "storeName": "Hunter & Hare",
            "imageUrl": "https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            "storeOwner": "Joanne Bousaleh",
            "location": "227 Union St, Vancouver",
            "lat": 49.277824,
            "lng": -123.098293,
            "description": "Boutique for women's clothing & accessories on consignment, plus jewelry, stationery & beauty items."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Delivery Personnel"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b0952",
            "storeName": "Kosoo",
            "imageUrl": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "storeOwner": "James Lee",
            "location": "832 Cardero St, Vancouver",
            "lat": 49.28907,
            "lng": -123.13253,
            "description": "High-end place with a warm feel providing Korean fusion small & large plates, a raw bar & cocktails."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Translators"
                },
                {
                    "label": "Music Retail"
                }
            ],
            "_id": "5f04a784073af3659c1b0953",
            "storeName": "Red Cat Records",
            "imageUrl": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "storeOwner": "Dave Gowans",
            "location": "4332 Main St, Vancouver",
            "lat": 49.24697,
            "lng": -123.10113,
            "description": "Red Cat Records is an independent record store in Vancouver, voted one of the top ten indie stores in Canada by our customers (CBC 3 Searchlight)."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Translators"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b0954",
            "storeName": "Viet House",
            "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Lily Tran",
            "location": "3420 Cambie St, Vancouver",
            "lat": 49.25469,
            "lng": -123.11492,
            "description": "Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Italian"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b0955",
            "storeName": "Robba da Matti",
            "imageUrl": "https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Matti Rikkinen",
            "location": "1127 Mainland St, Vancouver",
            "lat": 49.2754,
            "lng": -123.12124,
            "description": "Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Delivery Personnel"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b0956",
            "storeName": "2nd Kosoo",
            "imageUrl": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "storeOwner": "James Lee",
            "location": "832 Cardero St, Vancouver",
            "lat": 49.28907,
            "lng": -123.13253,
            "description": "High-end place with a warm feel providing Korean fusion small & large plates, a raw bar & cocktails."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Designers"
                },
                {
                    "label": "Clothing"
                }
            ],
            "_id": "5f04a784073af3659c1b0957",
            "storeName": "2nd Tenth and Proper",
            "imageUrl": "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
            "storeOwner": "Marion Fudge",
            "location": "4483 W 10th Ave, Vancouver",
            "lat": 49.2641,
            "lng": -123.209,
            "description": "Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Logo Design"
                },
                {
                    "label": "Clothing"
                }
            ],
            "_id": "5f04a784073af3659c1b0958",
            "storeName": "2nd Hunter & Hare",
            "imageUrl": "https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
            "storeOwner": "Joanne Bousaleh",
            "location": "227 Union St, Vancouver",
            "lat": 49.277824,
            "lng": -123.098293,
            "description": "Boutique for women's clothing & accessories on consignment, plus jewelry, stationery & beauty items."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Translators"
                },
                {
                    "label": "Music Retail"
                }
            ],
            "_id": "5f04a784073af3659c1b0959",
            "storeName": "2nd Red Cat Records",
            "imageUrl": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            "storeOwner": "Dave Gowans",
            "location": "4332 Main St, Vancouver",
            "lat": 49.24697,
            "lng": -123.10113,
            "description": "Red Cat Records is an independent record store in Vancouver, voted one of the top ten indie stores in Canada by our customers (CBC 3 Searchlight)."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Translators"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b095a",
            "storeName": "2nd Viet House",
            "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Lily Tran",
            "location": "3420 Cambie St, Vancouver",
            "lat": 49.25469,
            "lng": -123.11492,
            "description": "Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Italian"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b095b",
            "storeName": "2nd Robba da Matti",
            "imageUrl": "https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Matti Rikkinen",
            "location": "1127 Mainland St, Vancouver",
            "lat": 49.2754,
            "lng": -123.12124,
            "description": "Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Call for Translators"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b095c",
            "storeName": "3rd Viet House",
            "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Lily Tran",
            "location": "3420 Cambie St, Vancouver",
            "lat": 49.25469,
            "lng": -123.11492,
            "description": "Traditional Vietnamese menu & chef specials in a casual setting with dark wood interior details."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Italian"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b095d",
            "storeName": "3rd Robba da Matti",
            "imageUrl": "https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Matti Rikkinen",
            "location": "1127 Mainland St, Vancouver",
            "lat": 49.2754,
            "lng": -123.12124,
            "description": "Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu."
        },
        {
            "requests": [],
            "tags": [
                {
                    "label": "Italian"
                },
                {
                    "label": "Food"
                }
            ],
            "_id": "5f04a784073af3659c1b095e",
            "storeName": "3rd Robba da Matti",
            "imageUrl": "https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "storeOwner": "Matti Rikkinen",
            "location": "1127 Mainland St, Vancouver",
            "lat": 49.2754,
            "lng": -123.12124,
            "description": "Cozy Italian trattoria with a warm vibe & outdoor seating, plus homemade pasta mains & a tapas menu."
        }
    ]
}
```

### Error Response

**Condition**: If no business exists

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "success": false,
    "error": "Business not found"
}
```

## Get Business by ID

Get a single business's information details.

**URL**: `/business/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "requests": [
            0
        ],
        "tags": [
            {
                "label": "Call for Designers"
            },
            {
                "label": "Clothing"
            }
        ],
        "_id": "5f04a784073af3659c1b0950",
        "storeName": "Tenth and Proper",
        "storeOwner": "Marion Fudge",
        "location": "4483 W 10th Ave, Vancouver",
        "lat": 49.2641,
        "lng": -123.209,
        "description": "Tenth & Proper, a unique fashion and lifestyle boutique specializing in beautifully crafted casual wear for women."
    }
}
```

### Error Response

**Condition**: If such business does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "Business not found"
}
```
