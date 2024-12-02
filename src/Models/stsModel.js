const mongoose = require('mongoose')

const stsShema = new mongoose.Schema(
    {
        ward: {
            type: Number,
            required: [true, "Please provide the ward no. of this STS"]
        },
        longitude: {
            type: Number,
            required: [true, "Please provide the longitude of this STS"]
        },
        latitude: {
            type: Number,
            required: [true, "Please provide the latitude of this STS"]
        },
        capacity: {
            type: Number,
            required: [true, "Please provide capacity of this STS"]
        } 
    },
    {
        timestamps: true
    }
)

const Sts = mongoose.model('sts', stsShema)
module.exports = Sts