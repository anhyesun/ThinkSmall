# API Documentation

## MVP Requirements

- [Get List of Businesses](#get-list-of-businesses)
- [Get List of Volunteers](#get-list-of-volunteers)
- [Get Single Business](#get-single-business)
- [Get Single Volunteer](#get-single-volunteer)
- [Get List of Business Owners](#get-list-of-business-owners)
- [Get Single Business Owner](#get-single-business-owner)
  * [Success Response](#success-response)
  * [Error Response](#error-response)
- [Create Business Owner's Account](#create-business-owner-s-account)
- [Create Volunteer's Account](#create-volunteer-s-account)
- [Create Request](#create-request)
- [Update Business Owner's Account Details](#update-business-owner-s-account-details)
- [Update Volunteer's Account Details](#update-volunteer-s-account-details)

## Post-MVP Requirements

To be discussed

## Get List of Businesses

## Get List of Volunteers

## Get Single Business

## Get Single Volunteer

## Get List of Business Owners

## Get Single Business Owner

Get a single business owner's information details.

**URL**: `/owner/:id`

**URL Parameters**: `id=[int]` where `id` is the ID of the business owner

**Method**: `GET`

**Auth required**: `NO`

**Permissions required**: `NO`

### Success Response

**Condition**: If such business owner exists

**Code**: `200 OK`

**Content example**
```json
{
    "success": true,
    "data": {
        "businesses": [],
        "_id": "5ef3e8b749db9440f8251185",
        "firstName": "John",
        "lastName": "Doe",
        "imageURL": "https://i.pinimg.com/736x/18/45/d6/1845d65689ecc7cecfaf8f4d958a7f67.jpg",
        "description": "Hi! I run a small business in Vancouver. Looking forward to meeting you all!",
        "createdAt": "2020-06-24T23:58:47.450Z",
        "updatedAt": "2020-06-24T23:58:47.450Z",
        "__v": 0
    }
}
```

### Error Response

**Condition**: If such business owner does not exist

**Code**: `404 NOT FOUND`

**Content example**
```json
{
    "error": "Owner not found"
}
```

## Create Business Owner's Account

## Create Volunteer's Account

## Create Request

## Update Business Owner's Account Details

## Update Volunteer's Account Details
