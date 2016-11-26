import React from 'react';
import '../normalize.css';
import './CreateCommentForm.css';

const CreateCommentForm = props => (
  <div id="create-comment-form-container">
    <input
        id="comment-input"
        type="text"
        placeholder="Insert comment here"
        value={props.commentBody}
        onChange={props.updateComment}
      />

      <button id="submitCommentButton"
        onClick={props.submitComment} >
      Submit!
      </button>
  </div>
);

export default CreateCommentForm;
