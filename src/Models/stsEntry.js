const mongoose = require('mongoose')

const stsEntrySchema = new mongoose.Schema(
    {
        stsId: {
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

const stsEntry = mongoose.model("stsEntry", stsEntrySchema)
module.exports = stsEntry