const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["Open Truck", "Dump Truck", "Compactor", "Container Carrier"],
            required: [true, "Please specify the type of this vehicle"]
        },
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