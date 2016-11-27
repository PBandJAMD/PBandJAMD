import React from 'react';
import '../normalize.css';
import './AsideLoginSignup.css';
import LoginForm from '../LoginForm/LoginForm.jsx';
import SignupForm from '../SignupForm/SignupForm.jsx';

const AsideLoginSignup = props => (
  <div id="AsideLoginSignupContainer">

    <button onClick={props.changeSidebar} id="sidebarButton">{props.buttonText}</button>

    <div id={props.sidebar}>
        <SignupForm
          signupUsername={props.signupUsername}
          updateSignupFormUsername={props.updateSignupFormUsername}
          signupPassword={props.signupPassword}
          updateSignupFormPassword={props.updateSignupFormPassword}
          handleSignupFormSubmit={props.handleSignupFormSubmit}
        />

        <LoginForm
          loginUsername={props.loginUsername}
          updateLoginFormUsername={props.updateLoginFormUsername}
          loginPassword={props.loginPassword}
          updateLoginFormPassword={props.updateLoginFormPassword}
          handleLoginFormSubmit={props.handleLoginFormSubmit}
        />
    </div>

  </div>
    );

export default AsideLoginSignup;
