import React, { Component } from 'react';

import MainPage from './pages/main';

import './styles/comm.css';
import './styles/pages/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <MainPage/>
      </div>
    );
  }
}

export default App;
