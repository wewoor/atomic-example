import React, { Component } from 'react';

import Image from '../../atoms/img';
class Logo extends Component {
    render () {
        return (
            <div className="logo">
                <Image name="logo.svg" />
                <p>I'm logo.</p>
            </div>
        )
    }
}

export default Logo;