const db = require('../db/db');

function getAllComments(req, res, next) {
  db.any(`SELECT *
          FROM comment;`)
  .then((x) => {
    res.comments = x;
    next();
  })
  .catch(err => next(err));
}

function addComment(req, res, next) {
  db.none(`INSERT INTO comment (topic_id, user_id, body)
           VALUES ($/topic_id/, $/user_id/, $/body/);`, req.body)
  .then(() => {
    console.log('added');
    next();
  })
  .catch(err => next(err));
}

function editComment(req, res, next) {
  db.none(`UPDATE comment
           SET body = $/body/
           WHERE id = $/id/`, req.body)
  .then(() => {
    console.log('edited');
    next();
  })
  .catch(err => next(err));
}

function deleteComment(req, res, next) {
  db.result(`DELETE FROM comment
             WHERE id = $/id/`, req.params)
  .then(() => {
    console.log('deleted');
    next();
  })
  .catch(err => next(err));
}

module.exports = {
  getAllComments,
  addComment,
  editComment,
  deleteComment,
};
