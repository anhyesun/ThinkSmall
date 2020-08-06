const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt');

const User = new Schema(
    {
        givenName: { type: String, required: true },
        familyName: { type: String, required: true },
        email: { type: String, required: true },
        password: String,
        phone: String,
        imageUrl: String,
        description: String,
        supplementaryUrl: String,
        owns: [], // businesses the user owns
        tags: [],
        tasks: [], // requests assigned to the user
        requests: [], // requests submitted by the user
        available: { type: Boolean, default: false },
    },
    { timestamps: true },
)

// generating a hash
User.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', User)
