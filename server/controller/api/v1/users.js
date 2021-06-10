const User = require("../../../models/users");

module.exports.create = function (req, res) {

  console.log(req.params);

  let body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide a user",
    });
  }
  let user = User(body);
  console.log(req.body);
  if (!user) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "user created",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        err,
        message: "user not created",
      });
    });
};
