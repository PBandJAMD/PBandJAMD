/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const userModel = require('../models/user.js');

/*
 * logIn - Middleware to compare password from login form with password
 *         from the user in the DB. If matches, the user Id is stored in the
 *         session.
 */

 // Taken from General Assembly template for user auth project 2. Find source link!!!!******

function logIn(req, res, next) {
  const userPayload = req.body;

  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = userPayload.password === dbUser.password;

    console.log(dbUser.password, matches);

    if (matches) {
      res.user = dbUser;
      // res.hello ='you are logged in!';
      next();
    } else {
      res.error = true;
      next();
    }
  })
      /* NOTE: NO USERS or all ERRORS*/
      .catch((error) => {
        console.error('Error ', error);
        res.error = error;
        next();
      });
}

module.exports = {
  logIn,
};

