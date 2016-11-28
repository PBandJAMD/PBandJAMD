import React from 'react';
import './EditCommentContainer.css';

const EditCommentContainer = props => (
  <div id="editCommentContainer">
    <h3 id="editCommentContainerTitle">Hi. Im Paul.</h3>
    <button onClick={() => props.changeComponent(1, props.currentTopic)}>Return to topic.</button>
  </div>
);


export default EditCommentContainer;
