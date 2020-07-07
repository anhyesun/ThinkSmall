const mongoose = require('mongoose')

const ObjectId = _id => new mongoose.Types.ObjectId(_id)

module.exports = ObjectId
