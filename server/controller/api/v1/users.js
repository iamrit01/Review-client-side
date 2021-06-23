const User = require("../../../models/users");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//sigup api
module.exports.sigup = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.json(401, {
        message: "password is not match",
      });
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          return res.json(500, {
            message: "error in creating user while signing up",
          });
        }
        return res.json(200, {
          message: "user Created",
        });
      });
    } else {
      return res.json(200, {
        message: "user is already present",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

//login api
module.exports.login = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid Email / Passwrod",
      });
    }
    return res.json(200, {
      message: "sign in successfully , here is you token keep is safe buddy",
      data: {
        token: jwt.sign(user.toJSON(), dotenv.parsed.SECRET_KEY, {
          expiresIn: "100000",
        }),
      },
    });
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }

  // let fetchedUser;
  // User.findOne({ email: req.body.email })
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(401).json({
  //         message: "No Such User",
  //       });
  //     }
  //     fetchedUser = user;
  //     return bcrypt.compare(req.body.password, user.password);
  //   })
  //   .then((result) => {
  //     console.log(fetchedUser);
  //     if (!result) {
  //       return res.status(401).json({
  //         message: "Incorrect password",
  //       });
  //     }
  //     const token = jwt.sign(
  //       { email: fetchedUser.email, userId: fetchedUser._id },
  //       "!)(@{?:Dwrwa4v64576iugsfdxchqtewyb6p['';eueu6wTDq`394g./phrasdfwyafsdh",
  //       { expiresIn: "1h" }
  //     );
  //     res.status(200).json({
  //       token: token,
  //       expiresIn: 3600,
  //       userId: fetchedUser._id,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log("login err ", err);
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });
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
