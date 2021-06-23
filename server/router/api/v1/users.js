const express = require("express");
const router = express.Router();

const userApi = require("../../../controller/api/v1/users");

router.post("/signup", userApi.sigup);
router.post("/login", userApi.login);

router.post("/update", userApi.update);
module.exports = router;
