import React from 'react';
import '../normalize.css';
import './CommentTemplate.css';
import trash from './delete.png';
import edit from './edit.png';

const CommentTemplate = props => (
  <div className="comment-template">
    <p>{props.body}</p>
    <p>Date created: {props.date_created}</p>
    <p>User: {props.username}</p>
    <img
      id={props.deleteButton()}
      src={trash}
      alt="delete"
      height="40"
      width="40"
      onClick={() => props.deleteComment(props.id)}
    />

    <img
      id={props.deleteButton()}
      src={edit}
      alt="edit"
      height="40"
      width="40"
      onClick={() => props.changeComponent(2, props.currentTopic, props.body, props.id)}
    />

  </div>
);

export default CommentTemplate;
