import React from 'react';
import '../normalize.css';
import './AsideUserAccountContainer.css';
import AsideUserAccountTemplate from '../AsideUserAccountTemplate/AsideUserAccountTemplate.jsx';

const AsideUserAccountContainer = props => {
  const userInfo = props.userInfo.map((userInfo) => {
    return (
      <AsideUserAccountTemplate
        title={userInfo.title}
        content={userInfo.content}
        date_created={userInfo.date_created}
        content={userInfo.content}
      />
    );
  });

  return (
    <div id={props.sidebar}>
      <p>Your recent comments:</p>
      {userInfo}
    </div>
  );
};

export default AsideUserAccountContainer;
