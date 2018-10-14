import React, { Component } from 'react';

import Image from '../../atoms/img';
import './style.css';

class Logo extends Component {
    render () {
        return (
            <div className="logo">
                <Image className="App-logo" name="logo.svg" />
                <span style={{fontSize: 20}}>I'm logo.</span>
            </div>
        )
    }
}

export default Logo;