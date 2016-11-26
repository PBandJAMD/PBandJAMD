const db = require('../lib/dbConnect.js');

function getComments(req, res, next) {
  db.any(`SELECT *
          FROM topic
          LEFT JOIN comment
          ON topic.id = comment.topic_id
          WHERE topic.id= $1;
          `, [req.params.id])
  .then((comments) => {
    res.comments = comments;
    next();
  })
  .catch(err => next(err));
}

function addComment(req, res, next) {
  db.none(`INSERT INTO comment (body, topic_id, user_id)
           VALUES ($/body/, $/topic_id/, $/user_id/);`, req.body)
  .then(next())
  .catch(err => next(err));
}

function editComment(req, res, next) {
  db.none(`UPDATE comment
           SET body = body
           WHERE id = $1;`, [req.body.id])
  .then(next())
  .catch(err => next(err));
}

function deleteComment(req, res, next) {
  db.result(`DELETE FROM comment
             WHERE id = $1;`, req.params.id)
  .then(next())
  .catch(err => next(err));
}

module.exports = {
  getComments,
  addComment,
  editComment,
  deleteComment,
};
