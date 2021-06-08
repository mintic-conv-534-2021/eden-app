import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Tooltip } from "antd";
import axios from "axios";

import Slider from "react-slick";
import "./organizationItemDetail.css";
import { API_ADMIN } from "../../context/constants";
import ProductItem from "../modules/productModule/productItem";

import {
  YoutubeOutlined, WhatsAppOutlined, InfoCircleOutlined,
  InstagramOutlined, FacebookOutlined, TwitterOutlined
} from '@ant-design/icons';

const { Title } = Typography;
const urlGET = API_ADMIN + "organizacion/";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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
  const [catalogOrganization, setCatalogOrganization] = useState("");
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    let item = props.location.state;

    if (typeof item !== "undefined") {
      const org = item.props.organization;
      setCatalogOrganization(org.category);

      axios
        .get(urlGET + org.organization.organizacionId)
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

  const GenerateExternalLink = (e) => {
    var linki = e;
    if (linki.toLowerCase().indexOf("https://") === -1) {
      linki = "https://" + linki;
    }
    return linki;
  }

  const GenerateWhatsapp = (e) => {
    return "https://wa.me/" + e.replace(/\s/g, '');
  }

  return (
    <div className="organization-item-detail">
      {organization !== "" && (
        <div>
          <div>
            <Title><a href="/">Paseo el Edén</a> - {organization.nombre}</Title>
            <div className="breadcrumb">
              <a href="/">Home</a> / {catalogOrganization}
            </div>
            <div className="banner">
              <div className="card-item" style={{
                backgroundImage: 'url(' + organization.urlBanner + ')'
              }}>
                <div className="photo-container">
                  <img className="photo-logo" src={organization.urlLogo} alt="" />
                </div>
              </div>
            </div>
            <div className="description">
              <h2>{organization.nombre}</h2>
              <p className="description-text">{organization.descripcion}</p>
              <span className="address">Dirección: {organization.direccion}</span>
              <br />
              <span className="phone-number">Teléfono: {organization.telefono}</span>
              {Object.keys(organization.redSocial).length > 0 &&
                <div className="social-section">
                  {organization.redSocial.whatsapp !== "" &&
                    <a href={GenerateWhatsapp(organization.redSocial.whatsapp)} target="_blank" rel="noreferrer">
                      <Tooltip placement="top" title={organization.redSocial.whatsapp}>
                        <WhatsAppOutlined className="social-icon" />
                      </Tooltip>
                    </a>
                  }
                  {organization.redSocial.urlInstagram !== "" &&
                    <a href={GenerateExternalLink(organization.redSocial.urlInstagram)} target="_blank" rel="noreferrer">
                      <Tooltip placement="top" title={organization.redSocial.urlInstagram}>
                        <InstagramOutlined className="social-icon" />
                      </Tooltip>
                    </a>
                  }
                  {organization.redSocial.urlFacebook !== "" &&
                    <a href={GenerateExternalLink(organization.redSocial.urlFacebook)} target="_blank" rel="noreferrer">
                      <Tooltip placement="top" title={organization.redSocial.urlFacebook}>
                        <FacebookOutlined className="social-icon" />
                      </Tooltip>
                    </a>
                  }
                  {organization.redSocial.urlTwitter !== "" &&
                    <a href={GenerateExternalLink(organization.redSocial.urlTwitter)} target="_blank" rel="noreferrer">
                      <Tooltip placement="top" title={organization.redSocial.urlTwitter}>
                        <TwitterOutlined className="social-icon" />
                      </Tooltip>
                    </a>
                  }
                  {organization.redSocial.urlTiktok !== "" &&
                    <a href={GenerateExternalLink(organization.redSocial.urlTiktok)} target="_blank" rel="noreferrer">
                      <Tooltip placement="top" title={organization.redSocial.urlTiktok}>
                        <YoutubeOutlined className="social-icon" />
                      </Tooltip>
                    </a>
                  }
                  {organization.redSocial.webPage !== "" &&
                    <a href={GenerateExternalLink(organization.redSocial.webPage)} target="_blank" rel="noreferrer">
                      <Tooltip placement="top" title={organization.redSocial.webPage}>
                        <InfoCircleOutlined className="social-icon" />
                      </Tooltip>
                    </a>
                  }
                </div>
              }
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
