import React from 'react';
import '../normalize.css';
import './SignupForm.css';

const SignupForm = props => (
  <div className="login-container">

    <div className="sign-in">
      <h2>- Sign In -</h2>
      <br />
      <input
        className="sign-css"
        type="text"
        placeholder="Username"
        value={props.signupUsername}
        onChange={props.updateSignupFormUsername}
      />
      <br />
      <br />
      <input
        className="sign-css"
        type="password"
        placeholder="Password"
        value={props.signupPassword}
        onChange={props.updateSignupFormPassword}
      />
      <br />
      <br />
      <button onClick={props.handleSignupFormSubmit}>
      SignUp!
      </button>
    </div>

  </div>
  );

export default SignupForm;
