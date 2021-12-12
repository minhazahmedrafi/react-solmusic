import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 order">
                                <img className="img-fluid" src={logo} alt=""/>
                                <p className="copyright">COPYRIGHT &copy; 2021 ALL RIGHTS RESERVED | THIS TEMPLATE IS MADE WITH  BY <NavLink to="">coderminhaz</NavLink></p>
                                <div className="footer-social-icons">
                                    <NavLink to=""><i class="fa fa-instagram" aria-hidden="true"></i></NavLink>
                                    <NavLink to=""><i class="fa fa-pinterest" aria-hidden="true"></i></NavLink>
                                    <NavLink to=""><i class="fa fa-facebook" aria-hidden="true"></i></NavLink>
                                    <NavLink to=""><i class="fa fa-twitter" aria-hidden="true"></i></NavLink>
                                    <NavLink to=""><i class="fa fa-youtube" aria-hidden="true"></i></NavLink>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <ul className="ft-list p-0">
                                <h5>ABOUT US</h5>
                                    <li><NavLink className="ft-item" to="">Our Story</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Sol Music Blog</NavLink></li>
                                    <li><NavLink className="ft-item" to="">History</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <ul className="ft-list p-0">
                                <h5>PRODUCTS</h5>
                                    <li><NavLink className="ft-item" to="">Music</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Subscription</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Custom Music</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Footage</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-2">
                                <ul className="ft-list p-0">
                                <h5>PLAYLISTS</h5>
                                    <li><NavLink className="ft-item" to="">Newsletter</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Careers</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Press</NavLink></li>
                                    <li><NavLink className="ft-item" to="">Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}
