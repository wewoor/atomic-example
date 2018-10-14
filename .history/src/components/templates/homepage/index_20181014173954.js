import React, { Component } from 'react'

import Header from '../../organisms/header';
import Footer from '../components/organisms/footer';


class HomePage extends Component {
    render () {
        return (
            <div className="homepage">
                <Header/>
                <div className="content">
                    {
                        this.props.children
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default HomePage