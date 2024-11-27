const { Router } = require('express')
const { permissionController, role_permissionController, roleController } = require('../../Controllers')
const router = Router()

router.route('/roles')
    .get(roleController.getAllRoles)
    .post(roleController.createRole)

router.route('/roles/:roleId')
    .get(roleController.getRole)
    .put(roleController.updateRole)
    .delete(roleController.deleteRole)

router.route('/roles/:roleId/permissions')
    .get(role_permissionController.findPermissionsByRoleId)

router.route('/permissions')
    .get(permissionController.getAllPermissions)
    .post(permissionController.createPermission)
    
router.route('/role-permission')
    .get(role_permissionController.getAllPermissions)
    .post(role_permissionController.createPermission)

router.route('/role-permission/:permissionId')
    .get(role_permissionController.getPermission)
    .delete(role_permissionController.deletePermission)

router.route('/permissions/:permissionId')
    .get(permissionController.getPermission)
    .delete(permissionController.deletePermission)

module.exports = router