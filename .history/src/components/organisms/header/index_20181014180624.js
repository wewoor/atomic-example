import React, { Component } from 'react';

import Logo from '../../molecules/logo';
import './style.css';

class Header extends Component {
    render () {
        return (
            <header className="App-header">
                <Logo />
                <h1>Header</h1>
                
            </header>
        )
    }
}

export default Header