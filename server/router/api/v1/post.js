const express = require("express");

const router = express.Router();
// const passport = require("passport");
const auth = require("../../../middlewares/auth");
const postController = require("../../../controller/api/v1/post");
// passport.checkAuthentication,
router.post("/create", postController.create);
router.get("/viewPosts", postController.getCollection);
router.post("/like", postController.like);
router.post("/dislike", postController.dislike);
router.delete("/delete", postController.delete);
module.exports = router;
