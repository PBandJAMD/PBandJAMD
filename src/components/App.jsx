import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import TopicContainer from './TopicContainer/TopicContainer.jsx';
import CommentContainer from './CommentContainer/CommentContainer.jsx';
import AsideLoginSignup from './AsideLoginSignup/AsideLoginSignup.jsx';
import AsideUserAccountContainer from './AsideUserAccountContainer/AsideUserAccountContainer.jsx';

import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
      currentTopic: 0,
      currentPage: 0,

      topics: [],
      comments: [],

      topic: {
        title: '',
        content: '',
      },

      signup: {
        username: '',
        password: '',
      },

      login: {
        loggedIn: false,
        username: '',
        password: '',
      },

      userInfo: [],

      sidebar: 'hidden',

      disabled: 'disabled',

      comment: '',

      buttonText: 'Login/Signup',
    };
  }

// INITIAL FUNCTIONS *http://stackoverflow.com/questions/31023308/clearinterval-is-not-working-in-reactjs*
  componentDidMount() {
    // this.intervalId = setInterval(this.getAllTopics.bind(this), 1000);, THIS LINE CAUSE IT TO AUTO UPDATE
    this.getAllTopics();
  }

  componentWillUnmount() { // CLEAR ABOVE INTERVAL WHEN COMPONENT UNMOUNTS
    clearInterval(this.intervalId);
  }
// END INITIAL FUNCTIONS

// BEGIN LOGIN FORM FUNCTIONS *TAKEN FROM BOBBY KING'S REACT PUPPIES SOLUTION WITH AUTH*
  onSuccessfulLogIn(a) {
    this.alertInfo('Youre logged in!');
    console.log(a);
    this.setState({
      disabled: '',
      currentUser: a.id,
      buttonText: 'My Account',
      login: {
        username: '',
        password: '',
        loggedIn: true,
      },
    });
    this.getUserInfo(this.state.currentUser);
  }
// END LOGIN FORM FUNCTIONS

// BEGIN DISPLAY COMMENT FETCH FUNCTIONS
  getAllTopics() {
    fetch('/api/topic')
        .then(r => r.json())
        .then((topics) => {
          this.setState({
            topics: topics,
          });
        })
        .catch(err => console.log('getAllTopics', err));
  }

  getAllComments(topicId) {
    fetch(`/api/comment/${topicId}`, {
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
// END DISPLAY COMMENT FETCH FUNCTIONS

// BEGIN LOGIN FORM FETCH FUNCTIONS *TAKEN FROM BOBBY KING'S REACT PUPPIES SOLUTION WITH AUTH* #3
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
// END LOGIN FORM/SIGNUP  FETCHFORM FUNCTIONS

// BEGIN TOPIC/SUBMIT COMMENT FETCH FUNCTIONS
  submitComment() {
    fetch('/api/comment', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        body: this.state.comment,
        topic_id: parseInt(this.state.currentTopic, 10),
        user_id: parseInt(this.state.currentUser, 10),
      }),
    })
    .then(r => r.json())
    .then(this.getAllComments(this.state.currentTopic))
    .then(this.setState({
      comment: '',
    }))
    .catch(err => console.log(err));
  }

  handleCreateTopic() {
    fetch('api/topic', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        title: this.state.topic.title,
        content: this.state.topic.content,
        user_id: this.state.currentUser,
      }),
    })
    .then(r => r.json())
    .then(this.getAllTopics())
    .then(this.getUserInfo(this.state.currentUser))
    .then(this.setState({
      topic: {
        title: '',
        content: '',
      },
    }))
    .catch(err => console.log(err));
  }
// END SUBMIT TOPIC/COMMENT FETCH FUNCTIONS

// START DELETE COMMENT FETCH FUNCTIONS
  deleteComment(commentId) {
    fetch(`api/comment/${commentId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(this.getAllComments(this.state.currentTopic))
    .catch(err => console.log(err));
  }
// END DELETE COMMENT FETCH FUNCTIONS

// BEGIN USER ACCOUNT FETCH FUNCTIONS
  getUserInfo(id) {
      fetch(`/api/user/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
      .then(r => r.json())
      .then((info) => {
        this.setState({
          userInfo: info,
        });
      })
      .catch(err => console.log('getComment', err));
  }
// END USER ACCOUNT FETCH FUNCTIONS

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

  updateComment(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  updateTopicTitle(e) {
    this.setState({
      topic: {
        title: e.target.value,
        content: this.state.topic.content,
      },
    });
  }

  updateTopicContent(e) {
    this.setState({
      topic: {
        title: this.state.topic.title,
        content: e.target.value,
      },
    });
  }
// END FORM DISPLAY FUNCTIONS

// ALL TOGGLES
// TOGGLE COMPONENT FUNCTIONS *HELP TAKEN FROM LINK #2 IN README*

  checkUserPrivileges(userId) {
    if (this.state.currentUser === userId) {
      return 'showTrash';
    }
    return 'hideTrash';
  }

  changeComponent(x, y) {
      this.getAllComments(y);
      this.setState({
        currentPage: x,
        currentTopic: y,
      });
  }

  renderComponent(component) {
    if (component === 0) {
      return (<TopicContainer
        topics={this.state.topics}
        changeComponent={(x, y) => this.changeComponent(x, y)}
      />
      );
    } else if (component === 1) {
      return (<CommentContainer
        checkUserPrivileges={event => this.checkUserPrivileges(event)}
        disabled={this.state.disabled}
        comments={this.state.comments}
        changeComponent={(x, y) => this.changeComponent(x, y)}
        updateComment={event => this.updateComment(event)}
        commentBody={this.state.comment}
        submitComment={() => this.submitComment()}
        deleteComment={event => this.deleteComment(event)}
      />
      );
    }
  }

  renderAside(loggedIn) {
    if (loggedIn === false) {
      return (<AsideLoginSignup
        changeSidebar={event => this.changeSidebar(event)}
        buttonText={this.state.buttonText}
        // SIGNUP
        sidebar={this.state.sidebar}
        signupUsername={this.state.signup.username}
        updateSignupFormUsername={event => this.updateFormSignUpUsername(event)}
        signupPassword={this.state.signup.password}
        updateSignupFormPassword={event => this.updateFormSignUpPassword(event)}
        handleSignupFormSubmit={() => this.handleSignUp()}
        // LOGIN
        loginUsername={this.state.login.username}
        loginPassword={this.state.login.password}
        updateLoginFormUsername={event => this.updateFormLogInUsername(event)}
        updateLoginFormPassword={event => this.updateFormLogInPassword(event)}
        handleLoginFormSubmit={() => this.handleLogIn()}
      />);
    } else if (loggedIn === true) {
      return (<AsideUserAccountContainer
        changeSidebar={event => this.changeSidebar(event)}
        buttonText={this.state.buttonText}
        topicTitle={this.state.topic.title}
        topicContent={this.state.topic.content}
        userInfo={this.state.userInfo}
        sidebar={this.state.sidebar}
        updateTopicTitle={event => this.updateTopicTitle(event)}
        updateTopicContent={event => this.updateTopicContent(event)}
        handleCreateTopic={event => this.handleCreateTopic(event)}
      />);
    }
  }

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

// END TOGGLE FUNCTIONS


// MAIN RENDER
  render() {
    return (
      <div id="app-container">
        <Header />

        {this.renderAside(this.state.login.loggedIn)}

        <div id="main-container">
          {this.renderComponent(this.state.currentPage)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
