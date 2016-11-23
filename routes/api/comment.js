const express = require('express');
const comment = express.Router();
const { getAllComment, addComment, editComment, deleteComment } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

comment.route('/')
  .get(getAllComment, sendJSONresp)
  .post(addComment, sendJSONresp);

comment.route('/:id')
   .put(editComment, sendJSONresp)
   .delete(deleteComment, sendJSONresp);


module.exports = comment;
