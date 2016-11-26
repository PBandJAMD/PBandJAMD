import React from 'react';
import '../normalize.css';
import './CreateCommentForm.css';

const CreateCommentForm = props => (
  <div className="create-comment-form-container">
    <input
        className="comment-input"
        type="text"
        placeholder="Insert comment here"
        value={props.commentBody}
        onChange={props.updateComment}
      />
      <button onClick={props.submitComment} >
      Submit!
      </button>
  </div>
);

export default CreateCommentForm;
