import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import MainBody from './MainBody';

class Layout extends Component {
    render() {
        return (
            <div>
              <Header/>
              <MainBody/>
              <Footer/>
            </div>
        )
    }
}

export default Layout
