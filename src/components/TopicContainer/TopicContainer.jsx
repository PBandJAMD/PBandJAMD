import React from 'react';
import TopicTemplate from '../TopicTemplate/TopicTemplate.jsx';
import './TopicContainer.css';

const TopicContainer = props => {
  const topics = props.topics.map((topic) => {
    return (
      <TopicTemplate
        key={topic.id.toString()}
        // id={topic.id}
        title={topic.title}
        changeComponent={props.changeComponent}
        content={topic.content}
        date_created={topic.date_created}
        user_id={topic.user_id}
      />
    );
  });

  return (
    <div id="topics-container">
      {topics}
    </div>
  );
};

export default TopicContainer;
