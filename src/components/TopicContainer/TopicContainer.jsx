import React, { Component } from 'react';
import './TopicContainer.css';
import TopicTemplate from '../TopicTemplate/TopicTemplate.jsx';

class TopicContainer extends Component {
  constructor() {
    super();
    this.state = {
      topics: [],
    };
  }

  getAllTopics() {
    fetch('/topic')
    .then(r => r.json())
    .then((topics) => {
      this.setState({
        topics: topics,
      });
    })
    .catch(err => console.log('getAllTopics', err))
  }

  showAllTopics() {
    return this.state.topics.map(topic =>
      <TopicTemplate
        title={topic.title}
        content={topic.content}
        date_created={topic.date_created}
        user_id={topic.user_id}
      />
    );
  }

  render() {
    return (
      <div className="main-container">

        {this.showAllTopics()}


      </div>
    );
  }
}

export default TopicContainer;
