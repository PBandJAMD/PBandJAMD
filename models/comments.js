const db = require('../lib/dbConnect.js');

function getComments(req, res, next) {
  db.any(`SELECT users.username, comment.id, comment.user_id, comment.date_created, comment.body
          FROM topic
          INNER JOIN comment
          ON topic.id = comment.topic_id
          INNER JOIN users
          ON comment.user_id = users.id
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
           SET body = $2
           WHERE id = $1;`, [req.params.id, req.body.body])
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
