const User = require("../../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//sigup api
module.exports.create = function (req, res) {
  // console.log(req.body.data);
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      name: req.body.name,
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
      console.log(`password ::: ${req.body.password} and user.password ::: ${user.password}`);
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
};
