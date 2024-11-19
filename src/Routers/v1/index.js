const { Router } = require('express')
const authRouter = require('./authRouter')
const userRouter = require('./userRouter')
const vehicleRouter = require('./vehicleRouter')
const landfillRouter = require('./landfillRouter')
const stsRouter = require('./stsRouter')

const router = Router()

router.use("/auth", authRouter)
router.use("/users", userRouter)
router.use("/vehicles", vehicleRouter)
router.use("/landfills", landfillRouter)
router.use("/stses", stsRouter)

module.exports = router


