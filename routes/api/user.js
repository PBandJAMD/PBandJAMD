const express = require('express');
const user = express.Router();

//connecting to 'topics' model
//do we need  updateTopic as well?
const { getAllTopics, addTopic, editTopic, deleteTopic } = require('../../models/user');

//connecting to 'comments' model
const dbComments = require('../../models/comments');

const sendJSONresp = (req, res) => res.json(res.topics && res.comments || []);

// handle all the routes
user.route('/')
  .get(getAllTopics, sendJSONresp)
  .post(addTopic, sendJSONresp);

user.route('/:id')
  .put(editTopic, sendJSONresp)
  .delete(deleteTopic, sendJSONresp);


module.exports = user;
