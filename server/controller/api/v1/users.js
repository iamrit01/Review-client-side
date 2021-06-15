const User = require("../../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//sigup api
module.exports.create = function (req, res) {
  // console.log(req.body.data);
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name : req.body.name,
      email: req.body.email,
      password: hash,
    });
    User.findOne({ email: req.body.email })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(401).json({
            message: "user already exits",
          });
        }
        user.save().then((newUser) => {
          if (!newUser) {
            return res.status(500).json({
              message: "error in creating user",
            });
          }
          res.status(201).json({
            message: "user created!",
            newUser: newUser,
          });
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
};

// let body = req.body;
// if (!body) {
//   return res.status(400).json({
//     success: false,
//     error: "you must provide a user",
//   });
// }
// let user = User(body.data);

// if (!user) {
//   return res.status(400).json({
//     success: false,
//     error: err,
//   });
// }

// user
//   .save()
//   .then(() => {
//     return res.status(201).json({
//       success: true,
//       id: user._id,
//       message: "user created",
//     });
//   })
//   .catch((err) => {
//     return res.status(400).json({
//       err,
//       message: "user not created",
//     });
//   });

//login api
module.exports.login = function (req, res) {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "No Such User",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      console.log(fetchedUser);
      if (!result) {
        return res.status(401).json({
          message: "Incorrect password",
        });
      }

      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "!)(@{?:Dwrwa4v64576iugsfdxchqtewyb6p['';eueu6wTDq`394g./phrasdfwyafsdh",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
      });
    })
    .catch((err) => {
      console.log("login err ", err);
      res.status(500).json({
        error: err,
      });
    });

  // console.log(req.body.data.email);
  // User.findOne({ email: req.body.email }, function (err, user) {
  //   if (err) {
  //     return res.status(400).json({
  //       err,
  //       success: false,
  //       message: "error in finding the user",
  //     });
  //   }
  //   if (!user) {
  //     return res.status(401).json({
  //       success: false,
  //       message: "user is not avable in db",
  //     });
  //   }
  //   console.log(user);
  //   return res.redirect("back");
  //   // return res.status(200).json({
  //   //   success: true,
  //   //   message: "user found in the data base",
  //   // });
  // });
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
