import React, { useEffect, useState } from "react";
import { Typography } from "antd";

import Slider from "react-slick";
import "./productModule.css";
import ProductItem from "./productItem";
import axios from "axios";

import { API_ADMIN } from "../../../context/constants";
const { Title } = Typography;

const urlGET = API_ADMIN + "producto/catalogo-organizacion/";

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
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1075,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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

const ProductModule = (props) => {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [productCatalog, setProductCatalog] = useState("");
  const [products, setProducts] = useState({});

  useEffect(() => {
    if (typeof props !== "undefined") {
      setSelectedCategory(props.item.item);

      axios
        .get(urlGET + 1)
        .then((res) => {
          setProducts(res.data.productoDTOList);
          setProductCatalog(res.data.productoDTOList[0].catalogoProductoId);
        })
        .catch(function (error) {
          setProducts({});
          setProductCatalog("");
          console.log(error);
        });
    }
  }, [props]);

  return (
    <div className="products-module">
      {typeof selectedCategory !== "undefined" && (
        <div>
          <Title level={2}>{productCatalog}</Title>
          <Slider {...settings}>
            {products.length != null &&
              products.map((item) => (
                <ProductItem
                  key={item.productoId}
                  product={item}
                />
              ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProductModule;
