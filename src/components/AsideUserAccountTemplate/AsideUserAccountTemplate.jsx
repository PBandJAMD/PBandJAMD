import React from 'react';
import '../normalize.css';
import './AsideUserAccountTemplate.css';

const AsideUserAccountTemplate = props => (
  <div id="aside-user-account-template">
      <h1 id="commentTitle">{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <br />
      <p>Created on: {props.date_created}</p>
      <br />
      <p>{props.content}</p>
  </div>
);

export default AsideUserAccountTemplate;
