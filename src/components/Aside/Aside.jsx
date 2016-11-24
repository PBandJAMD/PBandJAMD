import React, { Component } from 'react';
import '../normalize.css';
import './Aside.css';
import LoginForm from '../LoginForm/LoginForm.jsx';

const Aside = props => (


  <div id={props.sidebar}>
    <LoginForm
    handleUsernameInput={props.handleUsernameInput}
    handlePasswordInput={props.handlePasswordInput}
    handleLogin={props.handleLogin}
    />

    <SignupForm


    />

  </div>
    );

export default Aside;
