const express = require("express");

const router = express.Router();
// const passport = require("passport");
const auth = require("../../../middlewares/auth");
const postController = require("../../../controller/api/v1/post");
// passport.checkAuthentication,
router.post("/create", auth, postController.create);
router.get("/viewPosts", postController.getCollection);
router.post("/like", auth, postController.like);
router.post("/dislike", auth, postController.dislike);
router.delete("/delete", auth, postController.delete);
module.exports = router;
