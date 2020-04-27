const authorServices = require('../../services/author');

const createAuthor = async (req, res, next) => {
    console.log("TTTTTTTTTTTTT")
    try {
        const authorObj = await authorServices.saveAuthor();
        console.log("authorObj", authorObj)
        if (authorObj) {
            res.status(200).json({ message: `Created successfully ` })
        }
    } catch (error) {
        res.status(400).json({ message: `${error}` })
    }
}

const createAuthor1 = (req, res, next) => {
    authorServices.saveData({},(err, authorObj) => {
        if (err) {
            return res.status(404).json({ success: 0, message: `${err}` })
        } else {
            return res.status(200).json({ success: 1, message: `Created successfuly`, data: authorObj })
        }
    })
}
const authorController = {
    createAuthor: createAuthor,
    createAuthor1: createAuthor1
}
module.exports = authorController;