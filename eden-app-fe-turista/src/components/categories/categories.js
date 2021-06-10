import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import CategoryItem from "./categoryItem";

import "./categories.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 755,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
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
