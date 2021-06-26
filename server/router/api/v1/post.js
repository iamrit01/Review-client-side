const express = require("express");

const router = express.Router();
const passport = require("passport");

const postController = require("../../../controller/api/v1/post");
// passport.checkAuthentication,
router.post("/create",  postController.create);

module.exports = router;
