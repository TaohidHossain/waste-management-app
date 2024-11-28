const { Router } = require('express')
const { userController } = require('../../Controllers')
const router = Router()

router.route('/')
    .get(userController.getAllUsers)

router.route('/:userId')
   .get(userController.getUser)
   .put(userController.updateUser)
   .delete(userController.deleteUser)
   

module.exports = router