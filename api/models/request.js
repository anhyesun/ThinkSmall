const mongoose = require('mongoose')
const { Schema } = mongoose

const Request = new Schema(
    {
        business: { type: String, required: true },
        details: { type: String, required: true },
        tags: [],
        status: { type: String, enum: ['todo', 'in-progress', 'done'] },
    },
    { timestamps: true },
)

module.exports = mongoose.model('requests', Request)
