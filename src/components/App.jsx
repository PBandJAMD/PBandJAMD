import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm.jsx';
import SignupForm from './SignupForm/SignupForm.jsx';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import TopicContainer from './TopicContainer/TopicContainer.jsx';
import CommentContainer from './CommentContainer/CommentContainer.jsx';
import Aside from './Aside/Aside.jsx';

import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      currentPage: 0,
      topics: [],
      currentTopic: 0,
    };
  }

// INITIAL FUNCTIONS
  componentDidMount() {
    fetch('/api/topic')
      .then(r => r.json())
      .then((topics) => {
        this.setState({
          topics: topics,
        });
      })
      .catch(err => console.log('getAllTopics', err));
  }
// END INITIAL FUNCTIONS

// BEGIN LOGIN FORM/SIGNUP FORM FUNCTIONS
  handleUsernameInput(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
      fetch(`http://www.omdbapi.com/?s=batman`)
      .then(r => r.json())
      .then((data) => {
        console.log(data);
        // this.setState({
        // });
      })
      .catch(err => console.log('Error: ',err));
  }

  handleSignup(e) {
      fetch(`http://www.omdbapi.com/?s=batman`)
      .then(r => r.json())
      .then((data) => {
        console.log(data);
      })
      .catch(err => console.log('Error: ',err));
  }
// END LOGIN FORM/SIGNUP FORM FUNCTIONS

// TOGGLE FUNCTIONS
// HELP TAKEN FROM LINK #2 IN README
  changeComponent(x) {
      this.setState({
        currentPage: x,
      });
  }

  renderComponent(component) {
    if (component === 0) {
      return <TopicContainer topics={this.state.topics} changeComponent={this.changeComponent.bind(this)} />;
    } else if (component === 1) {
      return <CommentContainer changeComponent={this.changeComponent.bind(this)} />
    }
  }

// END TOGGLE FUNCTIONS

  render() {
    return (
      <div id="app-container">
        <Header />

        <div id="main-container">
          {this.renderComponent(this.state.currentPage)}
          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
