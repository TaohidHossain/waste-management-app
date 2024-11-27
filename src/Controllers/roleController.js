const { Role } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createRole = asyncErrorHandler(async (req, res, next) => {
    const newRole = await Role.create(req.body)
    res.status(201).json({
        "status" : "success",
        "data" : newRole
    })
})

const getRole = asyncErrorHandler(async (req, res, next) => {
    const { roleId } = req.params
    const role = await Role.findById(roleId)
    if(!role){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : role
    })
})

const getAllRoles = asyncErrorHandler(async (req, res, next) => {
    const role = await Role.find({}).select('-__v')
    res.status(200).json({
        "status" : "success",
        "data" : role
    })
})

const deleteRole = asyncErrorHandler(async (req, res, next) => {
    const { roleId } = req.params
    const role = await Role.findByIdAndDelete(roleId)
    if(!role){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status" : "success",
        "data" : role
    })
})

const updateRole = asyncErrorHandler(async (req, res, next) => {
    const { roleId } = req.params
    const role = await Role.findByIdAndUpdate(roleId, req.body)
    if(!role){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : role
    })
})

module.exports = {
    getAllRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
}