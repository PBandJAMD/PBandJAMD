import React from 'react';
import '../normalize.css';
import './AsideUserAccountTemplate.css';

const AsideUserAccountTemplate = props => (
  <div id="aside-user-account-template">


      <h1 id="commentTitle">{props.title}</h1>
      <p>{props.content}</p>
      <p>Created on: {props.date_created}</p>
      <button>Delete</button>


  </div>
);

export default AsideUserAccountTemplate;
