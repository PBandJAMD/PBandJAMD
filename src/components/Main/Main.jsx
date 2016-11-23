import React, { Component } from 'react';
import style from './Main.css';
// Importing other components:
import Aside from '../Aside/Aside';
import Topic from '../Topic/Topic';
import Comment from '../Comment/Comment';


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
