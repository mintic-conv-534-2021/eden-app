import React, { useState, useEffect } from "react";
import Banner from "../banner/banner";
import { Typography, Row, Col } from "antd";
import Categories from "../categories/categories";
import axios from "axios";
import Slider from "react-slick";
import OrganizationItem from "../organization/organizationItem"

import "./home.css";
import { API_ADMIN } from "../../context/constants";
const { Title } = Typography;

const urlCategories = API_ADMIN + "catalogo-organizacion?filtrar-activos=true";
const urlOrganizations = API_ADMIN + "organizacion/catalogo-organizacion/";

const Home = () => {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [organizations, setOrganizations] = useState({});
  const [viewTitle, setViewTitle] = useState(false);
  const [slidesPerRow, setSlidesPerRow] = useState(1);

  const settingsOrg = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesPerRow: slidesPerRow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesPerRow: slidesPerRow,
        },
      },
      {
        breakpoint: 755,
        settings: {
          slidesToShow: 2,
          slidesPerRow: slidesPerRow,
        },
      },
      {
        breakpoint: 420,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesPerRow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //Update only at first load
  useEffect(() => {
    axios
      .get(urlCategories)
      .then((res) => {
        setCategories(res.data.catalogoOrganizacionDTOList);

        const selected = res.data.catalogoOrganizacionDTOList[0];
        axios
          .get(urlOrganizations + selected.catalogoOrganizacionId)
          .then((res) => {
            setSelectedCategory(selected);
            setOrganizations(res.data.organizacionDTOList);
            setViewTitle(true);

            if (res.data.organizacionDTOList.length > 4){
              setSlidesPerRow(2);
            }
          })
          .catch(function (error) {
            setOrganizations({});
            console.log(error);
            setViewTitle(false);
          });
      }).catch(function (error) {
        setOrganizations({});
        console.log(error);
        setViewTitle(false);
      });
  }, []);

  const handleClick = (e) => {
    if (typeof e.item !== "undefined") {
      setSelectedCategory(e.item);

      setViewTitle(false);
      setOrganizations({});
      
      axios
        .get(urlOrganizations + e.item.catalogoOrganizacionId)
        .then((res) => {
          setOrganizations(res.data.organizacionDTOList);
          setViewTitle(true);
          if (res.data.organizacionDTOList.length > 4){
            setSlidesPerRow(2);
          }
        })
        .catch(function (error) {
          setOrganizations({});
          console.log(error);
          setViewTitle(false);
        });
    }
  };

  const GenerateProps = (e) => {
    let props = {
      organization: e,
      category: selectedCategory.catalogoOrganizacionNombre,
    };
    return props;
  };

  const RenderOrganization = (item) =>{
    if (item.activo){
      return <OrganizationItem key={item.organizacionId} organization={GenerateProps(item)} />
    }
  }

  return (
    <div className="home">
      <Title>Paseo el Edén</Title>
      <Banner />
      <Row>
        <Col flex="auto" onClick={handleClick}>
          <Categories items={categories} />
        </Col>
      </Row>
      <Row wrap={false} className="organization-items">
        <Col flex="auto">
          <Row>
            <Col>
              {organizations.length != null &&
                <Title level={2} className={viewTitle ? "title" : "title-hide"}>
                  Catálogo de {selectedCategory.catalogoOrganizacionNombre}
                </Title>}
            </Col>
          </Row>
          <Slider {...settingsOrg}>
            {organizations.length != null &&
              organizations.map((item) => (
                RenderOrganization(item)
              ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
