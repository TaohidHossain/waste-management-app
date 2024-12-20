const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, "Please provide role name"]
    }
})

const Role = mongoose.model('role', roleSchema)
module.exports = Role