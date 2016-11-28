import React from 'react';
import '../normalize.css';
import './TopicTemplate.css';

const TopicTemplate = props => (
  <div className="topic-template">
    <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
<<<<<<< HEAD
    <h2>{props.title}</h2>
    <p>Description: {props.content}</p>
    <p>Date started: {props.date_created}</p>
    <p>Started by user: {props.user_id}</p>
    <button onClick={() => props.changeComponent(1, props.id)}>Learn More!</button>
=======
    <h1 id="topicTitle">{props.title}</h1>
    <br />
    <h3 id="topicContent">{props.content}</h3>
    <br />
    <br />
    <p id="topicDate">{props.date_created}</p>
    <p id="topicUser">Started by user: <span>{props.username}</span></p>
    <br />
    <button id="topicButton"onClick={() => props.changeComponent(1, props.id)}>Click to See More!</button>
>>>>>>> master

  </div>

);

export default TopicTemplate;
