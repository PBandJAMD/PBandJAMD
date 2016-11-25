const express = require('express');
const commentRoute = express.Router();
const { getAllComment, getComment, addComment, editComment, deleteComment } = require('../../models/comments');
const sendJSONresp = (req, res) => res.json(res.comments || []);

commentRoute.route('/')
  .get(getAllComment, sendJSONresp)
  .post(addComment, sendJSONresp);

commentRoute.route('/:id')
   .get(getComment, sendJSONresp)
   .put(editComment, sendJSONresp)
   .delete(deleteComment, sendJSONresp);

module.exports = commentRoute;
