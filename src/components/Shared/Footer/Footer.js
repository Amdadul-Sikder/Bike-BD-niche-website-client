import React from 'react';
import './footer.css'
import ssl from '../../../images/SSLCommerz.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h5><span>BIKE</span> BD</h5>
                        <p>Find Your Desire Bike</p>
                    </div>
                    <div className="col-lg-3">
                        <h5><span>SALES</span> HOURS</h5>
                        <p>Saturday – Thursday <br /> 09:00AM – 06:30PM</p>
                        <p>Friday: Closed</p>
                    </div>
                    <div className="col-lg-3">
                        <h5><span>SERVICE</span> HOURS</h5>
                        <p>Saturday – Thursday <br /> 12:00PM – 06:30PM</p>
                        <p>Friday: Closed</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-icon">
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-youtube-square"></i>
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="payment-icon">
                        <img src={ssl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;