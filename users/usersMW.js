const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js')

// quickly see what this file exports
module.exports = {
  makejwt
};

function makejwt(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
};