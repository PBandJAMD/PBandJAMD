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
        body={comment.body}
        date_created={comment.date_created}
        username={comment.username}
        changeComponent={props.changeComponent}

        currentTopic={props.currentTopic}
        deleteButton={() => props.checkUserPrivileges(comment.user_id)}
        deleteComment={props.deleteComment}
      />
    );
  });

  return (
    <div id="comments-container">

        <button id="commentsButtonHolder" onClick={() => props.changeComponent(0, 0)}>Click to return!</button>

      <br />
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
