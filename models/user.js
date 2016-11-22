const db = require('../db/db');
const bcrypt = require('bcryptjs');

const SALTROUNDS = 10;

function createUser(req, res, next) { // makes a new user upon signup page
  const userObject = {
    username: req.body.user.username,

    // Store hashed password
    password: bcrypt.hashSync(req.body.user.password, SALTROUNDS),
  };

  db.none(`INSERT INTO user (username, password)
           VALUES ($/username/, $/password/);`, userObject)
  .then((x) => {
    console.log(x);
    next();
  })
  .catch(err => next(err));

  // getDB().then((db) => {
  //   db.collection('users')
  //     .insert(userObject, (insertErr, dbUser) => {
  //       if (insertErr) return next(insertErr);

  //       res.user = dbUser;
  //       db.close();
  //       return next();
  //     });
  // });
}

function getUserById(id) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
        .findOne({ _id: ObjectID(id) }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

function getUserByUsername(username) {
  return getDB().then((db) => {
    const promise = new Promise((resolve, reject) => {
      db.collection('users')
        .findOne({ username }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });
    return promise;
  });
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
};
