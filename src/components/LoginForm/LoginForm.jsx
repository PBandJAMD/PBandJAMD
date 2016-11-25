import React from 'react';
import '../normalize.css';
import './LoginForm.css';

const LoginForm = props => (
  //div class containining user login and password
  <div className="login-form-container">
    <p>- Login In -</p>

    <input
    type="text"
    onChange={props.handleUsernameInput}
    placeholder="Username"
    />

    <br />
    <br />

    <input
      type="password"
      onChange={props.handlePasswordInput}
      placeholder="Password"
    />
    <br />
    <br />

  <div className="login-button">
    <button onClick={props.handleLogin}>Login</button>
  </div>

  </div>
);

export default LoginForm;

