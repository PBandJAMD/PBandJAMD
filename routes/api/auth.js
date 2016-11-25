/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express    = require('express');
const { logIn }  = require('../../lib/auth.js');

// Router
const authRoute = express.Router();

authRoute.get('/', (req, res) => {
  res.json('hello');
});

/**
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */
authRoute.post('/', logIn, (req, res) => {
  res.json(res.user);
});

// Logout by assigning null to the userId in the session
// authRoute.delete('/', (req, res) => {
//   req.session.userId = null;
//   res.redirect('/');
// });

module.exports = authRoute;
