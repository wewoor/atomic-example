import React, { Component } from 'react';

const baseUrl = '/img';
// eslint-disable-next-line

class Image extends Component {
    render () {
        const { name } = this.props;
        return (
            <img className={`m-image ${className}`} src={`${baseUrl}/${name}`} />
        )
    }
}

export default Image