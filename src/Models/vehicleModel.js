const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema(
    {
        capacity: {
            type: Number,
            required: [true, "Please provide capacity of this vehicle"]
        },
        unloadedCost: Number,
        loadedCost: Number
    },
    {
        timestamps: true
    }
)

const Vehicle = mongoose.model('vehicle', vehicleSchema)
module.exports = Vehicle