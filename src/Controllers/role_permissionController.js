const { Role_permission, Role, Permission } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createPermission = asyncErrorHandler(async (req, res, next) => {
    const { roleId, permissionId } = req.body
    const role = await Role.findById(roleId)
    if(!role){
        const error = new CustomError("No role found with given ID", 404)
        return next(error)
    }
    const permission = await Permission.findById(permissionId).select("permission")
    if(!permission){
        const error = new CustomError("No permission found with given ID", 404)
        return next(error)
    }
    console.log({...req.body, permission: permission.permission})
    const role_permission = await Role_permission.create({...req.body, permission: permission.permission})
    res.status(201).json({
        "status" : "success",
        "data" : role_permission
    })
})

const getPermission = asyncErrorHandler(async (req, res, next) => {
    const { permissionId } = req.params
    const permission = await Role_permission.findById(permissionId)
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
    const permission = await Role_permission.find({}).select('-__v')
    res.status(200).json({
        "status" : "success",
        "data" : permission
    })
})

const deletePermission = asyncErrorHandler(async (req, res, next) => {
    const { permissionId } = req.params
    const permission = await Role_permission.findByIdAndDelete(permissionId)
    if(!permission){
        const error = new CustomError("Permission with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status" : "success",
        "data" : permission
    })
})

const findPermissionsByRoleId = asyncErrorHandler(async (req, res, next) => {
    const { roleId } = req.params
    const role = await Role.findById(roleId)
    if(!role){
        const error = new CustomError("No role found with given ID", 404)
        return next(error)
    }
    
    const permissions = await Role_permission.find({roleId}).select("permission")
    let result = []
    permissions.map(obj => result.push(obj.permission))

    res.status(200).json({
        "status" : "success",
        "data": result
    })
})

module.exports = {
    getAllPermissions,
    getPermission,
    createPermission,
    deletePermission,
    findPermissionsByRoleId
}