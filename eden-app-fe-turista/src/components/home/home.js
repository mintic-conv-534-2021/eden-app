import React from "react";
import Banner from "../banner/banner"
import Modules from "../modules/modules"
import { Typography } from 'antd';
import Categories from "../categories/categories";

const { Title } = Typography;

const Home = () => (
    <div className="home">
        <Title>Paseo el Edén</Title>
        <Banner />
        <Categories />
        <Modules />
    </div>
)

export default Home;
