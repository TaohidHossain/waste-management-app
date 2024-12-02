const { Router } = require('express')
const { stsController, authController } = require('../../Controllers')
const router = Router()

router.route('/')
    .get(authController.protect, authController.hasAccess("sts:view"), stsController.getAllStses)
    .post(authController.protect, authController.hasAccess("sts:create"), stsController.createSts)

router.route('/:stsId')
    .get(authController.protect, authController.hasAccess("sts:view"), stsController.getSts)
    .put(authController.protect, authController.hasAccess("sts:upadte"), stsController.updateSts)
    .delete(authController.protect, authController.hasAccess("sts:delete"), stsController.deleteSts)

router.route('/:stsId/entry')
    .post(authController.protect, authController.hasAccess("sts:entry"), stsController.entry)

router.route('/:stsId/managers')
    .get(authController.protect, stsController.getManagers)
    .post(authController.protect, stsController.assignManager)

module.exports = router