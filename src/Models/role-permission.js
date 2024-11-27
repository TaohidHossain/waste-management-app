const mongoose = require('mongoose')

const role_permissionSchema = new mongoose.Schema({
    roleId: {
        type: String,
        required: [true, "Please provide role ID"]
    },
    permissionId: {
        type: String,
        required: [true, "Please provide permission ID"]
    },
    permission: String
})

const Role_permissions = mongoose.model('role-permission', role_permissionSchema)
module.exports = Role_permissions