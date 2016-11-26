import React from 'react';
import '../normalize.css';
import './AsideUserAccount.css';

const AsideUserAccount = props => {
  const userInfo = props.userInfo.map((userInfo) => {
    return (
       <h1>Hello {props.userInfo[0].username}</h1>
        // key={topic.id.toString()}
        // id={topic.id}
        // title={topic.title}
        // changeComponent={props.changeComponent}
        // content={topic.content}
        // date_created={topic.date_created}
        // user_id={topic.user_id}

    );
  });

  return (
    <div id="show">
      {userInfo}
    </div>
  );
};

export default AsideUserAccount;
