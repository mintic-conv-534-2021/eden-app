import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CategoryItem from "./categoryItem";
import axios from "axios";

import "./categories.css";
import { API_ADMIN } from "../../context/constants";

const urlGET = API_ADMIN + "catalogo-organizacion";

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

const Categories = () => {
  const [categories, setCategories] = useState({});
  //Update only at first load
  useEffect(() => {
    axios
      .get(urlGET)
      .then((res) => setCategories(res.data.catalogoOrganizacionDTOList));
  }, []);

  return (
    <div className="categories">
      <Slider {...settings}>
        {categories.length != null &&
              categories.map((item) => (
                <CategoryItem
                  key={item.catalogoOrganizacionId}
                  category={item}
                />
              ))}
      </Slider>
    </div>
  );
};

export default Categories;
