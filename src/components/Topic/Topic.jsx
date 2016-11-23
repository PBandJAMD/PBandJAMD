import React, { Component } from 'react';
import style from './Topic.css';

export default class Topic extends Component {

  render() {
    return(
      <div className="topic-container">
        <h2 className="question-title">Question title will be here</h2>
        <h3 className="topic-author-username">Mike</h3>
        <p>Question details text here...</p>
      </div>
    )
  }
}
