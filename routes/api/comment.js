const express = require('express');
const commentRoute = express.Router();
const { getComments, addComment, editComment, deleteComment } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

commentRoute.route('/')
  .post(addComment, sendJSONresp);

commentRoute.route('/:id')
   .get(getComments, sendJSONresp)
   .put(editComment, sendJSONresp)
   .delete(deleteComment, sendJSONresp);

module.exports = commentRoute;
