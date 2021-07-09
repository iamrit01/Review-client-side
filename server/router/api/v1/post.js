const express = require("express");

const router = express.Router();
const passport = require("passport");

const postController = require("../../../controller/api/v1/post");
// passport.checkAuthentication,
router.post("/create", postController.create);
router.get("/viewPosts", postController.getCollection);
router.post("/like", postController.like);
module.exports = router;