import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import hero from '../img/hero-bg.png'
import brain from '../img/icons/brain.png';
import pointer from '../img/icons/pointer.png';
import smart from '../img/icons/smartphone.png';
import art1 from '../img/concept/1.jpg';
import art2 from '../img/concept/2.jpg';
import art3 from '../img/concept/3.jpg';
import art4 from '../img/concept/4.jpg';
import check from '../img/icons/check-icon.png';
import pre1 from '../img/premium/1.jpg';
import pre2 from '../img/premium/2.jpg';
import pre3 from '../img/premium/3.jpg';
import pre4 from '../img/premium/4.jpg';

export default class Home extends Component {
render() {
return (
<Fragment>
    <section id="home">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="left-content">
                        <div className="left-text">
                            <h1> <span>Music</span> for<br /> everyone.</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                        <div className="left-buttons">
                            <NavLink className="download-btn" to="#">downlaod now</NavLink>
                            <NavLink className="start-free-btn" to="#">start free trial</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="right-img">
                        <img className="img-fluid" src={hero} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="access">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="access-left-title">
                        <h1>Unlimited Access to 100K tracks</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-try-now">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida.</p>
                        <NavLink className="try-btn" to="">TRY IT NOW</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="how-works">
        <div className="container">
            <div className="row">
                <div className="col-10 work-title">
                    <h1>How it works</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="work-item">
                        <div className="work-icon">
                            <img src={brain} alt="" />
                        </div>
                        <h4>Create an account</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-item">
                        <div className="work-icon">
                            <img src={pointer} alt="" />
                        </div>
                        <h4>Choose a plan</h4>
                        <p>Donec in sodales dui, a blandit nunc. Pellen-tesque id eros venenatis, sollicitudin neque
                            sodales, vehicula nibh. Nam massa odio, portti-tor vitae efficitur non.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="work-item">
                        <div className="work-icon">
                            <img src={smart} alt="" />
                        </div>
                        <h4>Download Music</h4>
                        <p>Ablandit nunc. Pellentesque id eros venenatis, sollicitudin neque sodales, vehicula nibh. Nam
                            massa odio, porttitor vitae efficitur non, ultric-ies volutpat tellus.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="artist" className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-art-title">
                        <h1>Our Concept & artists</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-art-text">
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-3 col-sm-6">
                    <div className="single-artist">
                        <img className="img-fluid" src={art1} alt="" />
                        <h5 className="text-center">Soul Music</h5>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-artist">
                        <img className="img-fluid" src={art2} alt="" />
                        <h5 className="text-center">Live Concerts</h5>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-artist">
                        <img className="img-fluid" src={art3} alt="" />
                        <h5 className="text-center">Dj Sets</h5>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-artist">
                        <img className="img-fluid" src={art4} alt="" />
                        <h5 className="text-center">Live Streems</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="subscription">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-sub-text">
                        <h1>Subscription from $15/month</h1>
                        <h3>Start a free trial now</h3>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <NavLink to="" className="try-btn">TRY IT NOW</NavLink>
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="sub-list">
                        <li> <img src={check} alt="check icon" /> Play any track</li>
                        <li> <img src={check} alt="check icon" /> Listen offline</li>
                        <li> <img src={check} alt="check icon" /> No ad interruptions</li>
                        <li> <img src={check} alt="check icon" /> Unlimited skips</li>
                        <li> <img src={check} alt="check icon" /> High quality audio</li>
                        <li> <img src={check} alt="check icon" /> Shuffle play</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="premium" className="my-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-art-title">
                        <h1>Why go Premium</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-art-text">
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                            lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="row premium-sec">
                <div className="col-md-3 col-sm-6">
                    <div className="single-pre">
                        <img className="img-fluid" src={pre1} alt=""/>
                        <h4>No ad interruptions</h4>
                        <p>Consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-pre">
                        <img className="img-fluid" src={pre2} alt=""/>
                        <h4>High Quality</h4>
                        <p>Ectetur adipiscing elit</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-pre">
                        <img className="img-fluid" src={pre3} alt=""/>
                        <h4>Listen Offline</h4>
                        <p>CSed do eiusmod tempor</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-pre">
                        <img className="img-fluid" src={pre4} alt=""/>
                        <h4>Download Music</h4>
                        <p>Adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</Fragment>
)
}
}