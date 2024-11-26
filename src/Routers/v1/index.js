const { Router } = require('express')
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const vehicleRouter = require('./vehicleRouter')
const landfillRouter = require('./landfillRouter')
const stsRouter = require('./stsRouter')
const rbacRouter = require('./rbacRouter')

const router = Router()

router.use("/auth", authRouter)
router.use("/users", userRouter)
router.use("/vehicles", vehicleRouter)
router.use("/landfills", landfillRouter)
router.use("/stses", stsRouter)
router.use("/rbac", rbacRouter)

module.exports = router


