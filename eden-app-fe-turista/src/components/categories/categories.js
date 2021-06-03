import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import CategoryItem from "./categoryItem";

import "./categories.css";

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
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1075,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 835,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 585,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Categories = (props) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    setCategories(props);
  }, [props]);

  return (
    <div className="categories">
      {typeof categories.items !== "undefined" &&
        <Slider {...settings}>
          {categories.items.length != null &&
                categories.items.map((item) => (
                  <CategoryItem
                    key={item.catalogoOrganizacionId}
                    category={item}
                  />
                ))}
        </Slider>
      }
    </div>
  );
};

export default Categories;
