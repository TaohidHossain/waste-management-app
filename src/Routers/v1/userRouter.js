const { Router } = require('express')
const { userController, authController } = require('../../Controllers')
const router = Router()

router.route('/')
    .get(authController.protect, authController.hasAccess("user:view"), userController.getAllUsers)

router.route('/:userId')
   .get(authController.protect, authController.hasAccessOrSelfAccess("user:view"), userController.getUser)
   .put(authController.protect, authController.hasAccessOrSelfAccess("user:update"), userController.updateUser)
   .delete(authController.protect, authController.hasAccess("user:delete"), userController.deleteUser)

router.route('/:userId/roles')
    .put(authController.protect, authController.hasAccess("user:role:update"), userController.updateRole)

module.exports = router