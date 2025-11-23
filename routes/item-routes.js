const express = require("express")
const router = express.Router()

const item_controller = require("../controller/item-controller")

router.post("/items", item_controller.itemsctrl)
router.post("/measurements", item_controller.measurementctrl)
router.post("/submitItems", item_controller.submitItemsctrl)

router.post("/getOrdersByMonth", item_controller.getOrdersByMonthctrl)

module.exports = router;