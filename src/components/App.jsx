import React, { Component } from 'react';
import './normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hello: [],
    };
  }

  render() {
    return (
      <div id="app-container">
        <header>
          <h1>PB and JAMD</h1>
        </header>

        <footer>
          <h1>Damira Ibragimova, Jaemin Han, Mohamed Gassama, Alexander Tong</h1>
        </footer>
      </div>
    );
  }
}

export default App;
