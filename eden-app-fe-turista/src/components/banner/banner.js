import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { isMobile } from "react-device-detect";

import "./banner.css";
import { API_ADMIN } from "../../context/constants";

const urlEvents = API_ADMIN + "evento?filtrar-activos=true";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
};

const Banner = () => {
    const [events, setEvents] = useState({});

    //Update only at first load
    useEffect(() => {
        axios
            .get(urlEvents)
            .then((res) => {
                setEvents(res.data.eventoDTOList);
            }).catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="header-banner">
            <div>
                <Slider {...settings}>
                    {events.length != null && events.map((item) => (
                        <img key={item.idEvento} 
                        className={isMobile ? "banner-photo-mobile" : "banner-photo"}
                        alt="" 
                        src={isMobile ? item.urlImagenMovil : item.urlImagenWeb} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner;
