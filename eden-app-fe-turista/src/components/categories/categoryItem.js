import React from "react";
import { Card, Typography } from 'antd';
import './categoryItem.css';

const { Title } = Typography;

const CategoryItem = (props) => {
const item = props.category;

const handleClick = (e) => {
    e.item = item;
};

return(
    <div className="category-item">
        <Card
            hoverable
            className="card"
            cover={<img alt="" className="photo" src={item.urlImagen} />}
            onClick={(i) => handleClick(i)}
        >
        </Card>
        <Title className="title" level={5}>{item.catalogoOrganizacionNombre}</Title>
        <div className="card-description">{item.descripcion}</div>
    </div>
)};

export default CategoryItem;