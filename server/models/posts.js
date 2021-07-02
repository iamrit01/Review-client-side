const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    Description: {
      type: String,
      require: true,
    },
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("post", postSchema);
