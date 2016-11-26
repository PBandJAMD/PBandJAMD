/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */
const userModel = require('../models/user.js');

/*
 * logIn - Middleware to compare password from login form with password
 *         from the user in the DB. If matches, the user Id is stored in the
 *         session.
 */
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


// *passport strategy from puppies*

// const User = require('../models/user.js');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const JwtStrategy = require('passport-jwt').Strategy;
// // const ExtractJwt    = require('passport-jwt').ExtractJwt;
// const JwtOpts = {};


// JwtOpts.jwtFromRequest = function (req) {
//   let token = null;
//   if (req && req.cookies) {
//     token = req.cookies['jwt_token'];
//   }
//   return token;
// };

// JwtOpts.secretOrKey = process.env.JWT_SECRET;

// // TODO: Not needed?
// // JwtOpts.issuer = "accounts.examplesoft.com";
// // JwtOpts.audience = "yoursite.net";

// passport.use(new JwtStrategy(JwtOpts, (jwtToken, done) => {
//   User.findByUsername(jwtToken.username).then((user) => {
//     if (user) {
//       done(null, user);
//       console.log(user);
//     } else {
//       done(null, false);
//       // or you could create a new account
//     }
//   });
// }));

// passport.use(new LocalStrategy((username, password, done) => {
//   User.findByUsername(username).then((user) => {
//     if (!user) {
//       // If we want to send back flash messages with a description of the error
//       // We would need to install express-flash for this to work

//       // return done(null, false, { message: 'Incorrect username.' });
//       return done(null, false);
//     }

//     if (user.password !== password) {
//       // return done(null, false, { message: 'Incorrect password.' });
//       return done(null, false);
//     }

//     return done(null, user);
//   });
// }));


// module.exports = passport;

