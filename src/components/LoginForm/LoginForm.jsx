import React from 'react';
import '../normalize.css';
import './LoginForm.css';

const LoginForm = props => (
  <div>

    <input
      type="text"
      onChange={props.handleUsernameInput}
      placeholder="Enter username."
    />
    <br />
    <input
      type="text"
      onChange={props.handlePasswordInput}
      placeholder="Enter password."
    />
    <br />
    <button onClick={props.handleLogin}>Login</button>

  </div>
);

export default LoginForm;

