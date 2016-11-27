const express = require('express');
const { logIn } = require('../../lib/passportStrategy.js');

const authRoute = express.Router();

authRoute.get('/', (req, res) => {
  res.json('hello');
});

// Login function with uses the logIn middleware
authRoute.post('/', logIn, (req, res) => {
  res.json(res.user);
});

// Logout by assigning null to the userId in the session
authRoute.delete('/', (req, res) => {
  res.json('youre logged out');
});

module.exports = authRoute;
