const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema(
    {
        givenName: { type: String, required: true },
        familyName: { type: String, required: true },
        email: { type: String, required: true },
        imageUrl: String,
        description: String,
        supplementaryUrl: String,
        owns: [],
        tags: [],
        available: { type: Boolean, default: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
