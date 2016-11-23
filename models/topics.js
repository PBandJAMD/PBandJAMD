const db = require('../db/db.js');

// displaying all topics
function getAllTopics(req, res, next) {
  db.any('SELECT * FROM topic;')
    .then((topics) => {
      res.topics = topics;
      console.log(res.topics);
      next();
    });
}

// adding one topic
function addTopic(req, res, next) {
  db.one(`INSERT INTO topic (title, content)
          VALUES ($1, $2);`, [req.body.title, req.body.content])
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
