const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => {res.send('Hello World')})
    .post((req, res) => {res.send(req.body)})

router.route('/:landfillId')
    .put((req, res) => {res.send(req.body)})
    .delete((req, res) => {res.send(req.body)})

router.route('/:landfillId/entry')
   .post((req, res) => {res.send(req.body)})

router.route('/:landfillId/bill')
   .post((req, res) => {res.send(req.body)})

module.exports = router