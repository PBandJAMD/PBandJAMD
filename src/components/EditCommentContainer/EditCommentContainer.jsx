import React from 'react';
import './EditCommentContainer.css';

const EditCommentContainer = props => (
  <div id="editCommentContainer">

    <div id="editCommentInputContainer">
       <input
        id="editCommentInput"
        type="text"
        placeholder="Edit body"
        value={props.currentComment}
        onChange={props.updateComment}
        />
    </div>

    <div id="editCommentButtonsContainer">
      <button
        className="editedCommentButtons"
        onClick={() => props.submitEditedComment(props.currentCommentId)}
      >Submit</button>

      <button
        className="editedCommentButtons"
        onClick={() => props.changeComponent(1, props.currentTopic, '', 0)}
      >Return to Topic</button>
    </div>

  </div>
);


export default EditCommentContainer;
