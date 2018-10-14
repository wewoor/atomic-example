import React, { Component } from 'react'

class Button extends Component {
    render () {
        return (
            <div className="btn-wrapper">
                <button className="btn">{this.props.children}</button>
            </div>
        )
    }
}

export default Button