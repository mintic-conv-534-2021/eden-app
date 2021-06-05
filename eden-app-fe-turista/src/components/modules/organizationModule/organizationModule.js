import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import OrganizationModuleItem from "./organizationModuleItem";
import Slider from "react-slick";
import axios from "axios";

import { API_ADMIN } from "../../../context/constants";
import "./organizationModule.css";

const { Title } = Typography;

const urlGET = API_ADMIN + "organizacion/catalogo-organizacion/";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const OrganizationModule = (props) => {
  const [organizations, setOrganizations] = useState({});

    const id = 5;
  //Update only at first load
  useEffect(() => {
    axios
      .get(urlGET + id)
      .then((res) => setOrganizations(res.data.organizacionDTOList));
  }, []);

  return (
    <div className="organization-module">
      <Title level={2}>NOMBRE MÓDULO # 2 - ORGANIZACIONES</Title>

      <Slider {...settings}>

      {organizations.length != null &&
              organizations.map((item) => (
                <OrganizationModuleItem
                  key={item.organizacionId}
                  category={item}
                />
              ))}
      </Slider>
    </div>
  );
};

export default OrganizationModule;
