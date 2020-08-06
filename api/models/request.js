const mongoose = require('mongoose')
const { Schema } = mongoose

const Request = new Schema(
    {
        business: { type: String, required: true },
        storeName: { type: String, required: true },
        details: { type: String, required: true },
        tags: [],
        status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' },
    },
    { timestamps: true },
)

module.exports = mongoose.model('requests', Request)
