const jwt = require("jsonwebtoken");
const User = require("../models/users");
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verfiyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verfiyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized : No token provided");
    console.log(err);
  }
};
module.exports = auth;

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verfiy(
//       token,
//       "!)(@{?:Dwrwa4v64576iugsfdxchqtewyb6p['';eueu6wTDq`394g./phrasdfwyafsdh"
//     );
//     req.userData = { email: decodedToken.email, userId: decodedToken.userID };
//     console.log("server side decoding ", req.userData);
//     next();
//   } catch (e) {
//     res.status(401).json({
//       message: "Auth failed",
//     });
//   }
// };
