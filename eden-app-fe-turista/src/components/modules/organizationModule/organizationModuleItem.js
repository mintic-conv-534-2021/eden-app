import React from "react";
import { Typography, Card, Row } from 'antd';
import './organizationModuleItem.css';

const { Title } = Typography;

const OrganizationItem = (props) => {
const item = props.category;

return(
    <div className="organization-module-item">
        <Row>
            <div className="title-container">
                <Title level={5}>{item.nombre}</Title>
            </div>
            <div>
                <p className="organization-description">
                    {item.descripcion}
                </p>
            </div>
            <Card
                hoverable
                className="card"
                cover={<img alt="" className="organization-photo" src={item.urlBanner} />}
            >
            </Card>
        </Row>
    </div>
)};

export default OrganizationItem;