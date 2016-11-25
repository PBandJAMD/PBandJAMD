import React from 'react';
import '../normalize.css';
import './SignupForm.css';

const SignupForm = props => (
  <div className="login-container">
    <p>- Sign Up -</p>
    <input
      type="text"
      onChange={props.handleUsernameInput}
      placeholder="Username"
    />

    <br />
    <br />

    <input
      type="Password"
      onChange={props.handlePasswordInput}
      placeholder="Password"
    />
    <br />
    <br />

    <div className="sign-button">
      <button onClick={props.handleSignup}>Sign up!</button>
    </div>

  </div>
  );

export default SignupForm;
