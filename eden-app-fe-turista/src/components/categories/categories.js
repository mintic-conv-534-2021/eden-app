import React from "react";
import Slider from "react-slick";
import './categories.css';
import CategoryItem from "./categoryItem";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
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

const Categories = () => (
    <div className="categories">
        <Slider {...settings}>
            <CategoryItem />
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />    
            <CategoryItem />  
            <CategoryItem />    
            <CategoryItem />      
        </Slider>
    </div>
)

export default Categories;
