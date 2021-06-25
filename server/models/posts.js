const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
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
