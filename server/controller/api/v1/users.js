const User = require("../../../models/users");

module.exports.create = function (req, res) {
  // console.log(req.params);

  let body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide a user",
    });
  }
  let user = User(body);
  // console.log(req.body);
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

module.exports.login = function (req, res) {
  console.log(req.body.email);
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return res.status(400).json({
        err,
        success: false,
        message: "error in finding the user",
      });
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user is not avable in db",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user found in the data base",
    });
  });
};



