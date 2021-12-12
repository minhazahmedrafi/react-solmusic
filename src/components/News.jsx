import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import news1 from '../img/blog/1.jpg';
import news2 from '../img/blog/2.jpg';
import news3 from '../img/blog/3.jpg';

export default class News extends Component {
    render() {
        return (
            <Fragment>
                <section id="news-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="news-item">
                                    <img className="img-fluid" src={news1} alt=""/>
                                    <div className="news-date">April 14, 2019</div>
                                    <h3>Top 10 best songs in April</h3>
                                    <div className="news-meta">by <NavLink className="news-link" to="#">coderminhaz</NavLink> in <NavLink className="news-link" to="">Music</NavLink></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="news-item">
                                    <img className="img-fluid" src={news2} alt=""/>
                                    <div className="news-date">April 14, 2019</div>
                                    <h3>Top 10 best songs in April</h3>
                                    <div className="news-meta">by <NavLink className="news-link" to="#">coderminhaz</NavLink> in <NavLink className="news-link" to="">Music</NavLink></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="news-item">
                                    <img className="img-fluid" src={news3} alt=""/>
                                    <div className="news-date">April 14, 2019</div>
                                    <h3>Top 10 best songs in April</h3>
                                    <div className="news-meta">by <NavLink className="news-link" to="#">coderminhaz</NavLink> in <NavLink className="news-link" to="">Music</NavLink></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="site-pagination">
                            <NavLink className="pagination-num" to="#">01.</NavLink>
                            <NavLink className="pagination-num" to="#">02.</NavLink>
                            <NavLink className="pagination-num" to="#">03.</NavLink>
                            <NavLink className="pagination-num" to="#">04.</NavLink>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
