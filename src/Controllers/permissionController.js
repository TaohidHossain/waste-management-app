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
    const { id } = req.params
    const permission = await Permission.findById(id)
    console.log(permission._id)
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
    const permission = await Permission.find({})
    res.status(200).json({
        "status" : "success",
        "data" : permission
    })
})


module.exports = {
    getAllPermissions,
    getPermission,
    createPermission
}