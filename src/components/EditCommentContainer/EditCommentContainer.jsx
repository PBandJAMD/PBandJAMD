import React from 'react';
import './EditCommentContainer.css';

const EditCommentContainer = props => (
  <div id="editCommentContainer">
    <h3 id="editCommentContainerTitle">Hi. Im Paul.</h3>

     <input
      id="editCommentInput"
      type="text"
      placeholder="Edit body"
      value={props.currentComment}
      onChange={props.updateComment}
    />

    <button
      id="submitEditedCommentButton"
      onClick={() => props.submitEditedComment(props.currentCommentId)}
    >Submit</button>


    <button
      id="returnToTopicButton"
      onClick={() => props.changeComponent(1, props.currentTopic, '', 0)}
    >Return to topic.</button>

  </div>
);


export default EditCommentContainer;
