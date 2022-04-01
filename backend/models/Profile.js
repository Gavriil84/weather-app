const mongoose = require('mongoose')

const ProfileSchema = mongoose.Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    favorite: { type: [String] }
})

module.exports = mongoose.model('profile', ProfileSchema)