/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const db = require('../lib/dbConnect.js');

function createUser(req, res, next) { // makes a new user upon signup page
  const userObject = {
    username: req.body.user.username,

    // Store hashed password
    password: req.body.user.password,
  };

  db.none(`INSERT INTO user (username, password)
          VALUES ($/username/, $/password/);`, userObject)
    .then(next())
    .catch(err => next(err));
}


function getUserById(id) {
  return (db) => {

    const promise = new Promise((resolve, reject) => {


      db.collection('users')
        .findOne({ _id: ObjectID(id) }, (findError, user) => {
          if (findError) reject(findError);
          db.close();
          resolve(user);
        });
    });



    return promise;
  };
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
