const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verfiy(
      token,
      "!)(@{?:Dwrwa4v64576iugsfdxchqtewyb6p['';eueu6wTDq`394g./phrasdfwyafsdh"
    );
    req.userData = { email: decodedToken.email, userId: decodedToken.userID };
    next();
  } catch (e) {
    res.status(401).json({
      message: "Auth failed",
    });
  }
};
