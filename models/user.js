const mongoose = require('mongoose');

//user Schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String
    },
    password: {
        type: String,
    },
    passwordRef: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }



}, {
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;