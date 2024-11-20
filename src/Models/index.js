const User = require('./userModel')
const Role = require('./roleModel')
const Permission = require('./permissionModel')
const Permissions = require('./permissionsModel')
const Sts = require('./stsModel')
const Landfill = require('./landfillModel')
const Vehicle = require('./vehicleModel')

module.exports = {
    User,
    Role,
    Permission,
    Permissions,
    Vehicle,
    Sts,
    Landfill
}