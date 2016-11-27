import React from 'react';
import '../normalize.css';
import './AsideUserAccountContainer.css';
import AsideUserAccountTemplate from '../AsideUserAccountTemplate/AsideUserAccountTemplate.jsx';
import CreateTopicForm from '../CreateTopicForm/CreateTopicForm.jsx';

const AsideUserAccountContainer = props => {
  const userInfo = props.userInfo.map((userInfo) => {
    return (
      <AsideUserAccountTemplate
        title={userInfo.title}
        content={userInfo.content}
        date_created={userInfo.date_created}
        // content={userInfo.content}
      />
    );
  });

  return (
    <div id={props.sidebar}>
      <CreateTopicForm topicTitle={props.topicTitle} topicContent={props.topicContent} updateTopicTitle={props.updateTopicTitle} updateTopicContent={props.updateTopicContent} handleCreateTopic={props.handleCreateTopic} />
      <p>Your recent comments:</p>
      {userInfo}
    </div>
  );
};

export default AsideUserAccountContainer;
