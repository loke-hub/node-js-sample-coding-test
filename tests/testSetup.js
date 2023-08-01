const jwt = require('jsonwebtoken');

const sharedContext = {};

const payload = {
    user: {
      id: '62750c084e998e9194d3e216'
    }
  };
// Generate a JWT token
const token = jwt.sign(payload, 'randomString');

// Assign the token to the shared context
sharedContext.token = token;
// console.log(sharedContext.token);
module.exports = sharedContext;