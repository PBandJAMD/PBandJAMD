import React, { Component } from 'react';
import style from './Comment.css';

export default class Comment extends Component {

  render() {
    return(
      <div className="comment-container">
        <h3 className="comment-author-username">UserName</h3>
        <p>Here will be some comment text...</p>
        <button className="edit-comment-button" type="submit" value="Edit">Edit</button>
      </div>
    )
  }
}
