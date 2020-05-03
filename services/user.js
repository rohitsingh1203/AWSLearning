const User = require('../models/user');

const findUser = (body) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            User.findOne({ email: body.email })
                .then(userObj => resolve(userObj))
                .catch(err => reject(err))
        }, 100)
    })
)

const saveUser = (body) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let userInfo = new User({
                email: body.email,
                password: body.password,
                passwordRef: body.password,
                name: body.name
            })
            User.create(userInfo)
                .then(userObj => resolve(userObj))
                .catch(err => reject(err))
        }, 100)
    })
)

const singIn = (body) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            User.findOne({ email: body.email })
                .then(userObj => resolve(userObj))
                .catch(err => reject(err))
        }, 100)
    })
)

const userService = {
    findUser: findUser,
    saveUser: saveUser,
    singIn: singIn
}
module.exports = userService;