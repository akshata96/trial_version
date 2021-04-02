const jwt = require("jsonwebtoken");
const config = require("./config/key.config.js");


verifyToken = (req, res, next) => {
  var token = req.headers["token"];
  if(!token)
  {
    token = req.body.token;
  }
 console.log("token " + token);
  if (!token) {
    return res.send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    console.log("DEC "+ decoded.id);
    next();
  });
};

verifyResetToken = (req, res, next) => {
  let token = req.query.resetPasswordToken
 console.log("Reset token " + token);

 if(!token)
 {
   token = req.body.token;
 }

  if (!token) {
    return res.send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    console.log("DEC "+ decoded.id);
  
    next();
  });
};




const authJwt = {
  verifyToken: verifyToken,
  verifyResetToken: verifyResetToken
};
module.exports = authJwt;
