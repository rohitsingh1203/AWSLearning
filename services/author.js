const Author = require('../models/author');
const mongoose = require('mongoose');
const saveAuthor = () => (
    new Promise((resolve, reject) => {
        // setTimeout(() => {
        console.log("body222")
        let authorInfo = new Author({
            _id: new mongoose.Types.ObjectId(),
            name: "author",
            books: "books"
        })
        console.log("authorInfo", authorInfo)
        authorInfo.save()
            .then(authorObj => resolve(authorObj))
            .catch(err => reject(err))
        // }, 100)
    })
)
const saveData = function ({ }, callback) {
    let authorInfo = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: "author",
        books: "books"
    });
    console.log("authorInfo", authorInfo)
    Author.create(authorInfo, (err, authorObj) => {
        if (!err)
            callback(null, authorObj);
        else
            callback(err, null)
    })
}
const authorServices = {
    saveAuthor: saveAuthor,
    saveData: saveData
}
module.exports = authorServices;