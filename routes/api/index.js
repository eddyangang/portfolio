const router = require("express").Router();
const controller = require("../../controller")
//Get routes
router.get("/projects", controller.findAll);

module.exports = router;