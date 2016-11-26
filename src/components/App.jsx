import React, { Component } from 'react';
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
      currentUser: null,
      currentPage: 0,
      topics: [],
      comments: [],
      sidebar: 'hidden',

      signup: {
        username: '',
        password: '',
      },
      login: {
        loggedIn: false,
        username: '',
        password: '',
      },

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

// BEGIN LOGIN FORM FUNCTIONS *TAKEN FROM BOBBY KING'S REACT PUPPIES SOLUTION WITH AUTH*
  onSuccessfulLogIn(a) {
    this.alertInfo('Youre logged in!');
    console.log(a);
    this.setState({
      currentUser: a.id,
      login: {
        username: '',
        password: '',
        loggedIn: true,
      },
    });
  }

  // JH getting comment(s) based on specific id
  getAllComments(id) {
    fetch(`/api/comment/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((comments) => {
    console.log(comments);
      this.setState({
        comments: comments,
      });
    })
    .catch(err => console.log('getComment', err));
  }

// BEGIN LOGIN FORM FUNCTIONS *TAKEN FROM BOBBY KING'S REACT PUPPIES SOLUTION WITH AUTH*
  handleSignUp() {
    fetch('/api/user', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.signup.username,
        password: this.state.signup.password,
      }),
    })
    .then(this.setState({
      signup: {
        username: '',
        password: '',
      },
    }))
    .then(this.alertInfo('You have signed up!'))
    .catch(err => console.log(err));
  }

  handleLogIn() {
    fetch('/api/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.login.username,
        password: this.state.login.password,
      }),
    })
    .then(r => r.json())
    .then(this.setState({
      login: {
        username: '',
        password: '',
        loggedIn: false,
      },
    }))
    .then(this.onSuccessfulLogIn.bind(this))
    .catch(err => console.log(err));
  }

  alertInfo(msg) {
    alert(msg);
  }
// END LOGIN FORM/SIGNUP FORM FUNCTIONS


// BEGIN FORM DISPLAY FUNCTIONS
  updateFormSignUpUsername(e) {
    this.setState({
      signup: {
        username: e.target.value,
        password: this.state.signup.password,
      },
    });
  }

  updateFormSignUpPassword(e) {
    this.setState({
      signup: {
        username: this.state.signup.username,
        password: e.target.value,
      },
    });
  }

  updateFormLogInUsername(e) {
    this.setState({
      login: {
        username: e.target.value,
        password: this.state.login.password,
        loggedIn: false,
      },
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value,
        loggedIn: false,
      },
    });
  }

// END FORM DISPLAY FUNCTIONS


// ALL TOGGLES
// TOGGLE COMPONENT FUNCTIONS *HELP TAKEN FROM LINK #2 IN README*
  changeComponent(x, y) {
      this.getAllComments(y);
      this.setState({
        currentPage: x,
      });
  }

  renderComponent(component) {
    if (component === 0) {
      return <TopicContainer topics={this.state.topics} changeComponent={(x, y) => this.changeComponent(x, y)} />;
    } else if (component === 1) {
      return <CommentContainer comments={this.state.comments} changeComponent={(x, y) => this.changeComponent(x, y)} />;
    }
  }

// END TOGGLE FUNCTIONS

// BEGIN ASIDE FUNCTIONS
  changeSidebar() {
    if (this.state.sidebar === 'hidden') {
      this.setState({
        sidebar: 'show',
      });
    } else if (this.state.sidebar === 'show') {
      this.setState({
        sidebar: 'hidden',
      });
    }
  }

// END ASIDE FUNCTIONS

  render() {
    return (
      <div id="app-container">
        <Header changeSidebar={event => this.changeSidebar(event)} />

        <Aside
        // SIGNUP
          sidebar={this.state.sidebar}
          signupUsername={this.state.signup.username}
          updateSignupFormUsername={event => this.updateFormSignUpUsername(event)}
          signupPassword={this.state.signup.password}
          updateSignupFormPassword={event => this.updateFormSignUpPassword(event)}
          handleSignupFormSubmit={() => this.handleSignUp()}
          // LOGIN
          className={this.state.login.loggedIn ? 'hidden' : ''}
          loginUsername={this.state.login.username}
          loginPassword={this.state.login.password}
          updateLoginFormUsername={event => this.updateFormLogInUsername(event)}
          updateLoginFormPassword={event => this.updateFormLogInPassword(event)}
          handleLoginFormSubmit={() => this.handleLogIn()}
        />

        <div id="main-container">
          {this.renderComponent(this.state.currentPage)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
