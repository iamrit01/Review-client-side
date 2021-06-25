const express = require("express");
const router = express.Router();
// const checkAuth = require("../../../middlewares/auth");
const profile_controller = require("../../../controller/api/v1/profiles");

router.post("/timeline", profile_controller.timeLine);
router.get("/profile", profile_controller.personal);
module.exports = router;
