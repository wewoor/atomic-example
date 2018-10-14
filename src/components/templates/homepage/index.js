import React, { Component } from 'react'

import Header from '../../organisms/header';
import Footer from '../../organisms/footer';

class HomePage extends Component {
    render () {
        return (
            <div className="homepage">
                <Header/>
                {
                    this.props.children
                }
                <Footer/>
            </div>
        )
    }
}

export default HomePage