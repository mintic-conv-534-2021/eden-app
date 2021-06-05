import React, { useEffect, useState } from "react";
import { Typography, Row, Col } from "antd";
import axios from "axios";

import Slider from "react-slick";
import "./organizationItemDetail.css";
import { API_ADMIN } from "../../context/constants";
import ProductItem from "../modules/productModule/productItem";

const { Title } = Typography;
const urlGET = API_ADMIN + "organizacion/";

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

const OrganizationItemDetail = (props) => {
  const [organization, setOrganization] = useState("");
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    let item = props.location.state;

    if (typeof item !== "undefined") {
      axios
        .get(urlGET + item.props.organization.organizacionId)
        .then((res) => {
          setOrganization(res.data.organizacionDTO);
          setCatalogs(
            GetArrayElements(
              res.data.organizacionDTO.productosByCatalogoProductoMap
            )
          );
        })
        .catch(function (error) {
          setOrganization({});
          console.log(error);
        });
    } else {
      setOrganization("");
    }

    const GetArrayElements = (vard) => {
      let keys = Object.keys(vard);
      let itemsArr1 = [];

      let CatalogProduct = {
        key: 0,
        name: "",
        items: {},
      };

      for (let i = 0; i < keys.length; i++) {
        const CustomObj = Object.create(CatalogProduct);
        CustomObj.key = i;
        CustomObj.name = keys[i];
        CustomObj.items = vard[keys[i]];
        itemsArr1.push(CustomObj);
      }
      return itemsArr1;
    };
  }, [props]);

  return (
    <div className="organization-item-detail">
      {organization !== "" && (
        <div>
          <div>
            <Title>Paseo el Edén - {organization.nombre}</Title>
            <div className="breadcrumb">Home / Restaurantes </div>
            <div className="banner">
              <div className="card-item">
                <img
                  className="photo-item"
                  src={organization.urlBanner}
                  alt=""
                />
              </div>
            </div>
            <div className="description">
              <h2>{organization.nombre}</h2>
              <p>{organization.descripcion}</p>
              <p className="address">{organization.direccion}</p>
              <p className="email-address">{organization.email}</p>
            </div>
          </div>
          <div>
            {catalogs != null &&
              catalogs.map((item) => (
                <Row wrap="false" key={item.key}>
                  <Col flex="auto">
                    <Title level={2}>{item.name}</Title>
                    <Slider {...settings}>
                      {item.items.length != null &&
                        item.items.map((item) => (
                          <ProductItem key={item.productoId} product={item} />
                        ))}
                    </Slider>
                  </Col>
                </Row>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationItemDetail;
