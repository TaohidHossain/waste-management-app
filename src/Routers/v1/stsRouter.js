const { Router } = require('express')
const { stsController } = require('../../Controllers')
const router = Router()

router.route('/')
    .get(stsController.getAllStses)
    .post(stsController.createSts)

router.route('/:stsId')
    .get(stsController.getSts)
    .put(stsController.updateSts)
    .delete(stsController.deleteSts)

router.route('/:stsId/entry')
   .post((req, res) => {res.send(req.body)})

module.exports = router