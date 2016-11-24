import React from 'react';
import '../normalize.css';
import './CommentTemplate.css';

const CommentTemplate = props => (
  <div className="comment-template">
    <h3>{props.topic_id}</h3>
    <p>{props.body}</p>
    <p>{props.date_created}</p>
    <p>{props.user_id}</p>
  </div>
);

export default CommentTemplate;
