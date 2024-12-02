const mongoose = require('mongoose')

const landfillShema = new mongoose.Schema(
    {
        longitude: {
            type: Number,
            required: [true, "Please provide the longitude of this landfill site"]
        },
        latitude: {
            type: Number,
            required: [true, "Please provide the latitude of this landfill site"]
        },
        capacity: {
            type: Number,
            required: [true, "Please provide the capacity of this landfill site"]
        },
        managers: {
            type: [String]
        }
    },
    {
        timestamps: true
    }
)

const Landfill = mongoose.model('landfill', landfillShema)
module.exports = Landfill