const mongoose = require('mongoose')

const landfillShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name for this landfill site"]
        },
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
        }
    },
    {
        timestamps: true
    }
)

const Landfill = mongoose.model('landfill', landfillShema)
module.exports = Landfill