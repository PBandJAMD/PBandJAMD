import React from 'react';
import '../normalize.css';
import './TopicTemplate.css';

const TopicTemplate = props => (
  <div className="topic-template">
    <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
    <h2>{props.title}</h2>
    <p>Description: {props.content}</p>
    <p>Date started: {props.date_created}</p>
    <p>Started by user: {props.user_id}</p>
  </div>

);

export default TopicTemplate;
