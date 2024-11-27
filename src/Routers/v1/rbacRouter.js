const { Router } = require('express')
const { permissionController, roleController } = require('../../Controllers')
const router = Router()

router.route('/roles')
    .get(roleController.getAllRoles)
    .post(roleController.createRole)

router.route('/roles/:roleId')
    .get(roleController.getRole)
    .put(roleController.updateRole)
    .delete(roleController.deleteRole)

router.route('/roles/:roleId/permissions')
    .get((req, res) => res.send('Hello World!'))

router.route('/permissions')
    .get(permissionController.getAllPermissions)
    .post(permissionController.createPermission)

router.route('/permissions/:permisssionId')
    .get(permissionController.getPermission)
    .delete(permissionController.deletePermission)

module.exports = router