import React from 'react';
import '../normalize.css';
import './CreateTopicForm.css';

const CreateTopicForm = props => (
  <div id="createTopicForm">

    <input
      className="topicInput"
      type="text"
      placeholder="New Topic Title"
      value={props.topicTitle}
      onChange={props.updateTopicTitle}
    />

    <input
      className="topicInput"
      type="text"
      placeholder="New Topic Comment"
      value={props.topicContent}
      onChange={props.updateTopicContent}
    />

    <button id="createButton" onClick={props.handleCreateTopic}>
    Create New Topic
    </button>

  </div>
  );

export default CreateTopicForm;
