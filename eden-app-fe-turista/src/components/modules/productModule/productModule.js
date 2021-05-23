import React from "react";
import { Typography } from 'antd';

import Slider from "react-slick";
import './productModule.css';
import ProductItem from "./productItem";

const { Title } = Typography;

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1075,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 585,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ProductModule = () => (
    <div className="products-module">
        <Title level={2}>NOMBRE MÓDULO # 1 - PRODUCTOS</Title>

        <Slider {...settings}>
            {/* First Five */}
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            {/* Five */}
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </Slider>
    </div>
)

export default ProductModule;