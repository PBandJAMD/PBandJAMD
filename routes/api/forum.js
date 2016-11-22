const express = require('express');
const api = express.Router();

//connecting to 'topics' model
//do we need  updateTopic as well?
const { getAllTopics, addTopic, editTopic, deleteTopic } = require('../../models/topics');

//connecting to 'comments' model
const dbComments = require('../../models/comments');


const sendJSONresp = (req, res) => res.json(res.topics && res.comments || []);

// handle all the routes
api.route('/')
  .get(getAllTopics, sendJSONresp)
  .post(addTopic, sendJSONresp);

api.route('/:id')
  .put(editTopic, sendJSONresp)
  .delete(deleteTopic, sendJSONresp);


module.exports = api;
