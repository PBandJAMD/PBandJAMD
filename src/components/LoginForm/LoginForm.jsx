import React from 'react';
import './LoginForm.css';

const LoginForm = props => (
  <div>

    <input
      type="text"
      value={props.username}
      onChange={props.handleUpdateInput}
      placeholder="Enter username."
    />
    <br/>
    <input
      type="text"
      value={props.password}
      onChange={props.handleUpdateInput}
      placeholder="Enter password."
    />
    <br/>
    <button onClick={props.handleLogin}>Login</button>

  </div>
);

export default LoginForm;

