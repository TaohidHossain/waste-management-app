const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema({
    permission: String
})

const Permission = mongoose.model('permission', permissionSchema)
module.exports = Permission