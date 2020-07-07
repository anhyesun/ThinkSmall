const mongoose = require('mongoose')
const { Schema } = mongoose

const Business = new Schema(
    {
        storeName: { type: String, required: true },
        imageUrl: String,
        storeOwner: { type: String, required: true },
        location: { type: String, required: true },
        lat: Number,
        lng: Number,
        description: String,
        requests: [],
        tags: [],
    },
    { timestamps: true },
)

module.exports = mongoose.model('businesses', Business)
