import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm.jsx';
import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: [],
    };
  }

  handleUpdateInput(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleLogin(e) {
      fetch(`http://www.omdbapi.com/?s=${this.state.searchTerm}&page=${page}`)
      .then(r => r.json())
      .then((data) => {
        this.setState({
        });
      })
      .catch(err => console.log('Error: ',err));
  }

  render() {
    return (
      <div id="app-container">
        <header>
          <div id="jaemin">
            <h1>PB and JAMD</h1>
          </div>
        </header>

        <LoginForm
          username={this.state.username}
          handleUpdateInput={event => this.handleUpdateInput(event)}
          handleLogin={() => this.handleLogin()}
        />

        <footer>
          <h1>Damira Ibragimova, Jaemin Han, Mohamed Gassama, Alexander Tong</h1>
        </footer>
      </div>
    );
  }
}

export default App;
