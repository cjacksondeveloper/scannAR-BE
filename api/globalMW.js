const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js')

module.exports = {
    authenticate,
  };

// implementation details
function authenticate(req, res, next) {
    const token = req.get('Authorization');
  
    if (token) {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'The token provided is not valid' });
        req.decoded = decoded;
        next();
      });
    } else {
      return res.status(401).json({
        error: 'No token provided, must be set on the Authorization Header',
      });
    }
  }

  function checkId(role) {
    return (req, res, next) => {
      if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
        next();
      } else {
        res.status(403).json({ message: 'You do not have high enough security clearance'})
      }
    }
  }