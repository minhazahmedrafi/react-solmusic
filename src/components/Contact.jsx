import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default class Contact extends Component {
render() {
return (
<Fragment>
    <section id="contact">
        <div className="">
            <div className="row">
                <div className="col-md-6 p-0">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.129524332806!2d91.82596217862815!3d24.899837316974715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1618767273897!5m2!1sen!2sbd"
                            allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="col-md-6 p-0">
                    <div className="contact-area">
                        <h1>Get in touch</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore mag na aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed doe iusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <ul>
                            <li>Main Road , No 25/11</li>
                            <li>+34 556788 3221</li>
                            <li>contact@solmusic.com</li>
                        </ul>
                        <form action="#" className="contact-form py-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" placeholder="Subject" />
                                    <textarea name="message" id="" rows="6" placeholder="Message"></textarea>
                                    <NavLink to="" className="try-btn">Send Message</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</Fragment>
)
}
}