import React, { useState, useEffect } from "react";
import Banner from "../banner/banner";
import Modules from "../modules/modules";
import { Typography } from "antd";
import Categories from "../categories/categories";
import axios from "axios";

import { API_ADMIN } from "../../context/constants";
const { Title } = Typography;

const urlGET = API_ADMIN + "catalogo-organizacion";

const Home = () => {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});

  //Update only at first load
  useEffect(() => {
    axios.get(urlGET).then((res) => {
      setCategories(res.data.catalogoOrganizacionDTOList);
      setSelectedCategory(res.data.catalogoOrganizacionDTOList[0]);
    });
  }, []);

  return (
    <div className="home">
      <Title>Paseo el Edén</Title>
      <Banner />
      <Categories items={categories} />
      <Modules item={selectedCategory} />
    </div>
  );
};
export default Home;
