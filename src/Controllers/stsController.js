const { Sts } = require('../Models') 
const { asyncErrorHandler, CustomError } = require('../Utils')

const createSts = asyncErrorHandler(async (req, res, next) => {
    const newSts = await Sts.create(req.body)
    res.status(201).json({
        "status" : "success",
        "data" : newSts
    })
})

const getSts = asyncErrorHandler(async (req, res, next) => {
    const { stsId } = req.params
    const sts = await Sts.findById(stsId)
    if(!sts){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : sts
    })
})

const getAllStses = asyncErrorHandler(async (req, res, next) => {
    const sts = await Sts.find({}).select('-__v')
    res.status(200).json({
        "status" : "success",
        "data" : sts
    })
})

const deleteSts = asyncErrorHandler(async (req, res, next) => {
    const { stsId } = req.params
    const sts = await Sts.findByIdAndDelete(stsId)
    if(!sts){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(204).json({
        "status" : "success",
        "data" : sts
    })
})

const updateSts = asyncErrorHandler(async (req, res, next) => {
    const { stsId } = req.params
    const sts = await Sts.findByIdAndUpdate(stsId, req.body)
    if(!sts){
        const error = new CustomError("Role with given id is not found", 404)
        return next(error)
    }
    res.status(200).json({
        "status" : "success",
        "data" : sts
    })
})

module.exports = {
    getAllStses,
    getSts,
    createSts,
    updateSts,
    deleteSts
}