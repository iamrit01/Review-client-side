const express = require("express");
const router = express.Router();

const profile_controller = require("../../../controller/api/v1/profiles");

router.get("/viewProfile", profile_controller.viewProfile);

module.exports = router;
