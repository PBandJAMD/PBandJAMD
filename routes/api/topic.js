const express = require('express');
const topic = express.Router();
const { getAllTopics, addTopic, editTopic, deleteTopic } = require('../../models/topics.js');
const sendJSONresp = (req, res) => res.json(res.topics || []);

topic.route('/')
   .get(getAllTopics, sendJSONresp)
   .post(addTopic, sendJSONresp);

topic.route('/:id')
   .put(editTopic, deleteTopic)
   .delete(deleteTopic, sendJSONresp);

module.exports = topic;
