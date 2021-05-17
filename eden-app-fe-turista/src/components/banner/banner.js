import React from "react";
import Slider from "react-slick";

const contentStyle = {
    height: '380px',
    color: 'white',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#F84444',
};

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
};

const Banner = () => (
    <div className="banner">
        <Slider {...settings}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Slider>

    </div>
)

export default Banner;
