const Post = require("../../../models/posts");
const User = require('../../../models/users ');
module.exports.create = async function (req, res) {
  
  try {
    User.findOne({_id : user})
    let post = await Post.create({
      Description: req.body.description,
      user: req.body.id,
    });
    if (!post) {
      return res.status(500).json({
        message: "post is not create in db",
      });
    }
    console.log("post details ", post);
    return res.status(200).json({
      message: "post is created",
      createdPost: post,
    });
  } catch (err) {
    return res.status(500).json({
      message: "error in create post in schema",
    });
  }
  // console.log("userid ", req);
};
