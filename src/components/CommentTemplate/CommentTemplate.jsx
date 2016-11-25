import React from 'react';
import CommentTemplateId from '../CommentTemplateId/CommentTemplateId.jsx';
import '../normalize.css';
import './CommentTemplate.css';

const CommentTemplate = props => (
  <div className="comment-template">
    <h2>{props.topic_id}</h2>
    <p>Comment: {props.body}</p>
    <p>Date created: {props.date_created}</p>
    <p>Started by user: {props.user_id}</p>
  </div>
);

export default CommentTemplate;
