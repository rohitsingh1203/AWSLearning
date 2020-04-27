const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author')

//@route /api/author
//@desc create new author 
//@access public
router.get('/createAuthor', authorController.createAuthor); //by async wait
router.get('/createAuthor1', authorController.createAuthor1) // by callback

//@route /api/author
//@desc fetch all books
//@access public 
router.get('/getAll', (req, res, next) => {
    res.status(200).json({
        message: `all books where fetched`
    })
})

//@route /api/author
//@desc get book by id
//@access public
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        message: `Get details by ID ${req.params.id}`
    })
})

module.exports = router;