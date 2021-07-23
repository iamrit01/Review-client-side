const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  // console.log("--------> ", process.env.SECRET_KEY);
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    console.log(token);
    return token;
  } catch (err) {
    console.log("error while generating the auth token ", err);
  }
};

module.exports = mongoose.model("user", userSchema);
