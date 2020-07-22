const mongoose = require('mongoose')
const { Schema } = mongoose

const Business = new Schema(
    {
        storeName: { type: String, required: true },
        imageUrl: String,
        storeOwner: String,
        location: String,
        lat: Number,
        lng: Number,
        description: String,
        requests: [],
        tags: [],
    },
    { timestamps: true },
)

module.exports = mongoose.model('businesses', Business)
