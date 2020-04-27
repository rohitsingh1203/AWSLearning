const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String
    },
    books: {
        type: String
    }
}, {
    versionKey: false
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;