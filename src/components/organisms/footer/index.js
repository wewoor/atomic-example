import React, { Component } from 'react'

import './style.css';
class Footer extends Component {
    render () {
        const defaultContent = <h1>Footer</h1>;
        return (
            <div className="App-footer">
                {this.props.children || defaultContent }
            </div>
        )
    }
}

export default Footer