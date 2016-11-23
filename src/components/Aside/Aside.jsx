import React, { Component } from 'react';
import style from './Aside.css';
// import LoginForm from '../LoginForm/LoginForm';
// import SignupForm from '../SignupForm/SignupForm';

 // function created for 'enter' key
// function handleKeyPress(e, cb) {
//   if (e.key === 'Enter') cb();
// }.

const Aside = props => (
  <div id="user" className="toggle">
    <a href="#user" className="sign-button">Log In | Sign Up</a>

    <div id="log-in" className="both">
      <h3>- Login In -</h3>
      <div className="label">
        <label>User ID:</label>
        <input
          type="text"
        />
      </div>

      <div className="label">
        <label>Password:</label>
        <input
          type="password"
        />
      </div>

      <div className="label button-position">
        <button className="bt click">Sign In</button>
      </div>

      <br />
      <br />
      <br />

      <div id="sign-up" className="both">
        <h3>- Sign Up Today! -</h3>
        <div className="label">
          <label>User ID:</label>
          <input
            type="text"
          />
        </div>
        <div className="label">
          <label>Password:</label>
          <input
            type="password"
          />
        </div>
        <div className="label button-position">
          <button className="bt click">Sign Up</button>
        </div>
        <a href="" className="bt">Cancel</a>
      </div>
    </div>

  </div>
);

export default Aside;
