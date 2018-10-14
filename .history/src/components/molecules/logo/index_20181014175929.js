import React, { Component } from 'react';

import Image from '../../atoms/img';
class Logo extends Component {
    render () {
        return (
            <div className="logo">
                <Image name="logo.svg" />
                <span style={{fontSize: 20}}>I'm logo.</span>
            </div>
        )
    }
}

export default Logo;