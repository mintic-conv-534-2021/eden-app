import React from "react";
import { Card, Typography } from 'antd';
import './categoryItem.css';

const { Title } = Typography;

const CategoryItem = () => (
    <div className="category-item">
        <Card
            hoverable
            className="card"
            cover={<img alt="" src="" />}
        >
        </Card>
        <Title level={5}>Nombre Categoría</Title>
    </div>
)

export default CategoryItem;