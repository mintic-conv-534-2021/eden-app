import React from "react";
import Slider from "react-slick";
import './categories.css';
import CategoryItem from "./categoryItem";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 1075,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 835,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
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
