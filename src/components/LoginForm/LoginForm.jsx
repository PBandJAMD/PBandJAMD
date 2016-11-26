import React from 'react';
import '../normalize.css';
import './LoginForm.css';

const LoginForm = props => (
  //div class containining user login and password
  <div className="login-form-container">

    <input
      type="text"
      placeholder="email"
      value={props.loginUsername}
      onChange={props.updateLoginFormUsername}
    />
    <br />
    <input
      type="password"
      placeholder="password"
      value={props.loginPassword}
      onChange={props.updateLoginFormPassword}
    />
    <br />
    <button onClick={props.handleLoginFormSubmit}>
      Log In!
    </button>

  </div>
);

export default LoginForm;

