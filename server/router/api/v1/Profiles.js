const express = require("express");
const router = express.Router();
// const checkAuth = require("../../../middlewares/auth");
const profile_controller = require("../../../controller/api/v1/profiles");

router.post("/viewProfile", profile_controller.viewProfile);

module.exports = router;
