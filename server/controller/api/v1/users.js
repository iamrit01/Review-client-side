const User = require("../../../models/users");

//sigup api
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

//login api
module.exports.login = function (req, res) {
  console.log(req.body.data);
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

//update user details api
module.exports.update = function (req, res) {
  console.log(req);
  let body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      message: "You must provide a body for update",
    });
  }
  // console.log(req);
  // User.findOne({ _id: req.params.id }, function (err, user) {

  //   if (err) {
  //     return res.status(404).json({
  //       success: false,
  //       message: "user not found",
  //     });
  //   }
  //   console.log(`User Email id : ${user}`);
  //   if (user.email === body.email ) {
  //     user.name = body.name;
  //     user.email = body.email;
  //     user.password = body.password;
  //   }

  //   user
  //     .save()
  //     .then(() => {
  //       return res.status(200).json({
  //         success: true,
  //         message: "user details is updated",
  //       });
  //     })
  //     .catch((err) => {
  //       return res.status(404).json({
  //         err,
  //         success: false,
  //         message: "user details not update",
  //       });
  //     });
  // });
};
