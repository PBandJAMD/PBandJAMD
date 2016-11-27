import React from 'react';
import CommentTemplate from '../CommentTemplate/CommentTemplate.jsx';
import CreateCommentForm from '../CreateCommentForm/CreateCommentForm.jsx';
import './CommentContainer.css';

const CommentContainer = props => {
  const comments = props.comments.map((comment) => {
    return (
      <CommentTemplate
        key={comment.id.toString()}
        id={comment.id}
        title={comment.title}
        topic_id={comment.topic_id}
        body={comment.body}
        title={comment.title}
        date_created={comment.date_created}
        user_id={comment.user_id}
      />
    );
  });

  return (
    <div id="comments-container">
      <button onClick={() => props.changeComponent(0, 0)}>Click to return!</button>
      {comments}
      <CreateCommentForm
        disabled={props.disabled}
        updateComment={props.updateComment}
        commentBody={props.commentBody}
        submitComment={props.submitComment}
      />
    </div>
  );
};

export default CommentContainer;
