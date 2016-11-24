const db = require('../db/db.js');

function createUser(req, res, next) {
  db.none(`INSERT INTO user (username, password)
          VALUES ($/username/, $/password/)`, req.body)
    .then(next())
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function findByUsername(username) {
  return db.one(`SELECT *
                FROM user
                WHERE username = $1`, [username]);
}

module.exports = {
  createUser,
  findByUsername,
};
