import React from 'react';
import '../normalize.css';
import './CommentTemplateId.css';

const CommentTemplateId = props => {
  const comments = props.comments.map((comment) => {
    return (
      <CommentTemplate
        key={comment.id.toString()}
        // id={comment.id}
        topic_id={comment.topic_id}
        body={comment.body}
        date_created={comment.date_created}
        user_id={comment.user_id}
      />
    );
  });

  return (
    <div id="comments-container">
      {comments}
    </div>
  );
};

export default CommentTemplateId;
