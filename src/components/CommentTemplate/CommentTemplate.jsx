import React from 'react';
import '../normalize.css';
import './CommentTemplate.css';

const CommentTemplate = props => (
  <div className="comment-template">
    <p>Comment: {props.body}</p>
    <p>Date created: {props.date_created}</p>
    <p>Started by user: {props.user_id}</p>
  </div>
);

export default CommentTemplate;
