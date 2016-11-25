import React from 'react';
import CommentTemplate from '../CommentTemplate/CommentTemplate.jsx';
import './CommentContainer.css';

const CommentContainer = props => (
  <div id="comment-template">
    <button onClick={() => props.changeComponent(0)}>Click to return!</button>
  </div>
);

export default CommentContainer;
