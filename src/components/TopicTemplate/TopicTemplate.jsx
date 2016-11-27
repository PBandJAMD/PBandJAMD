import React from 'react';
import '../normalize.css';
import './TopicTemplate.css';

const TopicTemplate = props => (
  <div className="topic-template">
    <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
    <h1>{props.title}</h1>
    <h3>{props.content}</h3>
    <p>{props.date_created}</p>
    <p>Started by user: {props.username}</p>
    <button onClick={() => props.changeComponent(1, props.id)}>Click Me!</button>

  </div>

);

export default TopicTemplate;
