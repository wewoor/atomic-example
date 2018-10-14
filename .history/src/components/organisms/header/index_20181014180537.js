import React, { Component } from 'react';

import Logo from '../../molecules/logo';
import './style.css';

class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <Logo />
                <p>Header</p>
                <a
                    className="App-link"
                    href="http://atomicdesign.bradfrost.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Atomic
                </a>
            </header>
        )
    }
}

export default Header