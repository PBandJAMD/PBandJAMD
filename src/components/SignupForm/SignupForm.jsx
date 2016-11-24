import React from 'react';
import '../normalize.css';
import './SignupForm.css';

const SignupForm = props => (
  <div>

    <input
      type="text"
      onChange={props.handleUsernameInput}
      placeholder="Make a username!"
    />
    <br />
    <input
      type="text"
      onChange={props.handlePasswordInput}
      placeholder="Make a password!"
    />
    <br />
    <button onClick={props.handleSignup}>Sign up!</button>

  </div>
  );

export default SignupForm;
