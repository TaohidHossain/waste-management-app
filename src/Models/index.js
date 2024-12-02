const User = require('./userModel')
const Role = require('./roleModel')
const Permission = require('./permissionModel')
const Role_permission = require('./role-permission')
const Sts = require('./stsModel')
const Landfill = require('./landfillModel')
const Vehicle = require('./vehicleModel')
const StsManagers = require('./stsManagersModel')
const StsEntry = require('./stsEntry')
const LandfillEntry = require('./landfillEntry')

module.exports = {
    User,
    Role,
    Permission,
    Role_permission,
    Vehicle,
    Sts,
    Landfill,
    StsManagers,
    StsEntry,
    LandfillEntry
}