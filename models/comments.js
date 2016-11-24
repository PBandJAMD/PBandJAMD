const db = require('../lib/dbConnect.js');

function getAllComment(req, res, next) {
  db.any(`SELECT *
          FROM comment
          INNER JOIN topic
          ON comment.topic_id = topic.id
          WHERE topic.id =;`)
  .then((comments) => {
    res.comments = comments;
    next();
  })
  .catch(err => next(err));
}

function addComment(req, res, next) {
  db.none(`INSERT INTO comment (body)
           VALUES ($1);`, [req.body.body])
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
  getAllComment,
  addComment,
  editComment,
  deleteComment,
};
