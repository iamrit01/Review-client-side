const User = require("../../../models/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

//sigup api
module.exports.sigup = async function (req, res) {
  console.log("request from signup page :: ", req);
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    return res.status(422).json({
      error: "please filled the field properly",
    });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({
        error: "Email already Exist",
      });
    } else if (password !== confirmPassword) {
      return res.status(422).json({
        error: "Password are not matching",
      });
    } else {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({
        message: "User registred successfully",
      });
    }

    // if (req.body.password != req.body.confirmPassword) {
    //   return res.json(401, {
    //     message: "password is not match",
    //   });
    // }
    // let user = await User.findOne({ email: req.body.email });
    // if (!user) {
    //   User.create(req.body, function (err, user) {
    //     if (err) {
    //       return res.json(500, {
    //         message: "error in creating user while signing up",
    //       });
    //     }
    //     return res.json(200, {
    //       message: "user Created",
    //     });
    //   });
    // } else {
    //   return res.json(200, {
    //     message: "user is already present",
    //   });
    // }
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
      error: err,
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
    // res.cookie("jwt", token, {
    //   expires: new Date(Date.now() + 50000),
    //   httpOnly: true,
    // });

    const token = jwt.sign(user.toString(), dotenv.parsed.SECRET_KEY);
    // token: jwt.sign(user.toJSON(), dotenv.parsed.SECRET_KEY, {
    //       expiresIn: "100000",
    //     }),
    // console.log("token ", cookies);
    res.cookie("jwt", token);

    console.log("cookies ", res.cookie);
    return res.json(200, {
      message: "sign in successfully , here is you token keep is safe buddy",
      token,
    });
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
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
