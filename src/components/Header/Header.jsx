import React from 'react';
import '../normalize.css';
import './Header.css';
import banana from './banana.gif';

const Header = props => (
  <div id="header-container">
  <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch" rel="stylesheet" />
    <img src={banana} alt="banana" id="banana" />
    <h1>PB & JAMD Forum</h1>
  </div>
    );

export default Header;
