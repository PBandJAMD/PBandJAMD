'use strict';
require('dotenv').config({ silent: true });
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;
const CommentRoute = require('./routes/api/comment.js');
const TopicRoute = require('./routes/api/topic.js');
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// This will parse our payload from fetch which is sent as a JSON object
app.use(bodyParser.json());
app.use('/api/comments', CommentRoute);
app.use('/api/topics', TopicRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));
