const express = require('express');
const router = express.Router();

const sendJSONresp = (req, res) => res.json(res.example);

// handle all the routes
api.route('/')
  .get(sendJSONresp)
  .post(sendJSONresp);

api.route('/:id')
  .put(sendJSONresp)
  .delete(sendJSONresp);

module.exports = api;
