import React, { Component } from 'react';
import '../normalize.css';
import './Aside.css';
import LoginForm from '../LoginForm/LoginForm.jsx';
import SignupForm from '../SignupForm/SignupForm.jsx';

const Aside = props => (

  <div id={props.sidebar}>

    <div id="sidebar">

      <LoginForm
        handleUsernameInput={props.handleUsernameInput}
        handlePasswordInput={props.handlePasswordInput}
        handleLogin={props.handleLogin}
      />

      <SignupForm
        handleUsernameInput={props.handleUsernameInput}
        handlePasswordInput={props.handlePasswordInput}
        handleSignup={props.handleSignup}
      />
    </div>

  </div>
    );

export default Aside;
