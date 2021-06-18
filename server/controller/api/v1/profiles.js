const jwt = require("jsonwebtoken");
module.exports.viewProfile = function (req, res) {
  // console.log("view Profile", req);
  const token = req.headers.authorization.split(" ")[1];

  const decodedToken = jwt.decode(
    token,
    "!)(@{?:Dwrwa4v64576iugsfdxchqtewyb6p['';eueu6wTDq`394g./phrasdfwyafsdh"
  );
  // console.log("token view Profiel", decodedToken);
  req.userData = {
    email: decodedToken.email,
    userId: decodedToken.userId,
    name: jwt.decode.name,
  };

  if (!req.userData) {
    return res.status(500).json({
      message: "unable to decode the user",
    });
  }
  return res.status(201).json({
    message: "seccessfully fetch the user details form the token",
    userData: req.userData,
  });
};

module.exports.personal = function (req, res) {
  console.log("personal", req);
};
