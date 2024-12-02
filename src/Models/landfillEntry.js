const mongoose = require('mongoose')

const landfillEntrySchema = new mongoose.Schema(
    {
        landfillId: {
            type: String,
            required: [true, "STS ID is required"]
        },
        vehicleId: {
            type: String,
            required: [true, "Vehicle ID is required"]
        },
        weight: {
            type: Number,
            required: [true, "Weight of waste is required"]
        },
        arrival: {
            type: Date,
            required: [true, "Arrival time is required"]
        },
        departure: {
            type: Date,
            required: [true, "Departure time is required"]
        }
    },
    {
        timestamps: true
    }
)

const landfillEntry = mongoose.model("landfillEntry", landfillEntrySchema)
module.exports = landfillEntry