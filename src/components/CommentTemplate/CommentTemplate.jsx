import React from 'react';
import '../normalize.css';
import './CommentTemplate.css';
import trash from './delete.png';

const CommentTemplate = props => (
  <div className="comment-template">
    <p>Comment: {props.body}</p>
    <p>Date created: {props.date_created}</p>
    <p>User: {props.username}</p>
    <img
      id={props.deleteButton()}
      src={trash}
      alt="delete"
      height="40"
      width="40"
      onClick={() => { props.deleteComment(props.id) }}
    />

  </div>
);

export default CommentTemplate;
