const express  = require("express");
const userController = require("../Controllers/users-Controller")

const router = express.Router();


router.route("/candidate").get(userController.candidate);
router.route("/company").get(userController.company);
router.route("/jobs").get(userController.jobs);



module.exports = router;