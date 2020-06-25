const mongoose = require('mongoose')
const { Schema } = mongoose

const Owner = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        imageURL: { type: String },
        description: { type: String },
        businesses: { type: [Number], required: true, default: [] },
    },
    { timestamps: true },
)

module.exports = mongoose.model('owners', Owner)
