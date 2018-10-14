import React, { Component } from 'react';

const baseUrl = '../../../assets/img';

class Img extends Component {
    render () {
        const { name } = this.props;
        return (
            <img className="m-image" src={`${baseUrl}/${name}`} />
        )
    }
}

export default Img