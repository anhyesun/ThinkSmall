const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sandbox-vfnah.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
