const express = require("express");
const router = express.Router();

const userApi = require("../../../controller/api/v1/users");
const auth = require("../../../middlewares/auth");
router.post("/signup", userApi.sigup);
router.post("/login", userApi.login);

router.post("/update", auth, userApi.update);
module.exports = router;
