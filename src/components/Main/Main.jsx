import React, { Component } from 'react';
import style from './Main.css';
// Importing other components:
import Aside from '../Aside/Aside.jsx';
import Topic from '../Topic/Topic.jsx';
import Comment from '../Comment/Comment.jsx';


export default class Main extends Component {

  render() {
    return(
      <div className="main-container">
        <Aside />
        <Topic />
        <Comment />
      </div>
    )
  }
}
