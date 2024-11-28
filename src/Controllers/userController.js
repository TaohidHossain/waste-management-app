const { User, Role } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const getUser = asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findById(userId).select("-__v")
    if(!user){
        const error = new CustomError("User with given id is not found", 404)
        return next(error)
    }

    const role = await Role.findById(user.roleId).select("role")
    const obj = { ...user._doc, role: role.role }

    res.status(200).json({
        "status": "success",
        "data": obj
    })
})

const getAllUsers = asyncErrorHandler(async (req, res, next) => {
    const users = await User.find({}).select('-__v')
    var entries = []
    for(let i=0; i<users.length; i++){
        const role = await Role.findById(users[i].roleId).select("role")
        const obj = { ...users[i]._doc, role: role.role }
        entries.push(obj)
    }

    res.status(200).json({
        "status": "success",
        "data": entries
    })
})

const deleteUser = asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findByIdAndDelete(userId)
    if(!user){
        const error = new CustomError("User with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status": "success",
        "data": user
    })
})

const updateUser = asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.params
    if(req.body.roleId){
        const error = new CustomError("Role cannot be updated from this API", 400)
        return next(error)
    }
    if(req.body.password || req.body.confirmPassword){
        const error = new CustomError("Password cannot be updated from this API", 400)
        return next(error)
    }
    const user = await User.findByIdAndUpdate(userId, req.body).select("-__v")
    if(!user){
        const error = new CustomError("User with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status": "success",
        "data": user
    })
})

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}