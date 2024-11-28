const { Router } = require('express')
const { vehicelController, authController } = require('../../Controllers')
const router = Router()


router.route('/')
    .get(authController.protect, authController.hasAccess("vehicle:view"), vehicelController.getAllVehicles)
    .post(authController.protect, authController.hasAccess("vehicle:create"), vehicelController.createVehicle)

router.route('/:vehicleId')
    .get(authController.protect, authController.hasAccess("vehicle:view"), vehicelController.getVehicle)
    .put(authController.protect, authController.hasAccess("vehicle:update"), vehicelController.updateVehicle)
    .delete(authController.protect, authController.hasAccess("vehicle:delete"), vehicelController.deleteVehicle)

module.exports = router