import React, { Component, Fragment } from 'react'
import art1 from '../img/concept/1.jpg';
import art2 from '../img/concept/2.jpg';
import art3 from '../img/concept/3.jpg';
import art4 from '../img/concept/4.jpg';

export default class About extends Component {
render() {
return (
<Fragment>
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
</Fragment>
)
}
}