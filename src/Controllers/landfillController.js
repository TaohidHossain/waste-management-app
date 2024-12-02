const { Landfill, LandfillEntry } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createLandfill = asyncErrorHandler(async (req, res, next) => {
    const newLandfill = await Landfill.create(req.body)
    res.status(201).json({
        "status" : "success",
        "data" : newLandfill
    })
})

const getLandfill = asyncErrorHandler(async (req, res, next) => {
    const { landfillId } = req.params
    const landfill = await Landfill.findById(landfillId)
    if(!landfill){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : landfill
    })
})

const getAllLandfills = asyncErrorHandler(async (req, res, next) => {
    const landfill = await Landfill.find({}).select('-__v')
    res.status(200).json({
        "status" : "success",
        "data" : landfill
    })
})

const deleteLandfill = asyncErrorHandler(async (req, res, next) => {
    const { landfillId } = req.params
    const landfill = await Landfill.findByIdAndDelete(landfillId)
    if(!landfill){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status" : "success",
        "data" : landfill
    })
})

const updateLandfill = asyncErrorHandler(async (req, res, next) => {
    const { landfillId } = req.params
    const landfill = await Landfill.findByIdAndUpdate(landfillId, req.body)
    if(!landfill){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : landfill
    })
})

const entry = asyncErrorHandler(async (req, res, next) => {
    const { landfillId } = req.params
    const doc = await LandfillEntry.create({landfillId, ...req.body})
    res.status(201).json({
        "status" : "success",
        "data" : doc
    })
})

module.exports = {
    getAllLandfills,
    getLandfill,
    createLandfill,
    updateLandfill,
    deleteLandfill,
    entry
}