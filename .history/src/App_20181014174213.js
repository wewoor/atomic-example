import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/templates';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HomePage>
            <div className="content">
              Atomic Example
            </div>
          </HomePage>
      </div>
    );
  }
}

export default App;
