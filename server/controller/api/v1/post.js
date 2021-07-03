const Post = require("../../../models/posts");
const User = require("../../../models/users");
module.exports.create = async function (req, res) {
  try {
    await User.findOne({ _id: req.body.id }, function (err, user) {
      if (err) {
        return res.status(401).json({
          message: "error occure while finding the user in the db",
          error: err,
        });
      }
      if (!user) {
        return res.status(401).json({
          message: "user is not avable in db",
        });
      }
      let post = Post.create({
        Description: req.body.description,
        user: req.body.id,
        likes: 0,
        dislikes: 0,
      }).then((post) => {
        if (!post) {
          return res.status(500).json({
            message: "post is not create in db",
          });
        }
        console.log("post details ", post);
        return res.status(200).json({
          message: "post is created",
          post: post,
        });
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: "error in create post in schema",
    });
  }
};

module.exports.getCollection = async function (req, res) {
  let posts = await Post.find({}).sort("-createdAt").populate("user");
  return res.status(200).json({
    message: "first try buddy ",
    Data: posts,
  });
};

//update like count in db
module.exports.like = function (req, res) {
  Post.updateOne({
    likes: req.body.likes + 1,
  });
};
