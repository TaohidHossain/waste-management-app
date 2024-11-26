const mongoose = require('mongoose')

const permissionSchema = new mongoose.Schema({
    permission: {
        type : String,
        required: [true, "Please provide permission string"]
    }
})

const Permission = mongoose.model('permission', permissionSchema)
module.exports = Permission