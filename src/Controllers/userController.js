const { User, Role } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createUser = asyncErrorHandler(async (req, res, next) => {
    const newUser = await User.create(req.body)
    res.status(201).json({
        "status": "success",
        "data": newUser
    })
})

const getUser = asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findById(userId)
    if(!user){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status": "success",
        "data": user
    })
})

const getAllUsers = asyncErrorHandler(async (req, res, next) => {
    const user = await User.find({}).select('-__v')
    res.status(200).json({
        "status": "success",
        "data": user
    })
})

const deleteUser = asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findByIdAndDelete(userId)
    if(!user){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status": "success",
        "data": user
    })
})

const updateUser = asyncErrorHandler(async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findByIdAndUpdate(userId, req.body)
    if(!user){
        const error = new CustomError("Role with given id is not found", 404)
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
    createUser,
    updateUser,
    deleteUser
}