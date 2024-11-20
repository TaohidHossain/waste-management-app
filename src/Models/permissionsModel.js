const mongoose = require('mongoose')

const permissionsSchema = new mongoose.Schema({
    roleId: String,
    PermissionId: String
})

const Permissions = mongoose.model('permissions', permissionsSchema)
module.exports = Permissions