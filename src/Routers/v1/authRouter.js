const { Router } = require('express')
const router = Router()

router.route('/login')
    .post((req, res) => res.send('Login'))

router.route('/logout')
    .post((req, res) => res.send('Logout'))

router.route('/reset-password/initiate')
    .post((req, res) => res.send('reset password initiate'))

router.route('/reset-password/confirm')
    .post((req, res) => res.send('reset-password confirm'))

router.route('/change-password')
    .post((req, res) => res.send('Change Password'))

module.exports = router