const userService = require('../../services/user')
const createUser = async (req, res, next) => {
    try {
        const isRegistered = await userService.findUser(req.body);
        if (!isRegistered) {
            const registredObj = await userService.saveUser(req.body);
            if (registredObj) {
                return res.status(200).json({ success: 1, message: `Successfuly registered`, data: registredObj })
            } else {
                return res.status(200).json({ success: 0, message: `Please try again!` })
            }
        } else {
            return res.status(200).json({ success: 0, message: `Email already registed ${req.body.email}` })
        }
    } catch (error) {
        return res.status(404).json({ message: `${error}` })
    }
}
const userController = {
    createUser: createUser
}
module.exports = userController