const { Router } = require('express')
const { permissionController, role_permissionController, roleController, authController } = require('../../Controllers')
const router = Router()

router.route('/roles')
    .get(authController.protect, authController.hasAccess("role:view"), roleController.getAllRoles)
    .post(authController.protect, authController.hasAccess("role:create"), roleController.createRole)

router.route('/roles/:roleId')
    .get(authController.protect, authController.hasAccess("role:view"), roleController.getRole)
    .put(authController.protect, authController.hasAccess("role:update"), roleController.updateRole)
    .delete(authController.protect, authController.hasAccess("role:delete"), roleController.deleteRole)

router.route('/roles/:roleId/permissions')
    .get(authController.protect, authController.hasAccess("role:permission"), role_permissionController.findPermissionsByRoleId)

router.route('/permissions')
    .get(authController.protect, authController.hasAccess("permission:view"), permissionController.getAllPermissions)
    .post(authController.protect, authController.hasAccess("permission:create"), permissionController.createPermission)
    
router.route('/role-permission')
    .get(authController.protect, authController.hasAccess("role-permission:view"), role_permissionController.getAllPermissions)
    .post(authController.protect, authController.hasAccess("role-permission:create"), role_permissionController.createPermission)

router.route('/role-permission/:permissionId')
    .get(authController.protect, authController.hasAccess("role-permission:view"), role_permissionController.getPermission)
    .delete(authController.protect, authController.hasAccess("role-permission:delete"), role_permissionController.deletePermission)

router.route('/permissions/:permissionId')
    .get(authController.protect, authController.hasAccess("permission:view"), permissionController.getPermission)
    .delete(authController.protect, authController.hasAccess("permission:delete"), permissionController.deletePermission)

module.exports = router