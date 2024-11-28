const { User, Role, Role_permission } = require('../Models')
const jwt = require('jsonwebtoken')
const { serverConfig } = require("../Configs")
const { asyncErrorHandler, CustomError } = require('../Utils')

function signToken(id){
    const token = jwt.sign({id}, serverConfig.SECRET_STR, { expiresIn: parseInt(serverConfig.LOGIN_EXPIRES  / 1000) })
    return token
}

const signup = asyncErrorHandler(async (req, res, next) => {
    const newUser = await User.create(req.body)
    res.status(201).json({
        "status": "success",
        "data": newUser
    })
})

const login = asyncErrorHandler(async (req, res, next) => {
    // Step 1: find user with given email and password
    const { email, password } = req.body
    if(!email || !password){
        const error = new CustomError("Please provide both Email and Password for login in", 400)
        next(error)
    }
    const user = await User.findOne({email}).select("+password")
    const role = await Role.findById(user.roleId).select("role")
    if(!user || !await user.comparePasswordInDB(password)){
        const error = new CustomError("Incorrect email or password", 400)
        return next(error)
    }
    // Step 2: sign jwt token
    const token = signToken(user._id)
    const userObj = { ...user._doc, role: role.role }
    delete userObj['password']
    delete userObj['__v']
    // Step 3: send the token
    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: serverConfig.LOGIN_EXPIRES
    })
    return res.status(200).json({
        'status': 'success',
        token,
        'user': userObj
    })
})

const protect = asyncErrorHandler(async (req, res, next) => {
    // Step 1: Read the token and check if it exists
    const authToken = req.headers.authorization
    let token
    if(authToken && authToken.startsWith('Bearer'))
        token = authToken.split(' ')[1]
    if(!token){
        const error = new CustomError('You are not logged in', 401)
        next(error)
    }
    //Step 2: validate the token
    const decodedToken = jwt.verify(token, serverConfig.SECRET_STR)
    //Step 3: check if the user exists
    const user = await User.findById(decodedToken.id)
    if(!user){
        const error = new CustomError("The user with given token does not exist.", 404)
        next(error)
    }
    //Step 4: check if the user changed password after the token was issued
    if(await user.isPasswordChanged(decodedToken.iat)){
        const error = new CustomError("Password has been changed recently. Please log in again.", 401)
        next(error)
    }
    //Step 5: Allow user to proceed
    const role = await Role.findById(user.roleId).select("role")
    const userObj = { ...user._doc, role: role.role }
    delete userObj['__v']
    req.user = userObj
    next()
})

const forgotPassword = asyncErrorHandler(async (req, res, next) => {

})

const resetPassword = asyncErrorHandler(async (req, res, next) => {

})

const changePassword = asyncErrorHandler(async (req, res, next) => {

})

const hasAccess = (permission) => {
    return asyncErrorHandler(async (req, res, next) => {
        const { roleId } = req.user
        const permissions = await Role_permission.find({roleId}).select("permission")
        let result = []
        permissions.map(obj => result.push(obj.permission))
        if(result.includes(permission)){
            return next()
        }
        const error = new CustomError("This user does not have permission for this action", 403)
        next(error)
    })
}

const hasAccessOrSelfAccess = (permission) => {
    return asyncErrorHandler(async (req, res, next) => {
        const { roleId } = req.user
        const permissions = await Role_permission.find({roleId}).select("permission")
        let result = []
        permissions.map(obj => result.push(obj.permission))
        if(result.includes(permission)){
            return next()
        }
        if(req.user._id === req.params.userId){
            return next()
        }
        const error = new CustomError("This user does not have permission for this action", 403)
        next(error)
    })
}

module.exports = {
    signup,
    login,
    forgotPassword,
    resetPassword,
    changePassword,
    hasAccess,
    hasAccessOrSelfAccess,
    protect
}