import React from 'react';
import '../normalize.css';
import './TopicForm.css';

const TopicForm = props => (
  <div className="topic-form">
    <input
      type="text"
      placeholder="Topic Title"
      value={props.title}
      onChange={props.updateTopicTitle}
    />

    <input
      type="text"
      placeholder="Topic Comment"
      value={props.content}
      onChange={props.updateTopicContent}
    />

    <button onClick={props.handleUpdateTopic}>
    Create New Topic
    </button>
  </div>
  );

export default TopicForm;
