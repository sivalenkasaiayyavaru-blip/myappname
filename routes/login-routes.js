const express = require("express")
const router = express.Router()

const login_controller = require("../controller/login-controller")

router.post("/login", login_controller.loginctrl)



module.exports = router;