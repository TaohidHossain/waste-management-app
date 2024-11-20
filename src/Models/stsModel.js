const mongoose = require('mongoose')

const stsShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name for this STS"]
        },
        longitude: {
            type: Number,
            required: [true, "Please provide the longitude of this STS"]
        },
        latitude: {
            type: Number,
            required: [true, "Please provide the latitude of this STS"]
        }
    },
    {
        timestamps: true
    }
)

const Sts = mongoose.model('sts', stsShema)
module.exports = Sts