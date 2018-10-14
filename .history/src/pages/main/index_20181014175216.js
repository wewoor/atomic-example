import React, { Component } from 'react';


import HomePage from './components/templates';

class MainPage extends Component {
  render() {
    return (
      <div className="main">
          <HomePage>
            <div className="content">
              Atomic Example
            </div>
          </HomePage>
      </div>
    );
  }
}

export default MainPage;
