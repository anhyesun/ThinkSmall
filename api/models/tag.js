const mongoose = require('mongoose')
const { Schema } = mongoose

const Tag = new Schema(
    {
        label: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('tags', Tag)
