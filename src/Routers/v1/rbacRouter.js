const { Router } = require('express')
const permissionController = require('../../Controllers')
const router = Router()

router.route('/roles')
    .get((req, res) => res.send('Hello World!'))
router.route('/permissions')
    .get(permissionController.getAllPermissions)
    .post(permissionController.createPermission)
router.route('/permissions/:id')
    .get(permissionController.getPermission)
router.route('/roles/:roleId/permissions')
    .get((req, res) => res.send('Hello World!'))

module.exports = router