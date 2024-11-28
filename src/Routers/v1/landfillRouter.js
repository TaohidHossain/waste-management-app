const { Router } = require('express')
const { landfillController, authController } = require('../../Controllers')
const router = Router()

router.route('/')
    .get(authController.protect, authController.hasAccess("landfill:view"), landfillController.getAllLandfills)
    .post(authController.protect, authController.hasAccess("landfill:create"), landfillController.createLandfill)

router.route('/:landfillId')
    .get(authController.protect, authController.hasAccess("landfill:view"), landfillController.getLandfill)
    .put(authController.protect, authController.hasAccess("landfill:update"), landfillController.updateLandfill)
    .delete(authController.protect, authController.hasAccess("landfill:delete"), landfillController.deleteLandfill)

router.route('/:landfillId/entry')
   .post(authController.protect, authController.hasAccess("landfill:entry"), (req, res) => {res.send(req.body)})

router.route('/:landfillId/bill')
   .post(authController.protect, authController.hasAccess("landfill:bill"), (req, res) => {res.send(req.body)})

module.exports = router