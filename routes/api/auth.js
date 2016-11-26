/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express    = require('express');
const { logIn }  = require('../../lib/passportStrategy.js');

// Router
const authRoute = express.Router();

authRoute.get('/', (req, res) => {
  res.json('hello');
});

//  * Log In and if successful assign res.user._id to the session
//  * It uses the logIn middleware from the auth library to parse the form inputs
//  * and save the user to the database

authRoute.post('/', logIn, (req, res) => {
  res.json(res.user);
});

// Logout by assigning null to the userId in the session
authRoute.delete('/', (req, res) => {
  res.redirect('/');
});

module.exports = authRoute;

// *PASSPORT STRATEGY*

// const express = require('express');
// const jwt = require('jsonwebtoken');
// const passport = require('../../lib/passportStrategy.js');

// const authRoute = express.Router();

// // initialize passport
// authRoute.use(passport.initialize());

// // handle all the routes
// authRoute.post('/', passport.authenticate('local', { session: false }), (req, res) => {
//   const token = jwt.sign(req.user, process.env.JWT_SECRET, {
//     expiresIn: 86400, // expires in 24 hours
//   });
//   res.json({ token });
// });

// module.exports = authRoute;
