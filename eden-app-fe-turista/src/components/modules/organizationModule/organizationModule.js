import React from "react";
import { Typography } from 'antd';
import OrganizationItem from "./organizationItem";
import Slider from "react-slick";
import './organizationModule.css';

const { Title } = Typography;

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1008,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const OrganizationModule = () => (
    <div className="organization-module">
        <Title level={2}>NOMBRE MÓDULO # 2 - ORGANIZACIONES</Title>

        <Slider {...settings}>
            <OrganizationItem />
            <OrganizationItem />
        </Slider>
    </div>
)

export default OrganizationModule;