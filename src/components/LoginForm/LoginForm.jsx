import React from 'react';
import '../normalize.css';
import './LoginForm.css';

const LoginForm = props => (
  //div class containining user login and password
  <div className="login-form-container">

    <div className="log-in">
      <h2>- Log In -</h2>
      <br />
      <input
        className="login-css"
        type="text"
        placeholder="Username"
        value={props.loginUsername}
        onChange={props.updateLoginFormUsername}
      />
      <br />
      <br />
      <input
      className="login-css"
        type="password"
        placeholder="Password"
        value={props.loginPassword}
        onChange={props.updateLoginFormPassword}
      />
      <br />
      <br />
      <button onClick={props.handleLoginFormSubmit}>
        Log In!
      </button>
    </div>
  </div>
);

export default LoginForm;

