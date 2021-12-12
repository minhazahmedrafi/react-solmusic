import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.png'

export default class Navbar extends Component {
render() {
return (
<Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark py-4">
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/news">News</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="help">
                    <NavLink className="h-text" to="#">Help</NavLink>
                    <span>|</span>
                </div>
                <div className="userlogin">
                    <NavLink className="login-text" to="#">Login</NavLink>
                    <NavLink className="create-text" to="#">Create an account</NavLink>
                </div>
            </div>
        </div>
    </nav>
</Fragment>
)
}
}