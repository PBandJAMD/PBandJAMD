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
      comments: [],
      currentTopic: 0,
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
  onSuccessfulLogIn(a, b) {
    console.log(a, b);



  //JH getting comment(s) based on specific id
  getComment(id) {
    fetch(`/api/comment/${id}`, {
      method: 'GET'
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


// BEGIN AUTH FUNCTIONS
  // login() {
// BEGIN LOGIN FORM FUNCTIONS *TAKEN FROM BOBBY KING'S REACT PUPPIES SOLUTION WITH AUTH*
//   onSuccessfulLogIn(a,b) {
//     console.log(a,b);
//   }

//   handleSignUp() {
//     fetch('/api/user', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         username: this.state.signup.username,
//         password: this.state.signup.password,
//       }),
//     })
//     .then(this.setState({
//       signup: {
//         username: '',
//         password: '',
//       },
//     }))
//     .then(this.alertInfo('You have signed up!'))
//     .catch(err => console.log(err));
//   }

//   handleLogIn() {
//     fetch('/api/auth', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         username: this.state.login.username,
//         password: this.state.login.password,
//       }),
//     })
//     .then(this.setState({
//       login: {
//         username: '',
//         password: '',
//       },
//     }))
//     .then(this.onSuccessfulLogIn)
//     .catch(err => console.log(err));
//   }

//   alertInfo(msg) {
//     alert(msg);
//   }
// }
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
      },
    });
  }

  updateFormLogInPassword(e) {
    this.setState({
      login: {
        username: this.state.login.username,
        password: e.target.value,
      },
    });
  }

// END FORM DISPLAY FUNCTIONS


// ALL TOGGLES
// TOGGLE COMPONENT FUNCTIONS *HELP TAKEN FROM LINK #2 IN README*
  changeComponent(x) {
      this.setState({
        currentPage: x,
      });
  }

  renderComponent(component) {
    if (component === 0) {
      return <TopicContainer topics={this.state.topics} changeComponent={event => this.changeComponent(event)} />;
    } else if (component === 1) {
<<<<<<< HEAD
      return <CommentContainer changeComponent={event => this.changeComponent(event)} />;
=======
      return <CommentContainer comments={this.state.comments} changeComponent={this.changeComponent.bind(this)} />
>>>>>>> master
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
  // changeSidebar() {
  //   const css = (this.sidebar === 'hidden') ? 'show' : 'hidden';
  //   this.setState({ sidebar: css });
  // }

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
          // className={this.state.login.loggedIn ? 'hidden' : ''}

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
