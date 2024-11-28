const { Router } = require('express')
const { authController } = require('../../Controllers')
const router = Router()

router.route('/signup')
    .post(authController.signup)

router.route('/login')
    .post(authController.login)

router.route('/logout')
    .post((req, res) => res.send('Logout'))

// route for forgot password
router.route('/reset-password/initiate')
    .post((req, res) => res.send('reset password initiate'))

router.route('/reset-password/confirm')
    .post((req, res) => res.send('reset-password confirm'))

router.route('/change-password')
    .post((req, res) => res.send('Change Password'))

module.exports = router