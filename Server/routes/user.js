const router = require("express").Router();
const tokenHandler = require("../handlers/token");
const { userController } = require("../controllers");

router.post("/:id", userController.update);
router.post("/verify", userController.verify)
router.post("/author", userController.authorize)
router.get("/:id", userController.getById)

module.exports = router;