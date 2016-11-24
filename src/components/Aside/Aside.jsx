import React, { Component } from 'react';
import '../normalize.css';
import style from './Aside.css';
// import LoginForm from '../LoginForm/LoginForm';
// import SignupForm from '../SignupForm/SignupForm';

 // function created for 'enter' key
// function handleKeyPress(e, cb) {
//   if (e.key === 'Enter') cb();
// }

// class Aside extends Component {
//   constructor() {
//     super();

//     this.state = {
//       username: [],
//       password: [],
//       initialState: true,
//     };
//   }


// toggleAside (e) {
//   this.setState({
//     initialState: !this.state.initialState });
//   }
// }



//   render() {
//     return (

// const btn = document.getElementById('user');

// btn.onclick = function() {
//   modal.style.display = 'block';
// }

const Aside = props => (
  <div id="/" className="toggle">
   <a href="#/" className="sign-button">Log In | Sign Up</a>
{/*<a href="#user" className="sign-button">Log In | Sign Up</a>*/}
{/*<div id="myBtn" className="sign-button toggle">Log In | Sign Up</div>*/}

    {/*BEGIN returned user input fields*/}
    <div id="log-in" className="both">
      <h3>- Login In -</h3>
      <div className="label">
        <label>User ID: </label>
        <input
          type="text"
          // value=""
          // OnChange=""
          // onKeyPress=""
          // placeholder=""
        />
      </div>

      <div className="label">
        <label>Password: </label>
        <input
          type="password"
          // value=""
          // OnChange=""
          // onKeyPress=""
          // placeholder=""
        />
      </div>

    {/*This button is for returning user*/}
      <div className="label button-position">
        <button className="bt click">Sign In</button>
        {/*OnClick={} inside <button>*/}
      </div>
    {/*END returned user*/}

      <br />
      <br />

    {/*BEGIN new user input fields*/}
      <div id="sign-up" className="both">
        <h3>- Sign Up Today! -</h3>
        <div className="label">
          <label>User ID: </label>
          <input
            type="text"
          // value=""
          // OnChange=""
          // onKeyPress=""
          // placeholder=""
          />
        </div>

        <div className="label">
          <label>Password: </label>
          <input
            type="password"
          // value=""
          // OnChange=""
          // onKeyPress=""
          // placeholder=""
          />
        </div>
        <div className="label button-position">
          <button className="bt click">Sign Up</button>
          {/*OnClick={} inside <button>*/}
        </div>
      {/*END new user input fields*/}

        <a href="" className="bt">Cancel</a>
      </div>
    </div>

  </div>
    );

export default Aside;
