const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
module.exports.timeLine = function (req, res) {
  console.log("hello timeline page ");
  res.send(req.rootUser);
};

// // console.log("view Profile", req);
//
// // console.log("token view Profiel", decodedToken);
// console.log(decodedToken);
// req.userData = {
//   email: decodedToken.email,
//   userId: decodedToken.userId,
//   name: jwt.decode.name,
// };
// if (!req.userData) {
//   return res.status(500).json({
//     message: "unable to decode the user",
//   });
// }
// return res.status(201).json({
//   message: "seccessfully fetch the user details form the token",
//   userData: req.userData,
// });

module.exports.personal = function (req, res) {
  console.log("personal", req);
};
