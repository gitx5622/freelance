import React, { Component } from 'react'
import '../css/Header.css'
import logo from '../images/logo.png';


class Header extends Component {
    render() {
        return (
            <nav class="main-navigation">
            <div class="navbar-header animated fadeInUp">
                <a class="navbar-brand" href="#"><img src={logo} alt="logo"></img></a>
            </div>
            <ul class="nav-list">
                <li class="nav-list-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-list-item">
                    <a href="#" class="nav-link">About Us</a>
                </li>
                <li class="nav-list-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>
                <li class="nav-list-item">
                    <a href="#" class="nav-link">Works</a>
                </li>
                <li class="nav-list-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
    
        </nav>

        )
    }
}

export default Header
