const { Router } = require('express')
const { landfillController } = require('../../Controllers')
const router = Router()

router.route('/')
    .get(landfillController.getAllLandfills)
    .post(landfillController.createLandfill)

router.route('/:landfillId')
    .get(landfillController.getLandfill)
    .put(landfillController.updateLandfill)
    .delete(landfillController.deleteLandfill)

router.route('/:landfillId/entry')
   .post((req, res) => {res.send(req.body)})

router.route('/:landfillId/bill')
   .post((req, res) => {res.send(req.body)})

module.exports = router