const { Permission } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createPermission = asyncErrorHandler(async (req, res, next) => {
    const permission = req.body
    const newPermission = await Permission.create(permission)
    res.status(201).json({
        "status" : "success",
        "data" : newPermission
    })
})

const getPermission = asyncErrorHandler(async (req, res, next) => {
    const { permisssionId } = req.params
    const permission = await Permission.findById(permisssionId)
    if(!permission){
        const error = new CustomError("Permission with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : permission
    })
})

const getAllPermissions = asyncErrorHandler(async (req, res, next) => {
    const permission = await Permission.find({}).select('-__v')
    res.status(200).json({
        "status" : "success",
        "data" : permission
    })
})

const deletePermission = asyncErrorHandler(async (req, res, next) => {
    const { permisssionId } = req.params
    const permission = await Permission.findByIdAndDelete(permisssionId)
    if(!permission){
        const error = new CustomError("Permission with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status" : "success",
        "data" : permission
    })
})

module.exports = {
    getAllPermissions,
    getPermission,
    createPermission,
    deletePermission
}