import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm.jsx';
import SignupForm from './SignupForm/SignupForm.jsx';
import Header from './Header/Header.jsx';
import TopicContainer from './TopicContainer/TopicContainer.jsx';
import './normalize.css';
import './App.css';
import Aside from './Aside/Aside.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      currentPage: 0,
      topics: [],
    };
  }

// INITIAL FUNCTIONS
  componentDidMount() {
    fetch('/topic')
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


  render() {
    return (
      <div id="app-container">
        <Header />
        <TopicContainer
          topics={this.state.topics}
        />
        <LoginForm
          handleUsernameInput={event => this.handleUsernameInput(event)}
          handlePasswordInput={event => this.handlePasswordInput(event)}
          handleLogin={() => this.handleLogin()}
        />

        <SignupForm
          handleUsernameInput={event => this.handleUsernameInput(event)}
          handlePasswordInput={event => this.handlePasswordInput(event)}
          handleSignup={() => this.handleSignup()}
        />

        <Aside />

        <footer>
          <h1>Damira Ibragimova, Jaemin Han, Mohamed Gassama, Alexander Tong</h1>
        </footer>
      </div>
    );
  }
}

export default App;
