const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
require('crypto')
const Landfill = require('./landfillModel')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        email: {
            type: String,
            required: [true, "Please enter an email"],
            unique: true,
            validate: [validator.isEmail, "Please enter a valid email"],
            immutable: true
        },
        roleId: {
            type: String,
            default: "6746a722250c4ebe658f9b84"
        },
        password: {
            type: String,
            required: [true, "Please enter a password"],
            minlength: 6,
            select: false
        },
        confirmPassword: {
            type: String,
            required: [true, "Please confirm your password"],
            validate: {
                validator: function(val){
                    return val == this.password
                },
                message: "Password and Confirm Password do not match"
            }
        },
        passwordChangedAt: Date,
        passwordResetToken: String,
        passwordResetTokenExpires: Date
    },
    {
        timestamps: true
    }
)

// hash password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 8)
    this.confirmPassword = undefined
    next()
})

userSchema.post('save', async function(doc, next){
    if(this.roleId != "6746a715250c4ebe658f9b82") return next()
    const landfill = await Landfill.findById("67494c539e1dbae5c48b5895")
    let managers = landfill.managers
    managers.push(this._id)
    await Landfill.findByIdAndUpdate("67494c539e1dbae5c48b5895", {managers})
    next()
})

userSchema.methods.comparePasswordInDB = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.isPasswordChanged = function(JWTTimestamp){
    if(this.passwordChangedAt){
        const passwordChangedAt = parseInt(this.passwordChangedAt.getTime() / 1000)
        return JWTTimestamp < passwordChangedAt
    }
    return false
}

userSchema.methods.createPasswordResetToken = function(){ 
    const resetToken = crypto.randomBytes(16).toString('hex')
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetTokenExpires = Date.now() + 5 * 60 * 1000 // 5 minutes
    return resetToken
}

userSchema.methods.comparePasswordResetToken = function(resetToken){
    return this.passwordResetToken == crypto.createHash('sha256').update(resetToken).digest('hex')
}

const User = mongoose.model("user", userSchema)
module.exports = User