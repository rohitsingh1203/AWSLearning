const express = require('express');
const router = express.Router();
//user controller
const userController = require('../controllers/user');

//@route /api/user
//@desc register users
//access Private
//ID 1
router.post('/create', userController.createUser);

//@route /api/user
//@desc logIn users
//access Private
//ID 2
router.post('/singIn', userController.singIn);



module.exports = router;