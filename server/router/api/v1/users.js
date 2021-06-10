const express = require("express");
const router = express.Router();

const userApi = require("../../../controller/api/v1/users");

router.post("/create", userApi.create);

module.exports = router;
