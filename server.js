'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const commentRoute = require('./routes/api/comment.js');
const topicRoute = require('./routes/api/topic.js');
const userRoute = require('./routes/api/user.js');

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());
app.use('/comment', commentRoute);
app.use('/topic', topicRoute);
// app.use('/user', userRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));
