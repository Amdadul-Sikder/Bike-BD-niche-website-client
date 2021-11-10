import React from 'react';
import './Banner.css'
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner-img" src={banner} alt="" />
        </div>
    );
};

export default Banner;