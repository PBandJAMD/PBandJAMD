/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const db = require('../lib/dbConnect.js');

function createUser(req, res, next) { // makes a new user upon signup page
  const userObject = {
    username: req.body.username,

    // Store hashed password
    password: req.body.password,
  };

  db.none(`INSERT INTO users (username, password)
          VALUES ($/username/, $/password/);`, userObject)
    .then(next())
    .catch(err => next(err));
}

function listUsers(req, res, next) {
  db.any('SELECT * from users;')
    .then((users) => {
      res.users = users;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

// function getUserById(id) {
//   return (db) => {

//     const promise = new Promise((resolve, reject) => {


//       db.collection('users')
//         .findOne({ _id: ObjectID(id) }, (findError, user) => {
//           if (findError) reject(findError);
//           db.close();
//           resolve(user);
//         });
//     });


//     return promise;
//   };
// }

function getUserByUsername(username) {
  return db.one('SELECT * FROM users WHERE username = $1', [username]);
}

function getUserInfo(req, res, next) {
  db.any(`SELECT topic.id, topic.date_created, topic.title, topic.content
          FROM users
          INNER JOIN topic
          ON users.id = topic.user_id
          WHERE users.id= $1;
          `, [req.params.id])
  .then((info) => {
    res.info = info;
    next();
  })
  .catch(err => next(err));
}


module.exports = {
  createUser,
  listUsers,
  // getUserById,
  getUserInfo,
  getUserByUsername,
};
