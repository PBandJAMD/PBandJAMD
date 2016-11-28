import React from 'react';
import '../normalize.css';
import './LoginForm.css';

const LoginForm = props => (
  //div class containining user login and password
  <div id="login-form-container">

      <h2 id="loginTitle">- Log In -</h2>

      <br />
      <input
        className="login-css"
        type="text"
        placeholder="Username"
        value={props.loginUsername}
        onChange={props.updateLoginFormUsername}
      />
      <br />

      <input
        className="login-css"
        type="password"
        placeholder="Password"
        value={props.loginPassword}
        onChange={props.updateLoginFormPassword}
      />
      <br />
      <button id="loginButton" onClick={props.handleLoginFormSubmit}>
        Log In!
      </button>

  </div>
);

export default LoginForm;

