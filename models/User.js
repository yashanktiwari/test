const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    // username: String,
    // password: String,
    email: String,
    role: String,
    products: [
        {
            type: String
        }
    ]
})

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User',UserSchema);

module.exports = User;