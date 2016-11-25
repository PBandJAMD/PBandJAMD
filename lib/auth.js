/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const userModel = require('../models/user.js');

/**
 * logIn - Middleware to compare password from login form with password
 *         from the user in the DB. If matches, the user Id is stored in the
 *         session.
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */
function logIn(req, res, next) {
  const userPayload = req.body;

  console.log(userPayload.password);

  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = userPayload.password === dbUser.password;

    console.log(dbUser.password, matches);

    if (matches) {
      // req.session.userId = dbUser._id;
      res.user = dbUser;
      // res.hello ='you are logged in!';
      next();
    } else {
      res.user = 'Error';
      next();
    }
  });
}


/**
 * authenticate - Middleware to protect routes
 *
 * @param {object} req  request object
 * @param {object} res  response object
 * @param {function} next invoked to continue the response flow
 *
 */

// function authenticate(req, res, next) {
//   if (req.session.userId) {
//     userModel.getUserById(req.session.userId).then((dbUser) => {
//       res.user = dbUser;
//       next();
//     }).catch(() => {
//       res.redirect('/login');
//     });
//   } else {
//     res.redirect('/login');
//   }
// }

module.exports = {
  logIn,
  // authenticate,
};
