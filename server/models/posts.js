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
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("post", postSchema);
