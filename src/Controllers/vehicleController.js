const { Vehicle } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createVehicle = asyncErrorHandler(async (req, res, next) => {
    const newVehicle = await Vehicle.create(req.body)
    res.status(201).json({
        "status" : "success",
        "data" : newVehicle
    })
})

const getVehicle = asyncErrorHandler(async (req, res, next) => {
    const { vehicleId } = req.params
    const vehicle = await Vehicle.findById(vehicleId)
    if(!vehicle){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : vehicle
    })
})

const getAllVehicles = asyncErrorHandler(async (req, res, next) => {
    const vehicle = await Vehicle.find({}).select('-__v')
    res.status(200).json({
        "status" : "success",
        "data" : vehicle
    })
})

const deleteVehicle = asyncErrorHandler(async (req, res, next) => {
    const { vehicleId } = req.params
    const vehicle = await Vehicle.findByIdAndDelete(vehicleId)
    if(!vehicle){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status" : "success",
        "data" : vehicle
    })
})

const updateVehicle = asyncErrorHandler(async (req, res, next) => {
    const { vehicleId } = req.params
    const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, req.body)
    if(!vehicle){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : vehicle
    })
})

module.exports = {
    getAllVehicles,
    getVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
}