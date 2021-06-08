import React from "react";
import Slider from "react-slick";

import Banner1 from "../../images/Banner1.png";
import Banner2 from "../../images/Banner2.png";
import Banner3 from "../../images/Banner3.png";

import "./banner.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
};

const Banner = () => (
    <div className="header-banner">
        <div>
            <Slider {...settings}>
                <div>
                    <img className="banner-photo" alt="" src={Banner1} />
                </div>
                <div>
                    <img className="banner-photo" alt="" src={Banner2} />
                </div>
                <div>
                    <img className="banner-photo" alt="" src={Banner3} />
                </div>
            </Slider>
        </div>
    </div>
)

export default Banner;
