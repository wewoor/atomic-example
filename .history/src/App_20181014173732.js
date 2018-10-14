import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/organisms/header';
import Footer from './components/organisms/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
