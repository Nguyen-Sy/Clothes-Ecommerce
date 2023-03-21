const express = require("express");
const { orderController } = require("../controllers")
const tokenHandler = require("../handlers/token")
const router = express.Router();

router.get("/", orderController.getAll)
router.get("/:userId", orderController.getByUserId)
router.put("/:id", orderController.update)
router.post("/", orderController.create)

module.exports = router;