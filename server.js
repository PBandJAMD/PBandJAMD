'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const jwt = require('express-jwt');

const commentRoute = require('./routes/api/comment.js');
const topicRoute = require('./routes/api/topic.js');
const authRoute = require('./routes/api/auth.js');

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api/comment', commentRoute);
app.use('/api/topic', topicRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));
