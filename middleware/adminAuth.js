module.exports = function authorizationCheck(req, res, next) {
    if (!req.user.isAdmin) { 
     return res.sendStatus(401);
    } else {
      // move to the next middleware, cause it's ok
      next();
    } 
  };

  module.exports = function authorizationCheck(req, res, next) {
    if (!req.user.isSeller) { 
     return res.sendStatus(401);
    } else {
      // move to the next middleware, cause it's ok
      next();
    } 
  };
