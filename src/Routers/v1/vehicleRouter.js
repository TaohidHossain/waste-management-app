const { Router } = require('express')
const { vehicelController } = require('../../Controllers')
const router = Router()


router.route('/')
    .get(vehicelController.getAllVehicles)
    .post(vehicelController.createVehicle)

router.route('/:vehicleId')
    .get(vehicelController.getVehicle)
    .put(vehicelController.updateVehicle)
    .delete(vehicelController.deleteVehicle)

module.exports = router