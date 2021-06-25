const express = require("express");
const router = express.Router();

const postController = require("../../../controller/api/v1/post");

router.post("/create", postController.create);

module.exports = router;
