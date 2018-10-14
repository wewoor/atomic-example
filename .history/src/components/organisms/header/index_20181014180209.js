import React, { Component } from 'react';

import Logo from '../../molecules/logo';
import './style.css';

class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <Logo />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        )
    }
}

export default Header