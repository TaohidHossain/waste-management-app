const { Router } = require('express')
const router = Router()

router.route('/roles')
    .get((req, res) => res.send('Hello World!'))
router.route('/permissions')
    .get((req, res) => res.send('Hello World!'))
router.route('/roles/:roleId/permissions')
    .get((req, res) => res.send('Hello World!'))

module.exports = router