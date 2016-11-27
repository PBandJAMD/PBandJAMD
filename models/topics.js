const db = require('../lib/dbConnect.js');

// displaying all topics
function getAllTopics(req, res, next) {
  db.any(`SELECT topic.id, topic.title, topic.content, users.username, topic.date_created
          FROM topic
          INNER JOIN users
          ON topic.user_id = users.id
          ORDER BY topic.date_created DESC;`)
    .then((topics) => {
      res.topics = topics;
      next();
    })
    .catch(err => next(err));
}

// adding one topic
function addTopic(req, res, next) {
  db.none(`INSERT INTO topic (title, content, user_id)
          VALUES ($1, $2, $3);`, [req.body.title, req.body.content, req.body.user_id])
    .then(next())
    .catch(err => next(err));
}

// updating one topic
function editTopic(req, res, next) {
  db.none(`UPDATE topic
            SET title = $1, console = $2
            WHERE id = $1`, [req.body.title, req.body.content])
   .then(next())
   .catch(err => next(err));
}


// deleting one topic
function deleteTopic(req, res, next) {
  db.none(`DELETE FROM topic WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
}


module.exports = {
  getAllTopics,
  addTopic,
  editTopic,
  deleteTopic,
};
