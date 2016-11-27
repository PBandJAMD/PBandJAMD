import React from 'react';
import '../normalize.css';
import './SignupForm.css';

const SignupForm = props => (
  <div id="signup-form-container">

      <h2 id="signupTitle">- Sign Up -</h2>
      <br />
      <input
        className="signup-css"
        type="text"
        placeholder="Username"
        value={props.signupUsername}
        onChange={props.updateSignupFormUsername}
      />
      <br />

      <input
        className="signup-css"
        type="password"
        placeholder="Password"
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
