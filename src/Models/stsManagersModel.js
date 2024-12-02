const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
    stsId: {
        type: String,
        required: [true, "Please provide STS ID"]
    },
    managerId: {
        type: String,
        required: [true, "Please provide STS ID"]
    }
})

const StsManagers = mongoose.model("stsManager", managerSchema)
module.exports = StsManagers