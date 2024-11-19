const { Router } = require('express')
const router = Router()

router.route('/')
    .get((req, res) => res.send('Hello World'))
    .post((req, res) => res.send(req.body))

router.route('/:id')
   .get((req, res) => res.send(req.params.id))
   .put((req, res) => res.send(req.params.id))
   .delete((req, res) => res.send(req.params.id))

router.route('/:id/roles')
  .get((req, res) => res.send(req.params.id))

module.exports = router