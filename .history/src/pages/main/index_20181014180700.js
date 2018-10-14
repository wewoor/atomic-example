import React, { Component } from 'react';


import HomePage from '../../components/templates/homepage';

class MainPage extends Component {
  render() {
    return (
      <div className="main">
          <HomePage>
            <div className="App-content">
                 Atomic Example
                <a
                    className="App-link"
                    href="http://atomicdesign.bradfrost.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Atomic
                </a>

            </div>
          </HomePage>
      </div>
    );
  }
}

export default MainPage;
