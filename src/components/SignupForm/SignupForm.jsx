import React from 'react';
import '../normalize.css';
import './SignupForm.css';

const SignupForm = props => (
  <div className="login-container">

    <input
      type="text"
      placeholder="email"
      value={props.signupUsername}
      onChange={props.updateSignupFormUsername}
    />
    <br />
    <input
      type="password"
      placeholder="password"
      value={props.signupPassword}
      onChange={props.updateSignupFormPassword}
    />
    <br />
    <button onClick={props.handleSignupFormSubmit}>
    SignUp!
    </button>

  </div>
  );

export default SignupForm;
