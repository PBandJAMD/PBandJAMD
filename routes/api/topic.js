const express = require('express');
const router = express.Router();
const { getAllTopics } = require('../../models/topics.js')

router.get('/', getAllTopics, (req, res) =>{
  res.json(res.topics || []);
})


module.exports = router;
